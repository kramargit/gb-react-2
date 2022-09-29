import { TOGGLE_IS_VISIBLE } from './types';

const initialState = {
    firstName: 'Evgeniy',
    lastName: 'Kramar',
    isVisibleProfile: true
};

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_IS_VISIBLE:
            return { ...state,
                    isVisibleProfile: !state.isVisibleProfile,
            };
        default:
            return state;
    }    
};