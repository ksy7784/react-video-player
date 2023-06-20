import { useState, useRef, useEffect } from 'react'
import './App.css'

function App() {
  const [duration, setDuration] = useState(0); //총영상 길이
  const [currentTime, setCurrentTime] = useState(0); //현재시간
  const [isPlaying, setIsPlaying] = useState(false);

  const videoRef = useRef(); //비디오 이름(참조 ref) 만들기

  //비디오 재생 hook
  useEffect(()=> {
    setCurrentTime(Math.round(videoRef.current.currentTime)); //현재시간
    setDuration(Math.round(videoRef.current.duration));
    setIsPlaying(!videoRef.current.paused);

    //매초마다 비디오 시간 hook
    let videoInterval = setInterval(()=>{
      console.log(videoRef.current.currentTime);
      setCurrentTime(videoRef.current.currentTime);
    },1000);

    //clean up 인터벌 함수제거
    return ()=>{clearInterval(videoInterval)};

  },[currentTime]);
  console.log(currentTime,duration);
  


  //비디오 플레이 
  const playVid =() =>{
    console.log(videoRef.current);
    videoRef.current.play();
  }
  
  //비디오 퍼즈 
  const pauseVid =() =>{
    console.log(videoRef.current);
    videoRef.current.pause();
  }
  //stop(중단하고 처음으로 돌아가기)
  const stopVid = () => {
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
    setIsPlaying(false);
  };

  return (
    <div className='App'>
     <h1>React Video Player</h1>
     <video src="media/video.mp4" controls ref={videoRef} className='videoInfo'></video>
     <div className="timeInfo">
      <p>{currentTime.toFixed(1)}s / {duration.toFixed(1)}s</p>
      <progress style={{width:'100%'}} min="0" max="100" value={currentTime*100/duration}></progress>
     </div>
     <div className="btnGroup">
      <button className="play" onClick={playVid}>Play</button>
      <button className="pause" onClick={pauseVid}>Pause</button>
      <button className="stop" onClick={stopVid}>Stop</button>
     </div>
    </div>
  )
}

export default App
