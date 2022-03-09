import { Component } from 'react';
import { AppBar, CopyRight, PrecoServicos } from '../../components';

class EloBoost extends Component {
	render() {
		return (
			<div>
				<AppBar />
				<PrecoServicos nome="Elo Boost" />
				<CopyRight />
			</div>
		);
	}
}

export default EloBoost;
