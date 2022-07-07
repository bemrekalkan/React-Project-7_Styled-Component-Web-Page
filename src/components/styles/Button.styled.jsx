// escb 👇:
import styled from "styled-components";

const Button = styled.button`
  background-color: ${({ bg }) => bg || "#fff"};
  color: ${({ color }) => color || "#fff"};
`;

export default Button;
