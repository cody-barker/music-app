import React, {useState, useRef, useEffect} from 'react'
import './App.css';
import Player from './Player/Player'
import {songsData} from './Player/audio.js'

function App() {

  const [songs, setSongs] = useState(songsData)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentSong, setCurrentSong] = useState(songsData[0].url)

  console.log(currentSong)

  const audioElem = useRef();

  useEffect(() => {
    if(isPlaying) {
      audioElem.current.play()
    }
    else {
      audioElem.current.pause()
    }
  },[isPlaying])

  return (
    <div className="App">
      <audio src={currentSong} ref={audioElem}/>
      <Player songs={songs} setSongs={setSongs} isPlaying={isPlaying} setIsPlaying={setIsPlaying} audioElem={audioElem}/>
    </div>
  );
}

export default App;
