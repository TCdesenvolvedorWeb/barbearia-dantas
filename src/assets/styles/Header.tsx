import styled from "styled-components";

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

export { HeaderPage, Menu, Options, Logo, Agendar };