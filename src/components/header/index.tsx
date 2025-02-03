import styled from "styled-components";
import logoLight from "../../assets/img/barbearia-dantas-1.png";

const Header = () => {
  return (
    <HeaderPage>
      <Logo src={logoLight} alt="Logo Barbearia Dantas" />

      <nav>
        <Menu>
          <Options> Home </Options>
          <Options> Serviços </Options>
          <Options> Galeria </Options>
          <Options> Agendamentos </Options>
          <Options> Contatos </Options>
        </Menu>
      </nav>

      <Agendar> Agendar </Agendar>
    </HeaderPage>
  );
};

const HeaderPage = styled.header`
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;
  gap: 30px;
  font-size: 1.6rem;
  text-transform: uppercase;
`;

const Options = styled.li`
  cursor: pointer;
  
  &:hover{
    color: var(--hover-color);
  }
`

const Logo = styled.img`
  width: 100px;
`;

const Agendar = styled.button`
  width: 200px;
  height: 40px;
  background-color: var(--details-color);
  border: none;
  border-radius: 5px;
  font-size: 1.6rem;
  text-transform: uppercase;
  font-weight: bold;

  &:active{
    background-color: var(--hover-color);
  }
`;

export { Header };
