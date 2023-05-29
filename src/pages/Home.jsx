import React from "react";
import TutorialList from "../components/TutorialList";
import AddTutorial from "../components/AddTutorial";

const Home = () => {
  return (
    <div>
      <AddTutorial />
      <TutorialList />
    </div>
  );
};

export default Home;
