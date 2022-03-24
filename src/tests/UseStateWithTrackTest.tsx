import React from 'react';
import {useStateWithTrack} from "../lib/hooks/useStateWithTrack";

export const UseStateWithTrackTest: React.FC = () => {
    const [state, setState, {getFormerValue, queue}] = useStateWithTrack<string>("test", 5)
    return (<div>
        <h1>
            useStateWithTrack
        </h1>
        <pre>{`
        queue: ${JSON.stringify(queue)}
        getFormerValue(0) : ${getFormerValue(0)}
        getFormerValue(1) : ${getFormerValue(1)}
        getFormerValue(2) : ${getFormerValue(2)}

        `}</pre>
        <input value={state} onChange={(e) => setState(e.target.value)}/>
    </div>)
}
