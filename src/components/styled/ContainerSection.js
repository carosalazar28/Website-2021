import styled from 'styled-components';

export const ContainerSection = styled.section`
  padding: 86px 0;

  &:before {
    background-color: #EBF579;
    height: 5px;
    position: absolute;
    width: 67px;
    content: '';
    left: 10px;
  };
`;

export const SectionName = styled.h2`
  text-align: start;
  padding: 5px 10px 25px;
  @media screen and (min-width: 768px) {
    font-size: 36px;
  };
`;
