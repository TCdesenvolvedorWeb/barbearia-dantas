import {
  faBaby,
  faBrush,
  faEye,
  faScissors,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
// import imgServicos from "../../assets/img/servicos.jpg";

const Servicos = () => {
  return (
    <ServicosSection>
      <Options>
        <Option>
          <StyledIcon icon={faScissors} />

          <h2> Corte degradê</h2>
          <p>
            Proporciona um visual moderno e estiloso, com um acabamento gradual
            que valoriza o rosto.
          </p>
        </Option>
        <Option>
          <StyledIcon icon={faUserTie} />
          <h2> Corte social </h2>
          <p>
            Clássico e versátil, ideal para um visual elegante e profissional no
            dia a dia.
          </p>
        </Option>
        <Option>
          <StyledIcon className="icon" icon={faBaby} />
          <h2> Corte infantil </h2>
          <p>
            Feito com cuidado e paciência para garantir conforto e um estilo
            adequado para crianças.
          </p>
        </Option>
        <Option>
          <StyledIcon icon={faScissors} />
          <h2> Barba </h2>
          <p>
            Mantém o rosto bem aOptionnhado e desenhado, realçando a expressão e
            proporcionando um ar mais sofisticado.
          </p>
        </Option>
        <Option>

            <StyledIcon icon={faEye}/>
          <h2> Sobrancelha </h2>
          <p>
            Realça o olhar, harmoniza a expressão facial e dá um toque de
            cuidado pessoal.
          </p>
        </Option>
        <Option>
          <StyledIcon icon={faBrush} />
          <h2> Luzes </h2>
          <p>
            Iluminam o cabelo, trazendo um visual moderno e cheio de
            personaOptiondade.
          </p>
        </Option>
        <Option>
          <StyledIcon icon={faBrush} />
          <h2> Platinado </h2>
          <p>
            Destaca o estilo com um tom ousado e sofisticado, exigindo técnica e
            manutenção adequada.
          </p>
        </Option>
      </Options>

      {/* <ServicosPrice src={imgServicos} alt="Tabela de serviços e valores" /> */}
    </ServicosSection>
  );
};

const ServicosSection = styled.section`
  width: 100vw;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  aoptiongn-items: center;
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
  border: solid 1px #4D574E;
  background-color: var(--contrast-base);
  
  p{
    width: 300px;
  }
`;

const StyledIcon = styled(FontAwesomeIcon)`
  color: #000;
  width: 50px;
  height: 50px;
`;

// const ServicosPrice = styled.img`
//   width: 300px;
// `;

export { Servicos };
