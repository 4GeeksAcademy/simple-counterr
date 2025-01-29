import React, { useState, useEffect } from "react";

const SecondsCounter = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    
    const interval = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    
    return () => clearInterval(interval);
  }, []);

  
  const formattedSeconds = String(seconds).padStart(6, "0").split("");

  return (
    <div className="counter-container">
      <div className="digit clock">⏳</div>
      {formattedSeconds.map((digit, index) => (
        <div key={index} className="digit">{digit}</div>
      ))}
    </div>
  );
};

export default SecondsCounter;