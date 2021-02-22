import styled from 'styled-components';

export const ContainerProjects = styled.section`
  padding: 86px 0;

  &:before {
    background-color: #8dcf3f;
    height: 5px;
    position: absolute;
    width: 67px;
    content: '';
  };
`;

export const ListProjects = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ListAnchor = styled.a`
  display: block;
  position: relative;
  line-height: 0;
  color: black;
`;

export const ImageProject = styled.img`
  width: 100%;
`;

export const ProjectOverlay = styled.div`
  line-height: 1.4;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  font-size: 13px;
  color: transparent;

  &:hover {
    background-color: rgba(255, 255, 255, 0.69);
    color: black;
  }
`;
