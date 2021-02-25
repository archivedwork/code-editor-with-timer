import React, { useEffect, useState } from 'react';


const Timer = ({hours = 0, minutes = 0, seconds = 0}) => {
    const [paused, setPaused] = useState(false);
    const [over, setOver]     = useState(false);
    const [[h,m,s], setTime]  = useState([hours, minutes, seconds]);

    const tick = () => {
        if (paused || over) return;
        if (h === 0 && m === 0 && s === 0)  setOver(true);
        else if (m === 0 && s === 0) {
            setTime([h - 1, 59, 59]);
        } else if (s === 0) {
            setTime([h, m - 1, 59]);
        } else {
            setTime([h,m, s - 1]);
        }
    };


    const reset = () => {
        setTime([parseInt(hours), parseInt(minutes), parseInt(seconds)]);
        setPaused(false);
        setOver(false);
    };

    useEffect( () => {
        const timerId = setInterval( () => tick(), 1000 );
        return () => clearInterval(timerId);
    } )


    return(
        <div className="Timer">
            {/* <h1>Timer Component</h1> */}
            <p>{ `${h.toString().padStart(2, '0')} : ${m.toString().padStart(2, '0')} : ${s.toString().padStart(2, '0')}`}</p>
            <div>{over ? "Time's up!" : ''}</div>
            {/* <button onClick={() => setPaused(!paused)}>{paused ? 'Resume' : 'Pause'}</button>
            <button onClick={() => reset()}>Restart</button> */}
        </div>
    )
}

// class Timer extends Component {
//     render(){
//         return(
//             <div className="Timer">
//                 <p>Timer Component</p>

//             </div>
//         )
//     }
// }


export default Timer;