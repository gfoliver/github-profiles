import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/index';
import User from './components/User/index';
import './style.scss';

function App() {

	return (
		<div className="App">
			<Router>
				<Switch>
					<Route path="/" exact>
						<Home />
					</Route>
					<Route path="/user/:username">
						<User />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
