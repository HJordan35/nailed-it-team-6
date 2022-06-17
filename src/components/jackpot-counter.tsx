import React, { useEffect, useState } from "react";
import { useCountUp } from "react-countup";
import Arcade from "../assets/arcade.jpeg";
import JackpotSvg from "./jackpot-svg.tsx";

type JackpotCounterProps = {};

const JackpotCounter = (props: JackpotCounterProps): JSX.Element => {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (time >= 35) {
      handleReset();
      handleStart();
    }
  }, [time]);

  useEffect(() => {
    let interval: NodeJS.Timer | undefined = undefined;

    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTime((time) => time + 1);
      }, 50);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, isPaused]);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  const handlePauseResume = () => {
    setIsPaused(!isPaused);
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(0);
  };

  return (
    <>
      <div className="app-nav-image">
        <div>
          <img src={Arcade} alt="arcade" />
        </div>
        <JackpotSvg activeLight={time} />
      </div>
      <div>
        <button onClick={() => handleStart()}>START</button>
        <button onClick={() => handlePauseResume()}>PAUSE</button>
        {time}
      </div>
    </>
  );
};

export default JackpotCounter;
