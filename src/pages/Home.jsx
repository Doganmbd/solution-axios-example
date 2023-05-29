import React from "react";
import TutorialList from "../components/TutorialList";
import AddTutorial from "../components/AddTutorial";
import axios from "axios";

const Home = () => {
  const url = "https://tutorial-api.fullstack.clarusway.com/tutorials/";

  //! GET (read işlemi)
  const getUrl = async () => {
    /* Axios objeleri data adında bir yerde saklıyor. */
    try {
          const { data } = await axios.get(url);
    console.log(data);
    } catch (error) {
        console.log(error);
    }
  
  };

  getUrl();

  return (
    <div>
      <AddTutorial />
      <TutorialList />
    </div>
  );
};

export default Home;
