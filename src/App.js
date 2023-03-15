import { useEffect, useState } from 'react';
import './App.css';

function Clock() {
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
    <div>
      <p id="date">Today is {dateString}, {weekday}</p>
      <p id="time">Current time is: {dayString}</p>
    </div>
  )
}

function Print() {
  const handleClick = () => window.print();

  return (
    <button id="print-button" onClick={handleClick}>Print the Page</button>
  )
}

function Area() {
  const calculateSemiPerimeter = (a, b, c) => (a + b + c) / 2;
  const calculateArea = (s, a, b, c) => Math.sqrt(s * ((s - a) * (s - b) * (s - c)));

  const [sideA, setSideA] = useState(5);
  const [sideB, setSideB] = useState(6);
  const [sideC, setSideC] = useState(7);

  const handleChangeA = ({target}) => {
    setSideA(parseInt(target.value));
  };
  const handleChangeB = ({target}) => {
    setSideB(parseInt(target.value));
  };
  const handleChangeC = ({target}) => {
    setSideC(parseInt(target.value));
  };

  const [semi, setSemi] = useState(calculateSemiPerimeter(sideA, sideB, sideC));
  useEffect(() => {
    setSemi(calculateSemiPerimeter(sideA, sideB, sideC));
  }, [sideA, sideB, sideC]);

  const [area, setArea] = useState(calculateArea(semi, sideA, sideB, sideC));
  useEffect(() => {
    setArea(calculateArea(semi, sideA, sideB, sideC));
  }, [semi, sideA, sideB, sideC]);


  return (
    <div>
      <p>Triangle Area Calculator</p>
      <form>
        <label for="sideA">Side A: </label>
        <input type="number" id="sideA" value={sideA} onChange={handleChangeA} />
        <br />
        <label for="sideB">Side B: </label>
        <input type="number" id="sideB" value={sideB} onChange={handleChangeB} />
        <br />
        <label for="sideC">Side C: </label>
        <input type="number" id="sideC" value={sideC} onChange={handleChangeC} />
      </form>
      <p>Area: {area.toFixed(2)}</p>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Clock />
      <Print />
      <Area />
    </div>
  );
}

export default App;
