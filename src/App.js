import Header from "./components/Header";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/styles/Global";

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
    </ThemeProvider>
  );
};

export default App;
