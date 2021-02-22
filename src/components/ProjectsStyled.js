import styled from 'styled-components';

export const ContainerProjects = styled.section`
  padding: 86px 0;

  &:before {
    background-color: #8dcf3f;
    height: 5px;
    position: absolute;
    width: 67px;
    content: '';
    left: 10px;
  };
`;

export const SectionName = styled.h2`
  text-align: start;
  padding: 5px 10px 10px;
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
    h5 {
      background-image: linear-gradient(120deg, #ebf579, rgba(235, 245, 121, 1));
      width: fit-content;
      background-size: 100% .6em;
      background-repeat: no-repeat;
      background-position: center 75%;
      transition: background-size .3s ease-in;
      margin: 10px auto 0;
      font-weight: bold;
    }
  }
`;

export const TitleProject = styled.h3`
  font-size: 15px;
  margin: 15px 0 0;
`;
