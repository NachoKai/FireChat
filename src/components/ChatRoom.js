import React, { useState, useEffect } from "react";
import {
	InputGroup,
	FormControl,
	Button,
	ListGroup,
	Form,
} from "react-bootstrap";

import { db } from "../firebase";

const ChatRoom = () => {
	const [message, setMessage] = useState("");
	const [messages, setMessages] = useState([]);

	useEffect(() => {
		db.ref("messages/").on("value", snap => {
			const currentMessages = snap.val();
			if (currentMessages !== null) {
				setMessages(currentMessages);
			}
		});
	}, []);

	const updateMessage = e => {
		setMessage(e.target.value);
	};

	const handleSubmit = e => {
		e.preventDefault();
		const newMessage = {
			id: messages.length,
			text: message,
		};

		db.ref(`messages/${newMessage.id}`).set(newMessage);
		setMessage("");
	};

	return (
		<div className='container'>
			<div className='table'>
				<ListGroup>
					<div className='table-title'>Contate algo:</div>
					<div>
						{messages.map(message => {
							return (
								<ListGroup.Item className='text-style' key={message.id}>
									{message.text}
								</ListGroup.Item>
							);
						})}
					</div>
				</ListGroup>
			</div>
			<div className='input-text'>
				<Form.Label for='input' className='label'>
					Escribí acá:
				</Form.Label>
				<InputGroup className='mb-3'>
					<FormControl
						required
						onChange={updateMessage}
						value={message}
						type='text'
						id='input'
					/>
					<InputGroup.Append>
						<Button
							className='enviar-btn'
							variant='danger'
							onClick={handleSubmit}
						>
							Enviar
						</Button>
					</InputGroup.Append>
				</InputGroup>
			</div>
		</div>
	);
};

export default ChatRoom;
