import React from 'react';
import {
  PhotoAboutMe,
  ContainerAboutMe,
  TextAboutMe,
} from '../components/ProfileStyled';

export function Profile() {

  return (
    <ContainerAboutMe>
      <figure>
        <PhotoAboutMe
          src="https://res.cloudinary.com/dkcbxnhg0/image/upload/v1610402819/portfolio/aboutme_pevhwq.jpg"
          alt="Profile photo Carolina"
        />
      </figure>
      <div>
        <TextAboutMe>
          Hi, my name is Carolina Salazar, I live in Bogotá I am FullStack Developer and also I have a Master in Energy Sustainability, I found a passion in design and developed web, I am searching challenges in web programming.
        </TextAboutMe>
        <TextAboutMe>
          My previous experience was in the program Top for Make It Real where I build two applications with integration the BackEnd and FrontEnd in JavaScript.
        </TextAboutMe>
        <TextAboutMe>
          I like to work in group, many times I stand out for my leadership and my structuring at the moment for developing a project.
        </TextAboutMe>
      </div>
    </ContainerAboutMe>
  );
}
