import { useState, useEffect } from 'react'
import './App.css'
import Header from './Header/Header'
import Score from './Score/Score'
import Card from './Card/Card'
import Message from './Message/Message'

function App() {

  /* STATES */
const [score, setScore] = useState(0);
const [streak, setStreak] = useState(0);
const [images, setImages] = useState([]);
const [clickedIds, setClickedIds] = useState([]);
const [showMessage, setShowMessage] = useState(false);


/* EFFECTS */
useEffect(() => {
    getData().then(setImages);
  }, []);

/*FUNCTIONS*/
function shuffledArray(images) {
  const shuffledImgs = [...images]
  for (let i = shuffledImgs.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledImgs[i], shuffledImgs[j]] = [shuffledImgs[j], shuffledImgs[i]];
  }
  return shuffledImgs;
}

function updateClicked(id) {
  setClickedIds(prev => {
    if (prev.includes(id)) {
      setShowMessage(true);
      updateStreak(score);
      setScore(0);
      setImages(shuffledArray(images));
      return [];
    }

    setShowMessage(false);
    const nextScore = score + 1;

    setScore(nextScore);
    setImages(shuffledArray(images));
    return [...prev, id];
  });
}

function updateScore() {
    setScore(prev => prev + 1)
}

function updateStreak(score) {
    setStreak(prev => (score > prev ? score : prev));
  }

const ids = [
  "MQvv9eOTBSw",
  "OHLdFxbhjZU",
  "X2Tzdss2XDQ",
  "H7G7Lkn9HSo",
  "Dji88DmcAkE",
  "1hBu0SxGPsA",
];

async function getData() {
  const requests = ids.map(id =>
    fetch(`https://api.unsplash.com/photos/${id}?client_id=wXHo9MNk5tc9IeL8O9Nuu712bI6_c8syaKe53EhyaxA`)
      .then(res => res.json())
  );

  const photos = await Promise.all(requests);

  return photos.map(photo => ({
    id: photo.id,
    url: photo.urls.small,
  }));
}




  return (
    <>
      <div className="top-container">
        <Header />
        <Score
          score = {score}
          streak = {streak} />
      </div>
      <div className= "card-container">
        {images.map(({ id, url }) => (
        <Card key={id} id={id} url={url} onClick= {() => updateClicked(id)} />
      ))}
      <Message streak={streak} showMessage= {showMessage}/>
      </div>
    </>
  )
}

export default App
