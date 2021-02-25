import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Name = styled.h1`
  font-size: 48px;
  margin: 7px 49px;
  @media screen and (min-width: 768px) {
    font-size: 64px;
  };
`;

export const Carrer = styled.h2`
  font-size: 16px;
  margin: 7px 49px;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  };
`;

export const ContactInfo = styled.span`
  display: block;
  margin: 7px 49px;
`;

export const ParragrahpContact = styled.p`
  display: inline-block;

`;

export const SectionQuoute = styled.section`
  display: flex;
  margin: 49px;
`;

export const IconMargin = styled(FontAwesomeIcon)`
  margin-right: 32px;
`;

export const ParragrahpQuote = styled.blockquote`
  p {
    text-shadow: 1px 1px 7px black;
    line-height: 20px;
    margin-bottom: 17px;
  }
  h4 {
    font-weight: 400;
  }
  @media screen and (min-width: 768px) {
    font-size: 24px;
    width: 246px;
    margin-left: 39px;
  };
`;
