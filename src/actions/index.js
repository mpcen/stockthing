import axios from 'axios';
import moment from 'moment';

import {
	UPDATE_INPUT,
	FETCH_STOCK,
	FETCH_STOCK_SUCCESS,
	FETCH_STOCK_FAIL
} from './types';

export const updateInput = (text) => {
	return {
		type: UPDATE_INPUT,
		payload: text
	}
};

export const fetchStock = (symbol) => {
	return dispatch => {
		dispatch({
			type: FETCH_STOCK
		});

		let URL = `https://www.quandl.com/api/v3/datasets/WIKI/${symbol}.json?api_key=y_N8gyBR-1Us93GzhJ2g`

		axios.get(URL)
		.then(response => {

			let data = [];
			response.data.dataset.data.forEach((tick) => {
				console.log('TICK:',tick[0]);
				
				let restructuredTick = tick[0, 4];
				data.push(restructuredTick);
			});

			dispatch({
				type: FETCH_STOCK_SUCCESS,
				payload: {
					rangeSelector: {
						selected: 1
					},
					title: {
						text: response.data.dataset.name
					},
					series: [{
						name: response.data.dataset.dataset_code,
						data: data,
						tooltip: {
							valueDecimals: 2
						}
					}]
				}
			});
		})
		.catch(error => {
			dispatch({
				type: FETCH_STOCK_FAIL,
				payload: error
			});
		});
	}
};