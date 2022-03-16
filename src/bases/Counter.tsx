import { useState } from 'react';

interface Props {
    initialValue?: number;
}

export const Counter = ({ initialValue = 0 }: Props) => {
    const [counter, setCounter] = useState(initialValue);

    const handleclick = () => {
        setCounter((prev) => prev + 1);
    };

    return (
        <>
            <h1>CounterBy : {counter}</h1>
            <button onClick={handleclick}>+1</button>
        </>
    );
};