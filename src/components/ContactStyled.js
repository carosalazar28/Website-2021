import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LabelForm = styled.label`
  display: flex;
  align-items: center;
  font-size: 13px;
  font-weight: bold;
  margin-bottom: 43px;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const InputForm = styled.input`
  background: rgba(229, 229, 229, 0.12);
  border-radius: 7px;
  padding: 8px 10px;
  width: 208px;
  border: none;
  margin-left: 42px;
  border-bottom: 1px solid ${(props) => props.theme.graySolid};
  &:focus {
    outline-color: ${(props) => props.theme.primaryColor};
  }
`;

export const ButtonSend = styled.button`
  padding: 10px 26px;
  border-radius: 7px;
  border: none;
  background-color: ${(props) => props.theme.primaryColor};
  font-size: 13px;
  font-weight: bold;
  &:hover {
    background-color: ${(props) => props.theme.hoverPrimary};
    border: 1px solid ${(props) => props.theme.primaryColor};
  }
  &:focus {
    outline: none;
  }
`;

export const ButtomTop = styled(Link)`
  position: relative;
  right: -35%;
  z-index: 1;
  text-decoration: revert;
  color: black;
`;

export const SucceededForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  background-repeat: no-repeat;
`;

export const LabelsFlex = styled.span`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    width: 634px;
    justify-content: space-between;
  }
`;

export const TextArea = styled(InputForm)`
  @media screen and (min-width: 768px) {
    width: 537px;
  }
`;
