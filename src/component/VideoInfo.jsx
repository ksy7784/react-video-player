import React from 'react'

function videoInfo() {
  const [duration, setDuration] = useState(0); // 총영상 길이
  const [currentTime, setCurrentTime] = useState(0); // 현재시간
  const [isPlaying, setIsPlaying] = useState(false);

  const videoRef = useRef(); // 비디오 이름(참조 ref) 만들기

  // 비디오 재생 hook
    useEffect(() => {
    setCurrentTime(Math.round(videoRef.current.currentTime)); // 현재시간
    setDuration(Math.round(videoRef.current.duration));
    setIsPlaying(!videoRef.current.paused);

    // 매초마다 비디오 시간 hook
    let videoInterval = setInterval(() => {
      setCurrentTime(videoRef.current.currentTime);
    }, 1000);

    // clean up 인터벌 함수제거
    return () => {
      clearInterval(videoInterval);
    };
  }, [currentTime]);

  // 비디오 재생
  const playVid = () => {
    videoRef.current.play();
    setIsPlaying(true);
  };

  // 비디오 일시정지
  const pauseVid = () => {
    videoRef.current.pause();
    setIsPlaying(false);
  };

  // 중지(처음으로 돌아가기)
    const stopVid = () => {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsPlaying(false);
  };
};

export default videoInfo