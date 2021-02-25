import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ContainerSection, SectionName } from '../components/styled/ContainerSection';
import {
  FormContainer,
  InputForm,
  LabelForm,
  ButtonSend,
  ButtomTop,
  SucceededForm,
} from '../components/ContactStyled';
import { useForm, ValidationError } from '@formspree/react';

export function Contact() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [state, handleSubmit] = useForm('contactMe');

  if(state.succeeded) {
    return(
      <ContainerSection>
        <SucceededForm>
          <p>Thanks for contact me</p>
        </SucceededForm>
        <ButtomTop to="/">
          <FontAwesomeIcon icon={'arrow-alt-circle-up'} size="2x" />
        </ButtomTop>
      </ContainerSection>
    );
  }

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
            <ValidationError field="email" prefix="Email" errors={state.errors} />
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
          <ButtonSend type="submit" disabled={state.submitting} >SEND</ButtonSend>
          <ValidationError errors={state.errors} />
        </FormContainer>
        <ButtomTop to="/">
          <FontAwesomeIcon icon={'arrow-alt-circle-up'} size="2x" />
        </ButtomTop>
      </div>
    </ContainerSection>
  );
}
