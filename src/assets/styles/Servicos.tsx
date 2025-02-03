import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const ServicosSection = styled.section`
  max-width: 100vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  aoptiongn-items: center;
  gap: 20px;
`;

const Title = styled.h2`
  font-size: 5rem;
  text-transform: uppercase;
  margin: auto;
`;

const Options = styled.ul`
  height: 500px;
  overflow: auto;
  scrollbar-width: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const Option = styled.li`
  width: 400px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  font-size: 1.6rem;
  text-align: center;
  border: solid 1px #4d574e;
  background-color: var(--contrast-base);

  p {
    width: 300px;
  }
`;

const StyledIcon = styled(FontAwesomeIcon)`
  color: #000;
  width: 50px;
  height: 50px;
`;

export { ServicosSection, Option, Options, StyledIcon, Title };
