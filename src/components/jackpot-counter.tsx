import React, { useRef, useState} from "react";
import { useCountUp } from "react-countup";

type JackpotCounterProps = {};

const JackpotCounter = (props: JackpotCounterProps): JSX.Element => {
  const countUpRef = useRef(null);
  const [credits, setCredits] = useState(10);
  const [pause, setPause] = useState(true);

  const { start, pauseResume, reset, update } = useCountUp({
    ref: countUpRef,
    start: 0,
    end: 35,
    duration: 2,
    onReset: () => console.log("Resetted!"),
    onUpdate: () => console.log("Updated!"),
    onPauseResume: () => console.log("Paused!"),
    onStart: ({ pauseResume }) => console.log(pauseResume),
    onEnd: ({ pauseResume }) => start(),
  });

  const onResetClick = () => {
    reset();
    setCredits(10);
  }

  const onPauseClick = () => {
    if(credits > 0) { pauseResume(); }
    setPause(!pause);
    if(!pause) {
      if(credits > 0) {
        setCredits(credits - 1);
      } else {
        setCredits(0);
      }
    }
  }

  return (
    <div>
      <div ref={countUpRef} />
      <button onClick={() => start()}>Start</button>
      <button onClick={() => onResetClick()}>Reset</button>
      <button onClick={() => onPauseClick()}>Pause/Resume</button>
      <h2>{credits}</h2>
      <button onClick={() => setCredits(credits + 1)}>Add Credits</button>
    </div>
  );
};

export default JackpotCounter;
