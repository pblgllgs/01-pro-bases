import { useCounter } from '../hooks/useCounter';

export const CounterHook = () => {

    const { counter, elementToAnimate, handleclick } = useCounter({
        maxCount: 15,
    });
    
    return (
        <>
            <h1>CounterEffect:</h1>
            <h2 ref={elementToAnimate}>{counter}</h2>
            <button onClick={handleclick}>+1</button>
        </>
    );
};
