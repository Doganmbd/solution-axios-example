import React, { useEffect, useState } from "react";
import TutorialList from "../components/TutorialList";
import AddTutorial from "../components/AddTutorial";
import axios from "axios";

const Home = () => {
  const [apiData, setApiData] = useState();

  const url = "https://tutorial-api.fullstack.clarusway.com/tutorials/";

  //! GET (read işlemi)
  const getUrl = async () => {
    /* Axios objeleri data adında bir yerde saklıyor. Bu yüzden contructor yapıp çıkartıyoruz.*/
    try {
      const { data } = await axios.get(url);
      setApiData(data);
    } catch (error) {
      console.log(error);
    }
  };

  //! UseState içine URL den gellen verileri gönderdiğim için sürekli render işlemi olmaması için USEEFFECT kullanarak MOUNTED yaptım. 
  useEffect(() => {
    getUrl();
  }, []);

  /*  console.log(apiData);  */
  
  return (
    <div>
      <AddTutorial />
      <TutorialList />
    </div>
  );
};

export default Home;
