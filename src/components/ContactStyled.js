import styled from 'styled-components';

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
`;

export const InputForm = styled.input`
  background: rgba(229, 229, 229, 0.12);
  border-radius: 7px;
  padding: 8px 10px;
  width: 208px;
  border: none;
  margin-left: 42px;
  border-bottom: 1px solid #c4c4c4;
  &:focus {
    outline-color: #EBF579;
  };
`;

export const ButtonSend = styled.button`
  padding: 10px 26px;
  border-radius: 7px;
  border: none;
  background-color: #EBF579;
  font-size: 13px;
  font-weight: bold;
  &:hover {
    background-color: #ebf57982;
    border: 1px solid #ebf579;
  };
  &:focus {
    outline: none;
  };
`;
