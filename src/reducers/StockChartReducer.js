import {
	FETCH_STOCK_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case FETCH_STOCK_SUCCESS:
			console.log('SUCCESS FROM STOCKCHARTREDUCER:', action.payload);
			
			return {
				...state,
				config: action.payload
			};

		default:
			return state;
	}
}