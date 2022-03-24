import {Dispatch, SetStateAction, useEffect, useState} from "react";

interface CallbackType {
    after?: () => void;
    before?: () => void;
}

/*
 * @summary
 * Works as a normal useState hook, in addition, the state will be set as a debounced value after a delay.
 * @param {unknown} initialState - The initial state
 * @param {number} delayInMilliSeconds - The delay for debounced state setter (setValue)
 * @param {CallbackType} callBack - These are two optional event handling callbacks which will be called each time after or before the state had been set successfully.
 * */
export const useDebouncedState = <S>(
    initialState: S | (() => S),
    delayInMilliSeconds: number | undefined = 3000,
    callBack?: CallbackType,
): [S, Dispatch<SetStateAction<S>>, Dispatch<SetStateAction<S>>] => {
    const [value, setValue] = useState<S>(initialState);
    const [debouncedValue, setDebouncedValue] = useState(initialState);

    useEffect(() => {
        if (callBack && callBack.before) {
            callBack.before();
        }

        const handler = setTimeout(() => {
            setDebouncedValue(value);
            if (callBack && callBack.after) {
                callBack.after();
            }
        }, delayInMilliSeconds);

        return () => {
            clearTimeout(handler);
        };
    }, [value]);
    // @setDebouncedValue can be used if you want to instantly set the state,
    // otherwise you must consider using @setValue to set state in debounced form.
    return [debouncedValue, setValue, setDebouncedValue];
};

export default useDebouncedState
