import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  ListProjects,
  ListAnchor,
  ImageProject,
  ContainerSection,
  ProjectOverlay,
  TitleProject,
  SectionName,
} from '../components/ProjectsStyled';

export function Projects() {
  return(
    <ContainerSection>
      <SectionName>Projects</SectionName>
      <ListProjects>
        <li>
          <ListAnchor href="https://www.alamesaweb.com/" target="blank">
            <ImageProject src="https://res.cloudinary.com/dkcbxnhg0/image/upload/v1614025710/portfolio/alamesa_hiiu4b.gif" alt="alamesa page" />
            <ProjectOverlay>
              <span>
                <TitleProject>#Alamesa</TitleProject>
                <p>Build a JavaScript web application for decreased by 10x the time costumer spend on make the reservation and sanitary register in pandemic.</p>
              </span>
              <span>
                <h5>Responsabilities:</h5>
                <p>Project Manager and Development FrontEnd and BackEnd</p>
              </span>
              <span>
                <h5>Tech stack:</h5>
                <p>JavaScript, React Js, MongoDB, Styled-Components, Node Js, Express Js, </p>
              </span>
              <span>
                <FontAwesomeIcon icon={'link'} size="1x" />
              </span>
            </ProjectOverlay>
          </ListAnchor>
        </li>
        <li>
          <ListAnchor
            href="https://www.notion.so/Sprinter-b94053fcec734e1da09d7c3d52a2a490" target="blank"
          >
            <ImageProject src="https://res.cloudinary.com/dkcbxnhg0/image/upload/v1614031966/portfolio/sprinter_enadck.jpg" alt="sprinter mobile" />
            <ProjectOverlay>
              <span>
                <TitleProject>Sprinter</TitleProject>
                <p>Build a JavaScript mobile application for improving the flow for implement the SCRUM methodology in little projects and teams.</p>
              </span>
              <span>
                <h5>Responsabilities:</h5>
                <p>Project Manager and Development FrontEnd and BackEnd</p>
              </span>
              <span>
                <h5>Tech stack:</h5>
                <p>JavaScript, React Native, MongoDB, Styled-Components, Node Js, Express Js, </p>
              </span>
              <span>
                <FontAwesomeIcon icon={'link'} size="1x" />
              </span>
            </ProjectOverlay>
          </ListAnchor>
        </li>
        <li>
          <ListAnchor
            href="https://www.notion.so/Sprinter-b94053fcec734e1da09d7c3d52a2a490" target="blank"
          >
            <ImageProject src="https://res.cloudinary.com/dkcbxnhg0/image/upload/v1614033431/portfolio/documentation_rxchxj.png" alt="documentation alamesa" />
            <ProjectOverlay>
              <span>
                <TitleProject>Alamesa documentation</TitleProject>
                <p>Documentation for the project #Alamesa</p>
              </span>
              <span>
                <h5>Responsabilities:</h5>
                <p>Project Manager and Development FrontEnd and BackEnd</p>
              </span>
              <span>
                <h5>Tech stack:</h5>
                <p>Notion, Trello</p>
              </span>
              <span>
                <FontAwesomeIcon icon={'link'} size="1x" />
              </span>
            </ProjectOverlay>
          </ListAnchor>
        </li>
      </ListProjects>
    </ContainerSection>
  );
}
