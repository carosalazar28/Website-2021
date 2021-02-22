import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  ListProjects,
  ListAnchor,
  ImageProject,
  ContainerProjects,
  ProjectOverlay,
  TitleProject,
  SectionName,
} from '../components/ProjectsStyled';

export function Projects() {
  return(
    <ContainerProjects>
      <SectionName>Projects</SectionName>
      <ListProjects>
        <li>
          <ListAnchor href="https://www.alamesaweb.com/" target="blank">
            <ImageProject src="https://res.cloudinary.com/dkcbxnhg0/image/upload/v1614025710/portfolio/alamesa_hiiu4b.gif" alt="alamesa page" />
            <ProjectOverlay>
              <span>
                <TitleProject>#Alamesa</TitleProject>
                <p>Build a JavaScript web application for decreased by 10x the time costumer spwnd on make the reservation and sanitary register in pandemic.</p>
              </span>
              <span>
                <h5>Responsabilities:</h5>
                <p>Project Manager and Development FrontEnd and BackEnd</p>
              </span>
              <span>
                <h5>Tech stack:</h5>
                <p>JavaScript, React Js, MongoDB, Styled-Components, Express Js, </p>
              </span>
              <span>
                <FontAwesomeIcon icon={'link'} size="1x" />
              </span>
            </ProjectOverlay>
          </ListAnchor>
        </li>
        <li>
          <ListAnchor href="https://www.alamesaweb.com/" target="blank">
            <ImageProject src="https://res.cloudinary.com/dkcbxnhg0/image/upload/v1614025710/portfolio/alamesa_hiiu4b.gif" alt="alamesa page" />
            <ProjectOverlay>
              <span>
                <TitleProject>#Alamesa</TitleProject>
                <p>Build a JavaScript web application for decreased by 10x the time costumer spwnd on make the reservation and sanitary register in pandemic.</p>
              </span>
              <span>
                <h5>Responsabilities:</h5>
                <p>Project Manager and Development FrontEnd and BackEnd</p>
              </span>
              <span>
                <h5>Tech stack:</h5>
                <p>JavaScript, React Js, MongoDB, Styled-Components, Express Js, </p>
              </span>
              <span>
                <FontAwesomeIcon icon={'link'} size="1x" />
              </span>
            </ProjectOverlay>
          </ListAnchor>
        </li>
      </ListProjects>
    </ContainerProjects>
  );
}
