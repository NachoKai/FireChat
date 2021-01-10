import React from "react";
import ChatRoom from "./components/ChatRoom";
import TitleComponent from "./components/TitleComponent";

import "./components/styles/TitleComponent.css";
import "./components/styles/ChatRoom.css";

const App = () => {
	return (
		<div>
			<TitleComponent />
			<ChatRoom />
		</div>
	);
};

export default App;
