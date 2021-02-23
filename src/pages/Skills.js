import React from 'react';
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
        <TextDescription style={{ paddingRight: 37, paddingLeft: 37 }}>
          During my career I learned different technologies and developed soft skills, in this section I share some of the them:
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
            <img src="https://res.cloudinary.com/dkcbxnhg0/image/upload/v1614119326/portfolio/mongodb_1_ytirwk.png"/>
            <TextSkill>MongoDB</TextSkill>
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
            <img src="https://img.icons8.com/ios/50/000000/notion.png"/>
            <TextSkill>Notion</TextSkill>
          </ListItemSkills>
          <ListItemSkills>
            <FontAwesomeIcon icon={['fab', 'git-alt']} size="3x" />
            <TextSkill>Git</TextSkill>
          </ListItemSkills>
          <ListItemSkills>
            <FontAwesomeIcon icon={['fas', 'brain']} size="3x" />
            <TextSkill>Critical thinking</TextSkill>
          </ListItemSkills>
          <ListItemSkills>
            <FontAwesomeIcon icon={['fas', 'palette']} size="3x" />
            <TextSkill>Creative</TextSkill>
          </ListItemSkills>
          <ListItemSkills>
            <FontAwesomeIcon icon={['fas', 'chalkboard-teacher']} size="3x" />
            <TextSkill>Mentoring</TextSkill>
          </ListItemSkills>
        </ContainerListSkills>
      </div>
    </ContainerSection>
  );
}
