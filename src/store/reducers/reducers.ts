import { combineReducers } from 'redux';
import { Location, WidgetData} from '../types';

const locations = (state: Location[] | [] = [], action) => {
    switch (action.type) {
        case 'SET_LOCATIONS':
            return [
                ...action.locations
            ];
        default:
            return state;
    }
};

const widgets = (state: WidgetData[] | [] = [], action) => {
    switch (action.type) {
        case 'ADD_WIDGET':
            return [
                ...state,
                action.data
            ];
        default:
            return state;
    }
};

const isSignedIn = (state: boolean = false, action) => {
    switch (action.type) {
        case 'SET_IF_SIGNED_IN':
            return action.isSignedIn;
        default:
            return state;
    }
};

export const rootReducer = combineReducers({
    locations,
    widgets,
    isSignedIn
});

export type RootState = ReturnType<typeof rootReducer>