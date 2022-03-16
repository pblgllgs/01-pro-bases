import { useState } from 'react';

interface Props {
    initialValue?: number;
}

interface CounterState {
    counter: number;
    clicks: number;
}

export const CounterBy = ({ initialValue = 5 }: Props) => {
    const [{ counter, clicks }, setCounterState] = useState<CounterState>({
        counter: initialValue,
        clicks: 0,
    });

    const handleclick = (value: number) => {
        setCounterState(({ counter, clicks }) => ({
            counter: counter + value,
            clicks: clicks + 1,
        }));
    };

    return (
        <>
            <h1>Counter : {counter}</h1>
            <h1>Clicks : {clicks}</h1>
            <button onClick={() => handleclick(1)}>+1</button>
            <button onClick={() => handleclick(5)}>+5</button>
        </>
    );
};
