import { useReducer } from 'react';

interface CounterState {
    counter: number;
    previous: number;
    changes: number;
}

const INITIAL_STATE: CounterState = {
    counter: 0,
    previous: 0,
    changes: 0,
};

type counterAction =
    | { type: 'increaseBy'; payload: { value: number } }
    | { type: 'reset' };

const counterReducer = (
    state: CounterState,
    action: counterAction
): CounterState => {
    switch (action.type) {
        case 'increaseBy':
            return {
                changes: state.changes + 1,
                counter: state.counter + action.payload.value,
                previous: state.counter,
            };
        case 'reset':
            return {
                counter: 0,
                previous: 0,
                changes: 0,
            };
        default:
            return state;
    }
};

export const CounterReducerComponent = () => {
    const [counterState, dispatch] = useReducer(counterReducer, INITIAL_STATE);

    const handleClickReset = () => {
        dispatch({ type: 'reset' });
    };

    const increaseBy = (value: number) => {
        dispatch({ type: 'increaseBy', payload: { value } });
    };

    return (
        <>
            <h1>Counter Reducer</h1>
            <pre>{JSON.stringify(counterState, null, 2)}</pre>
            <button onClick={() => increaseBy(1)}>+1</button>
            <button onClick={() => increaseBy(5)}>+5</button>
            <button onClick={() => increaseBy(10)}>+10</button>
            <button onClick={handleClickReset}>Reset</button>
        </>
    );
};
