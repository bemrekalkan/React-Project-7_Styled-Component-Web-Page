import Button from "./styles/Button.styled";
import StyledHeader, { Logo, Nav } from "./styles/Header.styled";
const Header = () => {
  return (
    <StyledHeader>
      <Nav>
        {/* 👇 Since we put our pictures in the public folder, we can access these pictures with the relative path method ✔ */}
        <Logo src="./images/logo.png"></Logo>
        <div>
          <Button color="#A62440">Apply Courses</Button>
          <Button bg="#A62440">Talk to Advisor</Button>
        </div>
      </Nav>
    </StyledHeader>
  );
};

export default Header;
