
import { Action, AnyAction } from '@reduxjs/toolkit';
import { typesMultipleAction } from '../constants/multiple.constants'
export interface MultipleState {
    data: {
        idMigrant: number | null;
        idCard: number | null;
    };
    id: number | null;
    name: string | null;
}

const initState: MultipleState = {
    data: {
        idMigrant: null,
        idCard: null,
    },
    id: null,
    name: null,
    
}

export function multipleReducer(state = initState, action: AnyAction):  MultipleState {
    switch(action.type) {
        case typesMultipleAction.MULTIPLE_A:
            return {
                ...state,
                data: {
                    ...state.data,
                    idMigrant: action.payload
                }
            }
        case typesMultipleAction.MULTIPLE_B:
            return {
                ...state,
                data: {
                    ...action.payload
                }
            }
        case typesMultipleAction.MULTIPLE_C:
            return {
                ...state,
                id: action.payload.id,
                data: {
                    ...action.payload.card
                }
            }
        case typesMultipleAction.MULTIPLE_D:
            return {
                ...state,
                id: action.payload.id,
            }

        default:
            return state;
    }
}