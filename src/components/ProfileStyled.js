import styled from 'styled-components';

export const PhotoAboutMe = styled.img`
  width: 276px;
`;

export const ContainerAboutMe = styled.div`
  padding: 86px 50px;
  @media screen and (min-width: 768px) {
    display: flex;
    height: 80vh;
    align-items: center;
  };
`;

export const TextAboutMe = styled.p`
  font-size: 13px;
  line-height: 13px;
  margin: 10px 0;
  text-align: justify;
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: revert;
    margin-left: 22px;
  };
`;
