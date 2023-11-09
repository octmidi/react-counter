import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";


function Counter() {
    const [time, setTime] = useState({ h: 0, m: 0, s: 0 });

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime((prevTime) => {
                let { h, m, s } = prevTime;
                s++;
                if (s > 59) { m++; s = 0; }
                if (m > 59) { h++; m = 0; }
                if (h > 23) { h = 0; }
                return { h, m, s };
            });
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    // format chronometer
    const formattedHours = time.h.toString().padStart(2, "0");




    return (
        <div className="mymain">
            <div className="digito">  <FontAwesomeIcon icon={faClock} size="sm" /></div>
            <div className="digito">{formattedHours[0]}</div>
            <div className="digito" >{formattedHours[1]}</div>
            <div>:</div>
            <div className="digito">{time.m.toString().padStart(2, "0")[0]}</div>
            <div className="digito">{time.m.toString().padStart(2, "0")[1]}</div>
            <div>:</div>
            <div className="digito">{time.s.toString().padStart(2, "0")[0]}</div>
            <div className="digito">{time.s.toString().padStart(2, "0")[1]}</div>
        </div >);
}

export default Counter;
