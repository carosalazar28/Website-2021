import React from 'react';
import { CIcon } from '@coreui/icons-react';
// import { cifAU } from '@coreui/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ContainerSection, SectionName, } from '../components/styled/ContainerSection';
import { TextDescription } from '../components/styled/TextSyles';
import {
  ContainerListSkills,
  ListItemSkills,
  TextSkill,
} from '../components/SkillsStyled';

export function Skills() {
  return(
    <ContainerSection>
      <div>
        <SectionName>
          Skills
        </SectionName>
        <TextDescription>
          During my career I have been exposed to different technologies, in this section I share some of the them:
        </TextDescription>
      </div>
      <div>
        <ContainerListSkills>
          <ListItemSkills>
            <FontAwesomeIcon icon={['fab', 'html5']} size="3x" />
            <TextSkill>HTML 5</TextSkill>
          </ListItemSkills>
          <ListItemSkills>
            <FontAwesomeIcon icon={['fab', 'css3']} size="3x" />
            <TextSkill>CSS 3</TextSkill>
          </ListItemSkills>
          <ListItemSkills>
            <FontAwesomeIcon icon={['fab', 'js']} size="3x" />
            <TextSkill>JavaScript</TextSkill>
          </ListItemSkills>
          <ListItemSkills>
            <FontAwesomeIcon icon={['fab', 'react']} size="3x" />
            <TextSkill>React Js</TextSkill>
          </ListItemSkills>
          <ListItemSkills>
            <FontAwesomeIcon icon={['fab', 'node']} size="3x" />
            <TextSkill>Node Js</TextSkill>
          </ListItemSkills>
          <ListItemSkills>
            <FontAwesomeIcon icon={['fab', 'docker']} size="3x" />
            <TextSkill>Docker</TextSkill>
          </ListItemSkills>
          <ListItemSkills>
            <FontAwesomeIcon icon={['fab', 'figma']} size="3x" />
            <TextSkill>Figma</TextSkill>
          </ListItemSkills>
          <ListItemSkills>
            <CIcon name="cil-list" size="2xl"/>
            <TextSkill>Figma</TextSkill>
          </ListItemSkills>
        </ContainerListSkills>
      </div>
    </ContainerSection>
  );
}
