export const enterCredential = () => {
  return (dispatch, getState) => {
    dispatch({ type: "ENTER_CREDENTIAL" });
  };
};

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

export const signUp = (account) => {
  return (dispatch, getState, { firebase }) => {
    if (account.password === account.passwordConfirmation) {
      const auth = firebase.auth();
      const firestore = firebase.firestore();
      auth
        .createUserWithEmailAndPassword(account.email, account.password)
        .then((resp) => {
          return (
            firestore.collection("users").doc(resp.user.uid).set({
              email: account.email,
              experience: 0,
              level: 1,
              totalExperience: 0,
              voiceRecord: "",
              createAt: firebase.firestore.FieldValue.serverTimestamp(),
              updateAt: firebase.firestore.FieldValue.serverTimestamp(),
            }),
            firestore.collection("usersCourseProgress").doc(resp.user.uid).set({
              courses: [],
              updateAt: firebase.firestore.FieldValue.serverTimestamp(),
            })
          );
        })
        .then(() => {
          signOut();
          emailVerification(account.email, firebase, dispatch);
        })
        .catch((err) => {
          dispatch({ type: "SIGNUP_ERROR", err });
        });
    } else {
      dispatch({
        type: "SIGNUP_ERROR_PASSWORD_CONFIRMATION",
        err: "Password được nhập lại không đúng",
      });
    }
  };
};

export const emailVerification = (email, firebase, dispatch) => {
  firebase
    .auth()
    .sendSignInLinkToEmail(email, {
      url: "http://localhost:3000/",
      handleCodeInApp: true,
    })
    .then(function () {
      // The link was successfully sent. Inform the user.
      // Save the email locally so you don't need to ask the user for it again
      // if they open the link on the same device.
      window.localStorage.setItem("emailForSignIn", email);
      // Confirm the link is a sign-in with email link.
      if (firebase.auth().isSignInWithEmailLink(window.location.href)) {
        // Additional state parameters can also be passed via URL.
        // This can be used to continue the user's intended action before triggering
        // the sign-in operation.
        // Get the email if available. This should be available if the user completes
        // the flow on the same device where they started it.
        var verifiedEmail = window.localStorage.getItem("emailForSignIn");
        if (!verifiedEmail) {
          // User opened the link on a different device. To prevent session fixation
          // attacks, ask the user to provide the associated email again. For example:
          verifiedEmail = window.prompt(
            "Please provide your email for confirmation"
          );
        }
        // The client SDK will parse the code from the link for you.
        firebase
          .auth()
          .signInWithEmailLink(verifiedEmail, window.location.href)
          .then(function (result) {
            // Clear email from storage.
            window.localStorage.removeItem("emailForSignIn");
            // You can access the new user via result.user
            // Additional user info profile not available via:
            // result.additionalUserInfo.profile == null
            // You can check if the user is new or existing:
            // result.additionalUserInfo.isNewUser
          })
          .catch(function (error) {
            // Some error occurred, you can inspect the code: error.code
            // Common errors could be invalid email and invalid or expired OTPs.
          });
      }
      dispatch({ type: "SIGNUP_SUCCESS" });
    })
    .catch(function (error) {
    });
};
