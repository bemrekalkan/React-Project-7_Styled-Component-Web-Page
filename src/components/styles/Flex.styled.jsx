import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  align-items: center;

  & > div {
    /* 👇 Allow all elements to grow */
    flex-grow: 1;
    /* 👇 Allow all divs to occupy an  🚩 equal 🚩 amount of space */
    flex-basis: 0;
  }
  @media (max-width: ${({ theme }) => theme.responsive}) {
    flex-direction: column;
    text-align: center;
  }
`;

export default Flex;
