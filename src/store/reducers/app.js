import { LANGUAGE_CHANGED } from '../actions/app';
import { langCodes } from '../../__mocks__';

const initialState = {
    lang: langCodes.EN,
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