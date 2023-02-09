import React from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from './hooks/useTypedSelector';
import { Dispatch } from 'redux';
import { countAction, countActionTypes } from './types/count';

const App = () => {
    const {count} = useTypedSelector(state => state.count)
    const dispatch: Dispatch<countAction> = useDispatch()

    const inc = () => {
        dispatch({type: countActionTypes.ADD_ONE, payload: 1})
    }

    const dec = () => {
        dispatch({type: countActionTypes.REMOVE_ONE, payload: 1})
    }

    return (
        <div className="App">
            <div>{count}</div>
            <button onClick={() => inc()}>+</button>
            <button onClick={() => dec()}>-</button>
        </div>
    );
}

export default App;
