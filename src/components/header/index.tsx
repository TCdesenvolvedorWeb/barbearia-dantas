import logoLight from "../../assets/img/barbearia-dantas-1.png";
import { Agendar, HeaderPage, Logo, Menu, Options } from "../../assets/styles/Header";

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

export { Header };