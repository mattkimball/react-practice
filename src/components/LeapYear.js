import { useState } from "react"

export default function LeapYear() {
    const isLeapYear = (n) => (n % 100 === 0) ? (n % 400 === 0) : (n % 4 === 0);

    const [year, setYear] = useState(2023);

    const handleChange = ({target}) => {
        setYear(parseInt(target.value));
    };

    return (
        <div>
            <label for="year">Enter Year: </label>
            <input type="number" id="year" value={year} onChange={handleChange} />
            <p>{year} is {!isLeapYear(year) && 'not'} a leap year.</p>
        </div>
    )
}