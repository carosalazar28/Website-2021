import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

const ContainerHeader = styled.header`
  position: fixed;
  z-index: 1;
  right: 0;
  height: 100vh;
  width: 50vw;
  @media screen and (min-width: 768px) {
    width: 30vw;
  }
`;

const ButtonIcon = styled.button`
  position: fixed;
  top: 12.5px;
  right: 45px;
  padding: 0;
  height: 32px;
  width: 32px;
  background: rgba(255,255,255,0);
  border: none;
  z-index: 3;
`;

const Container = styled.div`
  position: absolute;
  right: 0;
  padding: 138px 24px;
  background-color: #ebf579;
  height: inherit;
  width: inherit;
  z-index: 2;
`;

const ItemsList = styled.ul`
  text-align: start;
  list-style: none;
  font-size: 13px;
  font-weight: bold;
`;

const ItemLink = styled(Link)`
  text-decoration: none;
  color: black;

  &:hover &active {
    background-color: rgba(255, 255, 255, 0.69);
    border-radius: 7px;
    padding: 2px 10px;
  };
`;

const Item = styled.li`
  margin-bottom: 28px;
`;

function Nav() {

  const [shown, setShown] = useState(false);

  const handleToggleNav = () => {
    setShown(true);
  };

  const handleCloseNav = () => {
    setShown(false);
  };

  return (
    <ContainerHeader>
      {shown ? (
        <ButtonIcon onClick={handleCloseNav}>
          <FontAwesomeIcon icon={'times-circle'} size="2x" />
        </ButtonIcon>
      ) : (
        <ButtonIcon onClick={handleToggleNav}>
          <FontAwesomeIcon icon={'bars'} size="2x"/>
        </ButtonIcon>
      )}
      {shown ? (
        <Container>
          <ItemsList className="nav">
            <Item><ItemLink onClick={handleCloseNav} to="/">Home</ItemLink></Item>
            <Item><ItemLink onClick={handleCloseNav} to="/profile">Profile</ItemLink></Item>
            <Item><ItemLink onClick={handleCloseNav} to="/projects">Projects</ItemLink></Item>
            <Item><ItemLink onClick={handleCloseNav} to="/skills">Skills</ItemLink></Item>
            <Item><ItemLink onClick={handleCloseNav} to="/education">Education</ItemLink></Item>
            <Item><ItemLink onClick={handleCloseNav} to="/contact">Contact</ItemLink></Item>
          </ItemsList>
        </Container>
      ) : (null)}
    </ContainerHeader>
  );
}

export default Nav;
