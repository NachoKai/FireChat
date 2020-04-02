import React from 'react';
import { db } from '../firebase';
import { InputGroup, FormControl, Button, ListGroup } from 'react-bootstrap';

class ChatRoom extends React.Component {
	constructor() {
		super();
		this.state = {
			message: '',
			messages: [
				// {id: 0, text: 'asdasd'},
			]
		};
	}

	componentDidMount() {
		db.ref('messages/').on('value', snap => {
			const currentMessages = snap.val();
			if (currentMessages != null) {
				this.setState({
					messages: currentMessages
				});
			}
		});
	}

	updateMessage(e) {
		this.setState({
			message: e.target.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		const newMessage = {
			id: this.state.messages.length,
			text: this.state.message
		};

		db.ref(`messages/${newMessage.id}`).set(newMessage);
		this.setState({ message: '' });
	}

	render() {
		const { messages } = this.state;
		const messagesList = messages.map(message => {
			return (
				<ListGroup.Item className="text-style" key={message.id}>
					{message.text}
				</ListGroup.Item>
			);
		});

		return (
			<div className="container">
				<div className="table">
					<ListGroup>
						<div className="table-title">Contate algo:</div>
						<div>{messagesList}</div>
					</ListGroup>
				</div>
				<div className="input-text">
					<InputGroup className="mb-3">
						<FormControl
							onChange={this.updateMessage.bind(this)}
							placeholder="Escibe aquí..."
							value={this.state.message}
							type="text"
						/>
						<InputGroup.Append>
							<Button variant="danger" onClick={this.handleSubmit.bind(this)}>
								Enviar
							</Button>
						</InputGroup.Append>
					</InputGroup>
				</div>
			</div>
		);
	}
}

export default ChatRoom;
