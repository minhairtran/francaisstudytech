const initState = {
  authError: Boolean,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        authError: false,
      };
    case "LOGIN_ERROR":
      return {
        ...state,
        authError: true,
      };
    case "LOGOUT_SUCCESS":
      return state
    default:
      return state;
  }
};

export default authReducer;
