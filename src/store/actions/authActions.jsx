export const signIn = (credentials) => {
  return (dispatch, getState, { firebase }) => {
    const auth = firebase.auth();
    auth
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch({ type: "LOGIN_SUCCESS" });
      })
      .catch((err) => {
        dispatch({ type: "LOGIN_ERROR", err });
      });
  };
};

export const signOut = () => {
  return (dispatch, getState, { firebase }) => {
    const auth = firebase.auth();
    auth.signOut().then(() => {
      dispatch({ type: "LOGOUT_SUCCESS" });
    });
  };
};
