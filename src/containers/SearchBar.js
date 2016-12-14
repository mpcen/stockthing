import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateInput, fetchStock } from '../actions';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleInputChange(event) {
		this.props.updateInput(event.target.value);
	}

	handleSubmit(event) {
		event.preventDefault();

		this.props.fetchStock(this.props.symbol);
	}

	render() {
		return (
			<form className="input-group" onSubmit={this.handleSubmit}>
				<input
					type="text"
					className="form-control"
					placeholder="Enter stock symbol (EX: AAPL)"
					onChange={this.handleInputChange}
					value={this.props.symbol} />
				<span className="input-group-btn">
					<button className="btn btn-secondary" type="submit">
						Search!
					</button>
				</span>
			</form>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		symbol: state.searchBar.symbol
	}
}

export default connect(mapStateToProps, { updateInput, fetchStock })(SearchBar);