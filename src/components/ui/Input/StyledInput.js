import styled from "styled-components";

export const StyledInput = styled.input.attrs({
  type: "text",
})`
  padding: 13px;
  margin: 20px;
  border: 1.5px solid #e1e1e1;
  border-radius: 30px;
  font-size: 12px;
  outline: none;

  ::placeholder {
    color: grey;
  }
`;
