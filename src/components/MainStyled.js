import styled from 'styled-components';

const StyledSection = styled.main`
  width: 100%;
  padding-top: 40px;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  text-align: initial;
  
  @media screen and (min-width: 768px) {
    grid-column-start: 2;
    min-height: 100vh;
    max-width: calc(100vw - 250px);
  }
`;

export function Section({ children }) {
  return (
    <StyledSection>
      {children}
    </StyledSection>
  );
}