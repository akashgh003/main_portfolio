import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { FaInstagram, FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

function App() {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (subject && message) {
      // Replace this part with your email sending logic, e.g., using EmailJS
      window.location.href = `mailto:akashghosh1906@gmail.com?subject=${subject}&body=${message}`;
    } else {
      alert("Please fill out both the subject and message fields.");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="header-left">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="header-right">
          <button className="nav-button">About Me</button>
          <button className="nav-button">Projects</button>
          <button className="nav-button">Resume</button>
        </div>
      </header>
      <main>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </main>
      <footer className="App-footer">
        <div className="footer-left">
          <a href="https://www.instagram.com/_akash.gh_/" className="social-icon"><FaInstagram /></a>
          <a href="https://x.com/akash19062003" className="social-icon"><FaTwitter /></a>
          <a href="https://github.com/akashgh003" className="social-icon"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/akash-ghosh-7b6b7127a" className="social-icon"><FaLinkedin /></a>
        </div>
        <div className="footer-right">
          <h3>DM me for collab!</h3>
          <div className="input-container">
            <input 
              type="text" 
              placeholder="Subject" 
              value={subject} 
              onChange={(e) => setSubject(e.target.value)} 
              className="input-subject"
            />
            <textarea 
              placeholder="Message" 
              value={message} 
              onChange={(e) => setMessage(e.target.value)} 
              className="input-message"
            />
            <button onClick={handleSend} className="send-button">Send</button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
