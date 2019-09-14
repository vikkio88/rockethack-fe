import { LANGUAGE_CHANGED } from '../actions/app';

const initialState = {
    lang: 'en',
};

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case LANGUAGE_CHANGED:
            return {
                ...state,
                ...action.data
            };
        default:
            return state;
    }
}