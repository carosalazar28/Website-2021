import React, { useState } from 'react';
import { ContainerSection, SectionName } from '../components/styled/ContainerSection';
import { FormContainer, InputForm, LabelForm, ButtonSend } from '../components/ContactStyled';

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
        <FormContainer onSubmit={handleSubmit}>
          <LabelForm htmlFor="name">
            <span>Name</span>
            <InputForm
              placeholder="Your name"
              id="name"
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </LabelForm>
          <LabelForm htmlFor="email">
            <span>Email</span>
            <InputForm
              placeholder="Your email"
              id="email"
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </LabelForm>
          <LabelForm htmlFor="message">
            <span>Message</span>
            <InputForm
              as={'textarea'}
              style={{ marginLeft: 25 }}
              id="message"
              type="text"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="15"
              cols="32"
              placeholder="Hi, Carolina, I would like work with you..."
            >
            </InputForm>
          </LabelForm>
          <ButtonSend type="submit" >SEND</ButtonSend>
        </FormContainer>
      </div>
    </ContainerSection>
  );
}
