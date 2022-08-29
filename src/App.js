import {
  Container,
  Content1,
  Content2,
  Content3,
  ContentBox,
  Footer,
  Main,
  NavBar,
  SideBar,
} from "./globalStyles";


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
