import { createContext, useState } from "react";
import trackList from "../assets/trackList";

export const AudioContext = createContext({});
const AudioProvider = () => {
  const [currentTrack, setCurrentTrack] = useState(trackList[0]);
  const [isPlaying, setPlaying] = useState(false);
};
