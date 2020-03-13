import React, { useState } from 'react';
import api from '../../api';
import './style.scss';
import { Link } from 'react-router-dom';

export default function Home() {
	const [query, setQuery] = useState('');
	const [devs, setDevs] = useState([]);
	const [loading, setLoading] = useState(false);

	const searchUsers = () => {
		setLoading(true);

		api.get('/search/users', {
			params: {
				q: query
			}
		})
			.then(response => {
				setDevs(response.data.items);
				setLoading(false);
			})
			.catch(e => {
				console.log(e);
				setLoading(false);
			});
	}

	return (
		<div className="Home">
			<div className="title">Search devs by their github username</div>
			<div className="searchBar">
				<form onSubmit={e => {
					e.preventDefault();
					searchUsers();
				}}>
					<input
						type="text"
						className="search"
						required
						placeholder="Username"
						onChange={(e) => { setQuery(e.target.value) }}
					/>
					<button className="submit" type="submit">Search</button>
				</form>
			</div>
			<div className="devsWrapper">
				{loading ? 'Loading...' : devs.map((dev, key) =>
					<div className="dev" key={key}>
						<img src={dev.avatar_url} alt={dev.login} className="image" />
						<div className="content">
							<div className="username">{dev.login}</div>
							<Link to={`/user/${dev.login}`}>Profile</Link>
						</div>
					</div>
				)
				}
			</div>
		</div>
	);
}