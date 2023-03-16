import { useEffect, useState } from "react"


export default function Rotate() {
    const [string, setString] = useState('     Hello world!');

    useEffect(() => {
        const intervalLength = 200;
        const intervalId = setInterval(() => {
            const lastIndex = string.length - 1;
            const lastLetter = string.slice(lastIndex);
            setString(lastLetter + string.slice(0, lastIndex));
        }, intervalLength);
        return () => clearInterval(intervalId);
    });

    return (
        <div className="Rotate">
            <p>{string}</p>
        </div>
    )
}