import User from "./User";
import "./styles.css";
import axios from "axios";
import { useEffect, useState } from "react";

// https://randomuser.me/api

export default function App() {
  const [picture, setPicture] = useState(null);
  const [name, setName] = useState(null);

  const getNewUser = () => {
    axios.get('https://randomuser.me/api')
      .then((response)=> {
        if (response.data) {
          //in this case i wrote by getting array 0 element, 
          //but in other case, if data will be big, 
          //of course I will wrote by maping, or depending on case smth else
          setName(response.data.results[0].name);
          setPicture(response.data.results[0].picture)
        }
      })
      .catch((error) => {
        console.log(error, "error");
      })
  };

  useEffect(()=> {
    getNewUser()
  }, [])

  return (
    <div className="App">
      <User getUser={()=> getNewUser()} userName={name} userPic={picture}/>
    </div>
  );
}
