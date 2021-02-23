import React from 'react';
import { ContainerEducation, ContainerRol } from '../components/EducationStyled';
import { ContainerSection, SectionName } from '../components/styled/ContainerSection';
import { TextDescription, TextSubtitles } from '../components/styled/TextSyles';

export function Education() {
  return(
    <ContainerSection>
      <div>
        <SectionName>
          Education
        </SectionName>
        <TextDescription style={{ paddingRight: 37, paddingLeft: 37 }}>
          One of my core strengths is the ability to adapt to change and lifelong learning for that reason in my education I have to careers and many diferents curses that I had told.
        </TextDescription>
      </div>
      <div>
        <ContainerEducation>
          <li>
            <TextSubtitles>Make It Real Camp</TextSubtitles>
            <ContainerRol>
              <TextDescription>Full Stack Developer</TextDescription>
              <TextDescription>Graduated 2021 - Febraury</TextDescription>
            </ContainerRol>
            <span>
              <TextDescription>
                I took part in an intensive 12-week full-time program where I build web applications with agile Scrum methodology, I participated in the execution of the FrontEnd with the implementation of the JavaScript programming language and the React development library, on the BackEnd part implement like a server Node.js, Express and together with the Mongo database.
              </TextDescription>
            </span>
          </li>
          <li>
            <TextSubtitles style={{ marginTop: 18 }}>Universitat Ramon Llull</TextSubtitles>
            <ContainerRol>
              <TextDescription>Master of comprehensive construction management.</TextDescription>
              <TextDescription>Graduated 2020 - April</TextDescription>
            </ContainerRol>
            <span>
              <TextDescription>
                Graduated the Master of comprehensive construction management specializing in energy efficiency and sustainability, I design a project with implement the renewable energy.
              </TextDescription>
            </span>
          </li>
          <li>
            <TextSubtitles style={{ marginTop: 18 }}>University La Salle</TextSubtitles>
            <ContainerRol>
              <TextDescription>Civil Engineer.</TextDescription>
              <TextDescription>Graduated 2017 - Febraury</TextDescription>
            </ContainerRol>
            <span>
              <TextDescription>
                Graduated the Civil Engineer career.
              </TextDescription>
            </span>
          </li>
        </ContainerEducation>
      </div>
    </ContainerSection>
  );
}
