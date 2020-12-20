const initState = {
};

const courseReducer = (state = initState, action) => {
  switch (action.type) {
    case "ENROLL_COURSE":
      console.log(action.payload);
      return state;
    default:
      return state;
  }
};

export default courseReducer;
