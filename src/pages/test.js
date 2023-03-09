import { useState } from "react";

const Test = () => {
  const [users, setUsers] = useState([]);

  const getItems = async () => {
    const data = await fetch("/api/users");
    data.json().then((res) => setUsers(res));
  };

  return (
    <div>
      <h2>List of users</h2>
      <button onClick={getItems}>Display</button>
      <div>
        {users.length === 0 ? (
          <div>Loading...</div>
        ) : (
          users.map((user, index) => {
            return <div key={index}>{user.name}</div>;
          })
        )}
      </div>
    </div>
  );
};

export default Test;
