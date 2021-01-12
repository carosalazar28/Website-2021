import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from 'react';

const StyledNav = styled.nav`
  height: ${props => props.shown ? '100vh' : '50px'};
  width: 50%;
  margin: 0;
  padding: 0;
  position: fixed;
  z-index: 4;
  right:  0;
  background: #fff;
  overflow: hidden;
  background: ${props => props.show ? '#ebf579' : '#fff'};
  transition: all 0.5s ease-in-out;
  @media screen and (min-width: 960px) {
    position: absolute;
    right: 0;
    min-height: 100vh;
    height: 100%;
    width: 250px;
    display: block;
    overflow: auto;
  }
  ul {
    padding: 0;
    margin: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  li {
    list-style-type: none;
    height: 60px;
    margin: 0;
    padding: 10px;
    position: relative;
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    padding: 0;
  }
  a {
    text-decoration: none;
    color: #333;
    cursor: pointer;
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
    &:hover {
      background-color: #f5f5f5;
    }
  }
  .nav li {
    &:after {
      width: calc(100% - 200px);
      height: 1px;
      background-color: #333;
      content: '';
      position: absolute;
      bottom: 0;
      left: 100px;
    }
  }
`;

StyledNav.defaultProps = {
  shown: false,
};

const Hamburger = styled.button`
  position: absolute;
  top: 12.5px;
  right: 5px;
  padding: 0;
  height: 32px;
  width: 32px;
  background: rgba(255,255,255,0);
  border: none;
  @media screen and (min-width: 960px) {
    display: none;
  }
`;

Hamburger.defaultProps = {
  shown: false,
};

const Container = styled.div`
  position: absolute;
  right: 0;
  @media screen and (min-width: 960px) {
    position: fixed;
    width: 250px;
  }
`;

function Nav() {
  
  const [shown, setShown] = useState(false);

  const stopScroll = () => {
    document.body.style.overflow = shown ? 'hidden' : ''
    // block scroll on iOS safari
    document.documentElement.style.overflow = shown ? 'hidden' : ''
  }

  const handleToggleNav = () => {
    setShown(true)
    stopScroll()
  }

  const handleCloseNav = () => {
    setShown(!shown)
    stopScroll()
  }

  return (
    <StyledNav shown={shown}>
      <Hamburger onClick={handleToggleNav}>
        <FontAwesomeIcon icon={"bars"} size="2x"/>
      </Hamburger>
      {shown ? (
        <Container>
          <ul className="nav">
            <li><Link onClick={handleCloseNav} to="/">Home</Link></li>
            <li><Link onClick={handleCloseNav} to="/experience">Experience</Link></li>
            <li><Link onClick={handleCloseNav} to="/projects">Projects</Link></li>
            <li><Link onClick={handleCloseNav} to="/blog">Blog</Link></li>
          </ul>
        </Container>
      ) : (null)}
    </StyledNav>
  );
}

export default Nav;