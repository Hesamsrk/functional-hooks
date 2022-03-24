import React from 'react'
import ReactDOM from 'react-dom'
import {UseQueueTest} from "./tests/UseQueueTest";
import {UseStateWithTrackTest} from "./tests/UseStateWithTrackTest";

ReactDOM.render(
    <React.StrictMode>
        <UseQueueTest/>
        <hr/>
        <UseStateWithTrackTest/>
    </React.StrictMode>,
    document.getElementById('root')
)
