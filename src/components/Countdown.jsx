import { useState, useEffect } from 'react';

export default function Countdown(){

    const [time, setTime] = useState(20);
    
    useEffect(() => {
        let timer = setInterval(() => {
            setTime(time - 1);
        }, 1000);

        return () => {
            clearInterval(timer);
        }

    }, [time]);
    
    return (
        <div>
            <h3>Timer:<span> { time }</span></h3>
        </div>
    );
};
