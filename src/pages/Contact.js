import React, { useState } from 'react';
import { ContainerSection, SectionName } from '../components/styled/ContainerSection';

export function Contact() {

  const[name, setName] = useState('');
  const[email, setEmail] = useState('');
  const[message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
  };

  return(
    <ContainerSection>
      <SectionName>Contact</SectionName>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">
            <span>Name</span>
            <input
              placeholder="Your name"
              id="name"
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label htmlFor="email">
            <span>Email</span>
            <input
              placeholder="Your email"
              id="email"
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label htmlFor="message">
            <span>Message</span>
            <textarea
              id="message"
              type="text"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="10"
              cols="20"
              placeholder="Hi, Carolina, I would like work with you..."
            >
            </textarea>
          </label>
          <button type="submit" >SEND</button>
        </form>
      </div>
    </ContainerSection>
  );
}
