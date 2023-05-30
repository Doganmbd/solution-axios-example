import React, { useEffect, useState } from "react";
import TutorialList from "../components/TutorialList";
import AddTutorial from "../components/AddTutorial";
import axios from "axios";

const Home = () => {
  //! Şayet TutorialList de can not read map derse buradan USESTATE in initial değerini [] veya () şeklinde yapmak gerekir.
  const [apiData, setApiData] = useState([]);

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
  //? Sadece Component mount oldugunda istek yapar
  useEffect(() => {
    getUrl();
  }, []);

  /*  console.log(apiData);  */

  //! POST (create işlemi)
  const postUrl = async (addTitle, addDescription) => {
    /* console.log(addTitle,addDescription); */
    try {
      await axios.post(url, {
        /* Diğer tarafta obje olarak gönderip buradada yakalayabiliriz ama ben burada obje şekline dönüştürmeyi tercih ettim. */
        title: addTitle,
        description: addDescription,
      });
    } catch (error) {
      console.log(error);
    }

    //! POST ile gönderdiğim veriyi GET ile çekiyorum ki ekranda görebileyim.
    getUrl();
  };

  //! DELETE (delete) işlemi  tutorials/:id
  const delData = async (selectId) => {
    try {
      await axios.delete(`${url}${selectId}/`);
    } catch (error) {
      console.log(error);
    }

    getUrl();
  };

  //! EDİT işlemi (update) PUT veya PATCH

  const putUrl = async (putId, putTİtle, putDescription) => {
    try {
      await axios.put(`${url}${putId}/`, {
        title: putTİtle,
        description: putDescription,
      });
      /*           await axios.patch(`${url}${putId}/`, {
      title: putTİtle,
      description: putDescription,
    }); */
    } catch (error) {
      console.log(error);
    }

    getUrl();
  };

  return (
    <div>
      <AddTutorial postUrl={postUrl} />
      <TutorialList apiData={apiData} delData={delData} putUrl={putUrl} />
    </div>
  );
};

export default Home;
