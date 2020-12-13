import React, {useState} from "react";
import Navbar from "../sharedComponents/Navbar";


const Home = (props) => {
  const [plusExperience, setPlusExperience] = useState("")

  return (
    <div className="container">
      <Navbar level="Lv.1" currentExperience="10" maxExperience="100" plusExperience={plusExperience}/>
    </div>
  );
};

export default Home;
