import { combineReducers } from 'redux';
import SearchBarReducer from './SearchBarReducer';
import StockChartReducer from './StockChartReducer';

const rootReducer = combineReducers({
  searchBar: SearchBarReducer,
  stockChart: StockChartReducer
});

export default rootReducer;
