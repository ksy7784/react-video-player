import './App.css'
import {ButtonGroup} from './component'
import {TimeInfo} from './component'

function App() {
  return (
    <div className='App'>
      <h1>React 비디오 플레이어</h1>
      {/*비디오 플레이...*/}
      <video src="media/video.mp4" controls ref={videoRef}></video>
      <TimeInfo currentTime={currentTime} duration={duration} />
      <ButtonGroup playVid={playVid} pauseVid={pauseVid} stopVid={stopVid} />
    </div>
  )
}

export default App
