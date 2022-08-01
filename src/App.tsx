import React, { useState, useEffect } from 'react';
import './App.scss';
import PupPicContainer from './PupPicContainer/PupPicContainer';
import PupPicList from './PupPicList/PupPicList'; 

function App()  {
  let [images, setImages] = useState([]);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random/10")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        
        setImages(data.message);
      })
  }, [])

  return (
    <div className="App">
      <PupPicContainer />
      <PupPicList images={images} />
    </div>
  );  
}

export default App;
