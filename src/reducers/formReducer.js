const formReducer = (state, action) => {
  switch (action.type) {
    case "start-login": {
      return {
        ...state,
        status: "login-pending",
      };
    }
    case "login": {
      const finalUser = action.action(action.event, action.payload);
      return {
        ...state,
        user: finalUser,
        status: finalUser ? "successful-login" : "login-failed",
      };
    }
    case "start-registration": {
      return {
        ...state,
        status: "registration-pending",
      };
    }
    case "register": {
      const finalUsers = action.action(action.event, action.payload);
      return {
        ...state,
        user: null,
        users: finalUsers,
        status: finalUsers ? "successful-registration" : "registration-failed",
      };
    }
  }
};

export default formReducer;
