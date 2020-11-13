import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="Contact">
        <img className="avatar"
            src="https://randomuser.me/api/portraits/women/62.jpg"
            alt="Terri Morris"
            />
        <div>
            <h4 className="nom">Terri Morris</h4>
            <div className="status">
                <div className="status-online"></div>
                <div className="status-text">online</div>
            </div>
            
        </div>
    </div>
  );
}

export default Contact;
