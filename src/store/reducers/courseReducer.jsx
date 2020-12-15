import A1Course from "../../images/A1Course.png";

const initState = {
  courses: [
    {
      img: A1Course,
      name: "A1",
      price: "123$",
      alt: "a1-course-image",
      status: "enrolled",
    },
    {
      img: A1Course,
      name: "A2",
      price: "Free",
      alt: "a2-course-image",
      status: "available",
    },
    {
      img: A1Course,
      name: "A3",
      price: "123$",
      alt: "a3-course-image",
      status: "available",
    },
    {
      img: A1Course,
      name: "A4",
      price: "Free",
      alt: "a4-course-image",
      status: "available",
    },
    {
      img: A1Course,
      name: "A5",
      price: "123$",
      alt: "a5-course-image",
      status: "available",
    },
    {
      img: A1Course,
      name: "A6",
      price: "Free",
      alt: "a6-course-image",
      status: "available",
    },
  ],
};

const courseReducer = (state = initState, action) => {
  switch (action.type) {
    case "ENROLL_COURSE":
      console.log(action.payload);
      break;

    default:
      break;
  }
  return state;
};

export default courseReducer;
