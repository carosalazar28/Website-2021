import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Name,
  Carrer,
  ContactInfo,
  ParragrahpContact,
  SectionQuoute,
  IconMargin,
  ParragrahpQuote,
} from '../components/HomeStyled';
import { Section } from '../components/MainStyled';


function Home() {
  return(
    <Section>
      <Name> Carolina <br/> Salazar </Name>
      <Carrer> Front End Developer </Carrer>
      <ContactInfo>
        <IconMargin icon={['fab', 'github']} size="2x"/>
        <FontAwesomeIcon icon={['fab', 'linkedin']} size="2x"/>
      </ContactInfo>
      <ContactInfo>
        <IconMargin icon={'envelope-open-text'} size="2x"/>
        <ParragrahpContact>Contact me</ParragrahpContact>
      </ContactInfo>
      <SectionQuoute>
        <figure>
          <img
            src="https://res.cloudinary.com/dkcbxnhg0/image/upload/v1610402784/portfolio/cover_pasyhb.svg"
            alt="Imagen de cover para el home"
          />
        </figure>
        <blockquote>
          <ParragrahpQuote>
            {/* eslint-disable-next-line */}
            "If you can't love yourself, how in the hell you gonna love somebody else"
          </ParragrahpQuote>
          <h4>RuPaul</h4>
        </blockquote>
      </SectionQuoute>
    </Section>
  );
}

export default Home;
