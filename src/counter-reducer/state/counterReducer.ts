import { CounterAction } from "../actions/action";
import { CounterState } from "../interfaces/interfaces";

export const counterReducer = (
    state: CounterState,
    action: CounterAction
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