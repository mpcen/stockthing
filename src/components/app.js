import React, { Component } from 'react';
import { connect } from 'react-redux'
import HighStock from 'react-highcharts/ReactHighstock.src';
import SearchBar from '../containers/SearchBar';

class App extends Component {
	renderChart() {
		if(!this.props.config) {
			return <p>No Data To Show</p>
		} else if (this.props.config) {
			return (
				<HighStock config={this.props.config} />
			); 
		} else {
			return <p>something is going on </p>
		}
	}

	render() {
		return (
			<div>
				<SearchBar />
				<p>Searching for: {this.props.symbol}</p>
				{this.renderChart()}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	console.log('config object:', state.stockChart.config);
	return {
		symbol: state.searchBar.symbol,
		config: state.stockChart.config
	}
}

export default connect(mapStateToProps)(App);