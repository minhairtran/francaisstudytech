export const ACTION_TYPE = {
  ENTER_CREDENTIAL: "authentication/ENTER_CREDENTIAL",
  LOGIN_SUCCESS: "authentication/LOGIN_SUCCESS",
  LOGIN_ERROR: "authentication/LOGIN_ERROR",
  LOGOUT_SUCCESS: "authentication/LOGOUT_SUCCESS",
  SIGNUP_SUCCESS: "authentication/SIGNUP_SUCCESS",
  SIGNUP_ERROR: "authentication/SIGNUP_ERROR",
  SIGNUP_ERROR_PASSWORD_CONFIRMATION: "authentication/SIGNUP_ERROR_PASSWORD_CONFIRMATION"
}

const initState = {
  signUpError: "",
  signInError: "",
  signUpFormPasswordConfirmationError: "",
  loggedIn: false,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case ACTION_TYPE.ENTER_CREDENTIAL:
      return {
        ...state,
        signUpError: null,
        signInError: null,
        signUpFormPasswordConfirmationError: null,
      };
    case ACTION_TYPE.LOGIN_SUCCESS:
      return {
        ...initState,
        loggedIn: true,
      };
    case ACTION_TYPE.LOGIN_ERROR:
      return {
        ...state,
        signInError: action.err.message,
        loggedIn: false,
      };
    case ACTION_TYPE.LOGOUT_SUCCESS:
      return { ...state, loggedIn: false };
    case ACTION_TYPE.SIGNUP_SUCCESS:
      return {
        ...initState,
        loggedIn: true,
      };
    case ACTION_TYPE.SIGNUP_ERROR:
      return {
        ...state,
        signUpError: action.err,
        loggedIn: false,
      };
    case ACTION_TYPE.SIGNUP_ERROR_PASSWORD_CONFIRMATION:
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
