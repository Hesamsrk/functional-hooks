import {useEffect, useState} from "react";

export const deepClone = <T extends object>(input: T): T => {
    if (typeof input !== 'object') {
        return input
    }

    let output: any = Array.isArray(input) ? [] : {};

    for (const key in input) {
        let value = input[key];
        output[key] = (typeof value === "object") ? deepClone(value as unknown as object) : value;
    }

    return output;
}


/*
 *
 * @summary
 * useDeepClone is used to make a clone of the toBeClonedState variable which is potentially a component's prop or state.
 * */
export const useDeepClone = <S extends object>(toBeClonedState: S): S => {
    let [state, setState] = useState<S>(toBeClonedState);
    useEffect(() => {
        setState(deepClone<S>(toBeClonedState));
    }, [toBeClonedState]);
    return state;
};


