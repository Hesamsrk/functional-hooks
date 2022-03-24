import React, {useState} from 'react';
import {useQueue} from "../lib/hooks/useQueue";

export const UseQueueTest: React.FC = () => {
    const [str, setStr] = useState<string>("")
    const {push, pop, queue} = useQueue<string>()
    return (<div>
        <h1>
            useQueue
        </h1>
        <div>
            {JSON.stringify(queue)}
        </div>
        <input value={str} onChange={(e) => setStr(e.target.value)}/>
        <div>
            <button onClick={() => push(str)}>
                PUSH
            </button>
            <button onClick={() => setStr(String(pop()))}>
                POP
            </button>
        </div>
    </div>)
}
