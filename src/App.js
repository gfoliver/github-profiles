import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/index';
import User from './components/User/index';
import './style.scss';
import usePersistedState from './hooks/usePersistedState';

function App() {

    const [theme, setTheme] = usePersistedState('theme', 'dark');

    const handleThemeChange = (e) => {
        const toggle = e.target.checked;

        if (toggle)
            setTheme('light');
        else
            setTheme('dark');
    }

	return (
		<div className={`App ${theme}`}>
            <header>
                <label htmlFor="switchTheme">Dark</label>
                <div className="switchWrapper">
                    <input type="checkbox" id="switchTheme" onChange={handleThemeChange} checked={theme == 'light'} />
                    <label htmlFor="switchTheme"></label>
                </div>
                <label htmlFor="switchTheme">Light</label>
            </header>
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
