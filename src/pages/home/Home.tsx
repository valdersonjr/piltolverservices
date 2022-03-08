import { Component } from 'react';
import { AppBar, CopyRight } from '../../components';
//import { Link } from 'react-router-dom';
import './reset.css';

class Home extends Component {
	render() {
		return (
			<div>
				<AppBar />
				<CopyRight />
			</div>
		);
	}
}

export default Home;
