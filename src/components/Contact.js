import React from 'react';
import './Contact.css';

function Contact(props) {
  return (
    <div className="Contact">
        <img className="avatar"
        src={props.avatar} alt={props.name}
        />
        <div className="name">{props.name}</div>
        <div className = "status">
            <div className = {props.online ? 'status-online' : 'status-offline'}></div>
            <div className="status-text">{props.online ? 'online' : 'offline'}</div>
        </div>
    </div>
  );
}

export default Contact;
