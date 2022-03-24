import {useEffect, useState} from "react";

export type Queue<T> = Array<T>


type UseQueue = <T>(length?: number) => {
    push: (element: T) => void,
    pop: () => T | undefined,
    queue: Queue<T | undefined>
}

/*
 *
 * @summary
 * Works as a Queue useState.
 * */
export const useQueue: UseQueue = <T>(
    length: number | undefined
) => {
    let [queue, setQueue] = useState<(T | undefined)[]>([]);

    useEffect(() => {
        console.log(queue)
    }, [queue])

    const push = (element: T) => {
        const Q = [...queue]
        if (length && Q.length === length) {
            Q.shift()
            Q.push(element)
        } else {
            Q.push(element)
        }
        setQueue(Q)
    }
    const pop = () => {
        const Q = [...queue]
        const val = Q.shift()
        setQueue(Q)
        return val
    }

    return {
        push, pop, queue
    };
};

