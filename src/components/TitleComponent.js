import React, { PureComponent } from 'react';

class TitleComponent extends PureComponent {
	render() {
		return (
			<div className="container-fluid">
				<h1 className="general-title">
					Fire
					<span className="flama" role="img" aria-label="fire">
						🔥
					</span>
					Chat
				</h1>
			</div>
		);
	}
}

export default TitleComponent;
