import { useRef, useState } from "react";

function Stopwatch() {
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);

  function startTimer() { 
    if (intervalRef.current !== null) return; // Prevent multiple intervals
    intervalRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);    
  }
  function stopTimer() {
    clearInterval(intervalRef.current);
    intervalRef.current = null; // Reset the ref to allow restarting
  }
  function resetTimer() {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setTime(0);
  }
  return (
    <div>
      <h2>Stopwatch</h2>
      <h4>Time: {time} seconds</h4>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}
export default Stopwatch;
