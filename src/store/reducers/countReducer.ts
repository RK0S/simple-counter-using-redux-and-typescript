import { countState, countAction, countActionTypes } from '../../types/count';

const initialState: countState = {
    count: 0
}

export const countReducer = (state = initialState, action: countAction): countState => {
    switch(action.type) {
        case countActionTypes.ADD_ONE:
            return {...state, count: state.count + action.payload}
        case countActionTypes.REMOVE_ONE:
            return {...state, count: state.count - action.payload} 
        default:
            return state
    }
}

export type countStateType = ReturnType<typeof countReducer>