// escb 👇:
import styled from "styled-components";

const Button = styled.button`
  //? If Button doesn't take "bg" parametres background-color will be "white" 👇
  background-color: ${({ bg }) => bg || "#fff"};
  //? If Button doesn't take "color" parametres color will be "white" 👇
  color: ${({ color }) => color || "#fff"};

  border: 1px solid #a62440;
  border-radius: 6px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  padding: 1rem 1.25rem;
  font-size: 1.2rem;
  margin-right: 0.5rem;
  cursor: pointer;

  &:hover {
    opacity: 0.85;
    transform: scale(0.95);
  }
`;

export default Button;
