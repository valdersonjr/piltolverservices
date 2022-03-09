import { Component } from 'react';
import { AppBar, CopyRight, PrecoServicos } from '../../components';

class DuoBoost extends Component {
	render() {
		return (
			<div>
				<AppBar />
				<PrecoServicos nome="Duo Boost" />
				<CopyRight />
			</div>
		);
	}
}

export default DuoBoost;
