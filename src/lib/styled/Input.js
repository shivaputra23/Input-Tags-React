import styled from "styled-components";

const Input = styled.input`
  background: #f1f3f4;
  border: 2px solid black;
  border-radius: 3px;
  outline: none;
  padding: 10px
  font-size: large;
  display: inline-block;
  width: 95%;
  color: #69626d;
  font-weight: 400;
  &::-webkit-input-placeholder {
    font-weight: 100;
    font-style: italic;
    color: #69626d;
  }
`;

export default Input;
