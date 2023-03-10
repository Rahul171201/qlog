import { useEffect, useReducer, useRef, useState } from "react";
import {
  List,
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache,
} from "react-virtualized";
import styles from "../styles/Test.module.css";

const ReactVirtualizedList = ({ users }) => {
  const cache = useRef(
    new CellMeasurerCache({
      fixedWidth: true,
      defaultHeight: 100,
    })
  );

  return (
    <div className={styles.mainWrapper}>
      <AutoSizer>
        {({ width, height }) => (
          <List
            width={width}
            height={height}
            rowHeight={cache.current.rowHeight}
            deferredMeasurementCache={cache.current}
            rowCount={users.data.length}
            rowRenderer={({ index, key, style, parent }) => {
              const user = users.data[index];
              console.log(user);
              return (
                <CellMeasurer
                  key={key}
                  cache={cache.current}
                  parent={parent}
                  columnIndex={0}
                  rowIndex={index}
                >
                  <div className={styles.userWrapper} style={style}>
                    <h2>{user.name}</h2>
                    <span>{user.email}</span>
                  </div>
                </CellMeasurer>
              );
            }}
          ></List>
        )}
      </AutoSizer>
    </div>
  );
};

const Test = () => {
  const userReducer = (state, action) => {
    switch (action.type) {
      case "start-fetch": {
        return {
          ...state,
          status: "pending",
        };
      }
      case "fetched": {
        return {
          ...state,
          data: action.result,
          status: "fulfilled",
        };
      }
    }
  };

  const [users, dispatchUsers] = useReducer(userReducer, {
    data: null,
    error: null,
    status: "idle",
  });

  const getUsers = async () => {
    const tempUserData = JSON.parse(window.localStorage.getItem("userData"));
    if (tempUserData) {
      dispatchUsers({ type: "fetched", result: tempUserData });
      return;
    }

    dispatchUsers({ type: "start-fetch" });
    const data = await fetch("/api/users");
    data
      .json()
      .then((res) => {
        window.localStorage.setItem("userData", JSON.stringify(res));
        dispatchUsers({ type: "fetched", result: res });
      })
      .catch((err) => {
        throw new Error(err);
      });
  };

  const [questions, setQuestions] = useState([]);

  const getQuestions = async () => {
    const data = await fetch("/api/questions");
    data.json().then((res) => setQuestions(res));
  };

  return (
    <div>
      <section>
        <h2>List of users</h2>
        <button onClick={getUsers}>Display</button>
        <div>
          {users.status === "fulfilled" ? (
            <ReactVirtualizedList users={users}> </ReactVirtualizedList>
          ) : // <div className={styles.tempWrapper}>
          //   {users.data.map((user, index) => {
          //     return (
          //       <div key={index} className={styles.userWrapper}>
          //         <h2>{user.name}</h2>
          //         <span>{user.email}</span>
          //       </div>
          //     );
          //   })}
          // </div>
          users.status === "pending" ? (
            <div>Loading...</div>
          ) : (
            <div>Click to display list</div>
          )}

          {/* {users.length === 0 ? (
            <div>Loading...</div>
          ) : (
            users.map((user, index) => {
              return <div key={index}>{user.name}</div>;
            })
          )} */}
        </div>
      </section>
      <section>
        <h2>List of questions</h2>
        <button onClick={getQuestions}>Display</button>
        <div>
          {questions.length === 0 ? (
            <div>Loading...</div>
          ) : (
            questions.map((question, index) => {
              return <div key={index}>{question.question}</div>;
            })
          )}
        </div>
      </section>
    </div>
  );
};

export default Test;
