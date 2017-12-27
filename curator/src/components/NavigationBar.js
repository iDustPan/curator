import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class NavigationBar extends Component {

	constructor(props) {
		super(props);
		this.state = {
			selectTab: 'Curation Portal'
		}
	}

	onClickAction(currentTab) {
		this.setState({selectTab: currentTab});
	}

	render() {

		const items = [
			'Curation Portal',
			'Products',
			'Tagging',
			'Recommendations',
			'Trending',
			'Boosts'
		];

		const navItems = items.map((item, idx) => {

      let itemClassName = 'nav-item';
      let linkClassName = 'nav-link';
      let path = `/${item}`;

			if (item === this.state.selectTab) {
				itemClassName = `${itemClassName} active`;
			}

			if (idx == 0) {
				linkClassName = `${linkClassName} navbar-brand`;
        path = `/`;
			}

			return (
        <li className={itemClassName}
          onClick={() => this.onClickAction(item)}
          key={item}>
          <Link className={linkClassName} to={path}>{item}</Link>
        </li>
      );
		});

		return (<nav className="navbar navbar-expand-sm navbar-dark bg-dark">
			<ul className="navbar-nav">
				{navItems}
			</ul>
		</nav>);
	}
}

export default NavigationBar;
