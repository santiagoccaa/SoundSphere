import { FaRepeat } from "react-icons/fa6";
import {
  MdSkipNext ,
  MdSkipPrevious ,
} from "react-icons/md";

import useMusic from "@/hooks/useMusic";
import React, { useEffect, useRef, useState } from "react";
import { FaPauseCircle, FaPlayCircle, FaRandom } from "react-icons/fa";

export const Audio = () => {

  const audioRef = useRef<HTMLAudioElement>(null);
  const { HandleClickPlay, boton, songSelected } = useMusic();
  
  useEffect(() => {
    if (audioRef.current) {
      if (boton) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [boton, songSelected]);
  const [loop, setLopp] = useState(false);
  const handleRepeat = () => {
    if (audioRef.current) {
      audioRef.current.loop = !audioRef.current.loop;
    }
    setLopp(!loop);
    console.log(loop);
  };
  
  // const [progress, setProgress] = useState(0);
  // const updateProgress = () => {
  //   if (audioRef.current) {
  //     const duration = audioRef.current.duration;
  //     const currentTime = audioRef.current.currentTime;
  //     setProgress((currentTime / duration) * 100);
  //   }
  // };
  // useEffect(() => {
  //   const audio = audioRef.current;
  //   if (audio) {
  //     audio.addEventListener("timeupdate", updateProgress);
  //     return () => audio.removeEventListener("timeupdate", updateProgress);
  //   }
  // }, []);

  return (
    <>
      <audio
        ref={audioRef}
        src={songSelected.song}
      ></audio>

      <div className="flex items-center justify-between w-full md:w-5/6 h-12 border-l-2 border-r-2 border-blue text-white/90">
        <button
          onClick={() => handleRepeat()}
          className={`active:scale-95 duration-100 ml-4 ${
            loop ? "text-blue" : ""
          }`}
        >
          <FaRepeat size={20} />
        </button>
        <button className="active:scale-95  duration-100">
          <MdSkipPrevious  size={30} />
        </button>
        <button
          onClick={() => HandleClickPlay()}
          className="active:scale-95  duration-100 text-blue"
        >
          {!boton ? (
            <FaPlayCircle size={70} />
          ) : (
            <FaPauseCircle size={70} />
          )}
        </button>
        <button className="active:scale-95  duration-100">
          <MdSkipNext size={30} />
        </button>
        <button className="active:scale-95 duration-100 mr-4">
          <FaRandom size={20} />
        </button>
      </div>
    </>
  );
};
