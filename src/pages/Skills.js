import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ContainerSection, SectionName, } from '../components/ProjectsStyled';

export function Skills() {
  return(
    <ContainerSection>
      <div>
        <SectionName>
          Skills
        </SectionName>
        <p>
          During my career I have been exposed to different technologies, in this section I share some of the them:
        </p>
      </div>
      <div>
        <ul>
          <li>
            <FontAwesomeIcon icon={'html5'} size="2x" />
            <span>HTML 5</span>
          </li>
        </ul>
      </div>
    </ContainerSection>
  );
}
