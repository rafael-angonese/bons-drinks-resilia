import styled from "styled-components";

export const StyledButton = styled.button`
  color: ${(props) => (props.isDisabled ? "black" : props.color || "orange")};
  font-size: 16px;
  margin: 8px;
  padding: 8px;
  border: 2px solid ${(props) => (props.isDisabled ? "black" : props.color)};
  border-radius: 5px;
`;
