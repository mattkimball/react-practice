import { useEffect, useState } from 'react';

export default function Clock() {
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const [time, setTime] = useState((new Date()));
    const dayString = time.toLocaleTimeString();
    const dateString = time.toLocaleDateString();
    const dayIndex = time.getDay();
    const weekday = weekdays[dayIndex];
  
    const timeoutLength = 1000;
    useEffect(() => {
      const intervalId = setInterval(() => setTime(new Date()), timeoutLength);
      return () => clearInterval(intervalId);
    });
  
    return (
      <div className="Clock">
        <p>Today is {weekday}</p>
        <p>{dateString}</p>
        <p>Current time is:</p>
        <p>{dayString}</p>
      </div>
    )
  }