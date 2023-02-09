export interface countState {
    count: number;
}

export enum countActionTypes {
    ADD_ONE = 'ADD_ONE',
    REMOVE_ONE = 'REMOVE_ONE'
}

interface addCountAction {
    type: countActionTypes.ADD_ONE;
    payload: number;
}

interface removeCountAction {
    type: countActionTypes.REMOVE_ONE;
    payload: number;
}

// interface countAction {
//     type: 'string';
//     payload?: any;
// }

export type countAction = addCountAction | removeCountAction