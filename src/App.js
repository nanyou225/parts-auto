import { Content1 } from "./components/Content1/Content1.elements";
import { Content2 } from "./components/Content2/Content2.elements";
import { Content3 } from "./components/Content3/Content3.elements";
import { ContentBox } from "./components/ContentBox/ContentBox.elements";
import { Footer } from "./components/Footer/Footer.elements";
import { Main } from "./components/Main/Main.elements";
import { NavBar } from "./components/NavBar/NavBar.elements";
import { SideBar } from "./components/SideBar/SideBar.elements";
import { Container } from "./globalStyles";

function App() {
  return (
    <Container>
      <NavBar>NavBar</NavBar>
      <Main>Main</Main>
      <SideBar>SideBar</SideBar>
      <ContentBox>
        <Content1>Content1</Content1>
        <Content2>Content2</Content2>
        <Content3>Content3</Content3>
      </ContentBox>
      <Footer>Footer</Footer>
    </Container>
  );
}

export default App;
