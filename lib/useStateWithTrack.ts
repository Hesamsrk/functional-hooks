import {useState} from "react";
import {Queue, useQueue} from "./useQueue";


export interface Options<S> {
    getFormerValue: (whichOne?: number) => S | undefined
    queue: Queue<S | undefined>
}


/*
 *
 * @summary
 * Works as a normal useState hook, additionally, it always keeps the track of former state values
 * */
export const useStateWithTrack = <S>(
    initialState?: (() => S) | S,
    TrackLength?: number
): [S | undefined, (newState: S) => void, Options<S>] => {
    let [state, setState] = useState<S | undefined>(initialState);
    let {queue, push, pop} = useQueue<S>(TrackLength)

    const setStateWrapper = (newState: S) => {
        push(newState)
        setState(newState)
    }

    const getFormerValue = (whichOne?: number) => queue.reverse()[whichOne || 0]

    return [state, setStateWrapper, {getFormerValue, queue}];
};


