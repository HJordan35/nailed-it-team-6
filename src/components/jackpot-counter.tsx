import React, { useEffect, useState } from "react";
import { useCountUp } from "react-countup";
import Arcade from "../assets/arcade.jpeg";
import JackpotSvg from "./jackpot-svg.tsx";
import ButtonDefaultImg from "../assets/ButtonDefault.svg";
import ButtonPressedImg from "../assets/ButtonPressed.svg";
import TokenImg from "../assets/CoinButton.svg";
import { useNavigate } from "react-router-dom";

type JackpotCounterProps = {};

const JackpotCounter = (props: JackpotCounterProps): JSX.Element => {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [winner, setWinner] = useState(false);
  const [time, setTime] = useState(0);
  let navigate = useNavigate();

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

  const navigateTo = (url: string) => {
    setTimeout(() => {
      navigate(url);
    }, 20000);
    setWinner(true);
  } 

  const handlePauseResume = () => {
    setIsPaused(true);
    if(time == 6) {
      navigateTo("/thanks");
    }
    if(time == 12) {
      navigateTo("https://yt3.ggpht.com/ytc/AKedOLTeJA-en7hkpD3qBh3uLjuwXP0w89LuMvLVzfgt=s900-c-k-c0x00ffffff-no-rj");
    }
    if(time == 18) {
      navigateTo("/");
    }
    if(time == 24) {
      navigateTo("/objective");
    }
    if(time == 30) {
      navigateTo("/teams");
    }
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
        <div className="pauseResumeButtonContainer">
          <button className="pauseResumeButton" onClick={() => handlePauseResume()}>
            <img className="pauseResumeButtonImg" src={isPaused ?  ButtonPressedImg : ButtonDefaultImg} alt="" />
          </button>
        </div>
        <div className="coinSlotContainer">
          <button className="coinSlotContainerButton" onClick={() => handleStart()}> <img src={TokenImg} alt="Token" /></button>
        </div>
      </div>
    </>
  );
};

export default JackpotCounter;
