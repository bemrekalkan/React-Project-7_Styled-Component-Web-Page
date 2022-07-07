import Header from "./components/Header";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/styles/Global";
import data from "./data";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Container from "./components/styles/Container.styled";

const theme = {
  colors: {
    header: "#fff",
    body: "#fff",
    footer: "#8a1c4a",
  },
  responsive: "768px",
};

const App = () => {
  return (
    //! With 🏴 <ThemeProvider> 🏴 we ensure that the created theme is distributed to all components 👇
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Container>
        {data.map((item, index) => {
          return <Card {...item} key={index} />;
        })}
      </Container>
      <Footer />
    </ThemeProvider>
  );
};
export default App;
