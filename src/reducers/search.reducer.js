import { searchConstants } from '../constants';

const initialState = {
    loading: false,
    searchdata: {},
    totaldata: null
};

export function search(state = initialState, action){
    switch (action.type) {
        case searchConstants.SEARCH_REQUEST:
            return {
                ...state,
                loading: true,
                error: false,
            }
        case searchConstants.SEARCH_SUCCESS:
            return {
                ...state,
                loading: false,
                searchdata: action.payload.result,
                totaldata: action.payload.count,
            }
        case searchConstants.SEARCH__FAILURE:
            return {
                ...state,
                loading: false,
                error: true,
            };
        default:
            return state
    }
}

