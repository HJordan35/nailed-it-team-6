import React, { useRef } from "react";
import { useCountUp } from "react-countup";

type JackpotCounterProps = {};

const JackpotCounter = (props: JackpotCounterProps): JSX.Element => {
  const countUpRef = useRef(null);
  const { start, pauseResume, reset, update } = useCountUp({
    ref: countUpRef,
    start: 0,
    end: 35,
    duration: 2,
    onReset: () => console.log("Resetted!"),
    onUpdate: () => console.log("Updated!"),
    onPauseResume: () => console.log("Paused or resumed!"),
    onStart: ({ pauseResume }) => console.log(pauseResume),
    onEnd: ({ pauseResume }) => start(),
  });

  return (
    <div>
      <div ref={countUpRef} />
      <button onClick={() => start()}>Start</button>
      <button onClick={() => reset()}>Reset</button>
      <button onClick={() => pauseResume()}>Pause/Resume</button>
    </div>
  );
};

export default JackpotCounter;
