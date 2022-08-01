import React, { useState, useEffect } from 'react';
import './App.scss';
import PupPicContainer from './PupPicContainer/PupPicContainer';
import PupPicList from './PupPicList/PupPicList'; 
import Header from './Header/Header';

function App()  {
  let [pupPics, setPupPics] = useState([]);
  let [pupPic, setPupPic] = useState('');

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random/10")
      .then(response => response.json())
      .then(data => {
        setPrimaryPupPic(data.message[0]);
        setPupPics(data.message);
      })
  }, []);

  const setPrimaryPupPic = (imageURL: string) => {
    setPupPic(imageURL);
  }

  return (
    <div className="App">
      <Header />
      <div className="container">
        <PupPicContainer pupPic={pupPic}/>
        <PupPicList pupPics={pupPics} setPrimaryPupPic={setPrimaryPupPic} />
      </div>
    </div>
  );  
}

export default App;
