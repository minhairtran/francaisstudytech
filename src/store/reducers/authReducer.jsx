const initState = {
  signUpError: "",
  signInError: "",
  signUpFormPasswordConfirmationError: "",
  loggedIn: false,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "ENTER_CREDENTIAL":
      return {
        ...state,
        signUpError: null,
        signInError: null,
        signUpFormPasswordConfirmationError: null,
      };
    case "LOGIN_SUCCESS":
      return {
        ...initState,
        loggedIn: true,
      };
    case "LOGIN_ERROR":
      return {
        ...state,
        signInError: action.err.message,
        loggedIn: false,
      };
    case "LOGOUT_SUCCESS":
      return { ...state, loggedIn: false };
    case "SIGNUP_SUCCESS":
      return {
        ...initState,
        loggedIn: true,
      };
    case "SIGNUP_ERROR":
      return {
        ...state,
        signUpError: action.err,
        loggedIn: false,
      };
    case "SIGNUP_ERROR_PASSWORD_CONFIRMATION":
      return {
        ...state,
        signUpFormPasswordConfirmationError: action.err,
        loggedIn: false,
      };
    default:
      return state;
  }
};

export default authReducer;
