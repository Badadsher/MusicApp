import { AudioContext } from "../../context/AudioContext";
import { useContext, useState, useEffect } from "react";
import style from "./playbar.module.scss";
import { Slider, IconButton } from "@mui/material";
import { Pause, PlayArrow } from "@mui/icons-material";
import secondsToMMSS from "../../utils/secondsToMMSS";

const Playbar = () => {
  const [currentTime, setCurrentTime] = useState(0);
  const { audio, currentTrack, handleToggleAudio, isPlaying } =
    useContext(AudioContext);

  const { title, artists, preview, duration } = currentTrack;

  const formattedCurrentTime = secondsToMMSS(currentTime);

  const handleChangeCurrentTime = (_, value) => {
    const time = Math.round((value / 100) * duration);
    setCurrentTime(time);
    audio.currentTime = time;
  };
  const formattedDuration = secondsToMMSS(duration);
  const sliderCurrentTime = Math.round((currentTime / duration) * 100);
  useEffect(() => {
    const timeInterval = setInterval(() => {
      setCurrentTime(audio.currentTime);
    }, 1000);
  }, []);
  return (
    <div className={style.playbar}>
      <img className={style.preview} src={preview} alt=""></img>
      <IconButton onClick={() => handleToggleAudio(currentTrack)}>
        {isPlaying ? <Pause /> : <PlayArrow />}
      </IconButton>

      <div className={style.credits}>
        <h4>{title}</h4>
        <p>{artists}</p>
      </div>

      <div className={style.slider}>
        <p>{formattedCurrentTime}</p>
        <Slider
          step={1}
          min={0}
          max={100}
          value={sliderCurrentTime}
          onChange={handleChangeCurrentTime}
        />
        <p>{formattedDuration}</p>
      </div>
    </div>
  );
};

export default Playbar;
