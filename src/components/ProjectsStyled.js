import styled from 'styled-components';

export const ListProjects = styled.ul`
  list-style: none;
  padding: 0 5px;
`;

export const ListAnchor = styled.a`
  line-height: 0;
  color: ${(props) => props.theme.justBlack};
`;

export const ImageProject = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

export const ProjectOverlay = styled.div``;

export const TitleProject = styled.h3`
  font-size: 15px;
  margin: 8px 0 0;
`;
