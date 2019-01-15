"use strict";

import React from "react";
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import { Provider } from "react-redux";
import reducer from "./reducers";
import MainFrame from "./components/MainFrame";
import { loadCustList } from "./actions";

class App extends React.Component {

	constructor(props) {
		super(props);
		let middleWare = [thunkMiddleware];
		if (process.env.NODE_EN + "" !== "production") {
			middleWare = [...middleWare, createLogger()];
		}
		this.store = createStore(reducer, applyMiddleware(...middleWare));
	}

	componentDidMount() {
		this.store.dispatch(loadCustList());
	}

	componentDidUpdate() {
		this.store.dispatch(loadCustList());
	}

	render() {
		return (
			<Provider store={this.store}>
				<MainFrame />
			</Provider>
		);
	}
}

export default App;
