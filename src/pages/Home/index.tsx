import styled from "styled-components";
import { Gallery } from "../../components/gallery";
import { Header } from "../../components/header";
import { Servicos } from "../../components/servicos";

const Home = () => {
  return (
    <>
      <Header />
      <Main>
        <Servicos />
        <Gallery/>
      </Main>
    </>
  );
};

const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 40px;
`

export { Home };
