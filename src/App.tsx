import { useState, useEffect } from 'react';
import './App.scss';
import PupPicList from './PupPicList/PupPicList';
import PupPicModal from './PupPicModal/PupPicModal';
import Header from './Header/Header';
import Typography from '@mui/material/Typography';


function App()  {
  let [pupPics, setPupPics] = useState([]);
  let [pupPic, setPupPic] = useState('');
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random/10")
      .then(response => response.json())
      .then(data => {
        setPupPics(data.message);
      })
  }, []);

  const setPrimaryPupPic = (imageURL: string) => {
    setPupPic(imageURL);
    handleOpen();
  }

  return (
    <div className="App">
      <Header />
      <div className="container">
        <Typography variant="h2" component="div">
          Welcome to the Pics of Pups App!
        </Typography>
        <Typography variant="h6" component="div">
          Click on a pic for a closer view
        </Typography>
        <PupPicModal pupPic={pupPic} open={open} setOpen={setOpen} />
        <PupPicList pupPics={pupPics} setPrimaryPupPic={setPrimaryPupPic} />
      </div>
    </div>
  );  
}

export default App;
