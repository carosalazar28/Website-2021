import React from 'react';
import styled from 'styled-components';

const FooterStyle = styled.footer`
  margin-top: 35px;
  background-color: #fcfcfc;
  padding: 25px 20px;
  position: absolute;
  font-size: 13px;
  text-align: initial;
  width: 100vw;
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-evenly;
  }
`;

const ContentFooter = styled.div`
  margin-bottom: 25px;
  line-height: 13px;
  @media screen and (min-width: 768px) {
    width: 215px;
  }
`;

const ParragraphMade = styled.p`
  margin-bottom: 7px;
`;

export function Footer() {
  return (
    <FooterStyle>
      <ContentFooter>
        <ParragraphMade><strong>Made with love by Carolina Salazar</strong></ParragraphMade>
        <p>© 2020 PORTFOLIO CAROLINA SALAZAR, All Rights Reserved</p>
      </ContentFooter>
      <ContentFooter>
        <p>Currently living in Colombia, Bogotá D.C.</p>
      </ContentFooter>
      <div>
        <p><strong>Email:</strong> cindy.s.r.28@hotmail.com</p>
        <p><strong>Phone: +</strong>3102139570</p>
      </div>
    </FooterStyle>
  );
}
