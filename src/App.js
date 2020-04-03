import React from 'react';
import ChatRoom from './components/ChatRoom';
import TitleComponent from './components/TitleComponent.js';
import './components/styles/TitleComponent.css';
import './components/styles/ChatRoom.css';

class App extends React.Component {
	render() {
		return (
			<div>
				<TitleComponent />
				<ChatRoom />
			</div>
		);
	}
}

export default App;
