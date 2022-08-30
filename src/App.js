import { ThemeProvider } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Content1 } from "./components/Content1/Content1.elements";
import { Content2 } from "./components/Content2/Content2.elements";
import { Content3 } from "./components/Content3/Content3.elements";
import { ContentBox } from "./components/ContentBox/ContentBox.elements";
import { Footer } from "./components/Footer/Footer.elements";
import { Main } from "./components/Main/Main.elements";
import NavBar from "./components/NavBar/NavBar";
import { SideBar } from "./components/SideBar/SideBar.elements";
import GlobalStyle, { ContainerGlobal } from "./globalStyles";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Connexion from "./pages/Connexion";
import Basket from "./pages/Basket";

const theme = {
  colors: {
    GlobalStyle: "black",
    NavBar: "#29323c",
    body: "#E8E8E8",
    Catalogue: "#2980b9",
    Footer: "#29323c",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />
        <ContainerGlobal>
          <NavBar>
            <Routes>
              <Route path="/" element={Home} exact />
              <Route path="/contact" element={Contact} />
              <Route path="/connexion" element={Connexion} />
              <Route path="/basket" element={Basket} />
            </Routes>
          </NavBar>
          <Main />
          <SideBar />
          <ContentBox>
            <Content1 />
            <Content2 />
            <Content3 />
          </ContentBox>
          <Footer />
        </ContainerGlobal>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
