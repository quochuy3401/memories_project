const userReducer = (state = null, action) => {
  switch (action.type) {
    case "SIGN_IN":
      localStorage.setItem("profile", JSON.stringify({...action.payload}))
      return action.payload;
    case "AUTO_SIGNIN":
      return action.payload;
    case "LOG_OUT":
      localStorage.clear();
      return null;
    default:
      return state;
  }
};

export default userReducer;
