import {
	UPDATE_INPUT,
	FETCH_STOCK,
	FETCH_STOCK_SUCCESS,
	FETCH_STOCK_FAIL
} from '../actions/types';

const INITIAL_STATE = {
	symbol: ''
};

export default (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case UPDATE_INPUT:
			return { ...state, symbol: action.payload };

		case FETCH_STOCK_FAIL:
			return state;
			
		default:
			return state;
	}
}