import React, { useState, useEffect } from 'react';
import api from '../../api';
import { useParams, Link } from 'react-router-dom';
import './style.scss';

export default function User() {
    const { username } = useParams();
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    useEffect(() => {
        api.get(`users/${username}/repos`)
            .then(response => {
                setUser({
                    ...response.data[0].owner,
                    repos: response.data
                });

                setLoading(false);
            }).catch(error => {
                console.log(error);
                setLoading(false);
            })
    }, [username]);

    return (
        <div className="User">
            <Link to="/" className="back">Go Back</Link>
            {loading ? '' :
                <div className="contentWrapper">
                    <div className="info">
                        <img src={user.avatar_url} alt={user.login} className="image" />
                        <div className="username">{user.login}</div>
                    </div>
                    <div className="title">Repositories</div>
                    <div className="reposWrapper">
                        {user.repos.map((repo, key) =>
                            <div className="repo" key={key}>
                                <a
                                    href={`https://github.com/${repo.full_name}`}
                                    className="name"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {repo.full_name}
                                </a>
                            </div>
                        )
                        }
                    </div>
                </div>
            }
        </div>
    );
}