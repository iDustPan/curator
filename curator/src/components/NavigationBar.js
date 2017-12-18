
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavigationBar extends Component {
	render() {
		return (
				<nav className="navbar navbar-expand-sm bg-light navbar-light">
					<ul className="navbar-nav">
						<li className="nav-item">
							<Link className="nav-link navbar-brand" to='/'>Curation Portal</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to='/products'>Products</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to='/tagging'>Tagging</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to='/recommendations'>Recommendations</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to='/trending'>Trending</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to='/boosts'>Boosts</Link>
						</li>
					</ul>
				</nav>
		);
	}
}

export default NavigationBar;
