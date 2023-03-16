import { useState, useEffect } from "react";

export default function Area() {
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