import styled from "styled-components";

const Appointments = () => {
  return (
    <AppointmentsContainer>
      <Title> Horários disponiveis </Title>
      <ol>
        <li>
          <Day>
            Segunda-feira <strong>8h às 12h - 15h às 19h</strong>
          </Day>
        </li>
        <li>
          <Day>
            Terça-feira <strong>8h às 12h - 15h às 19h</strong>
          </Day>
        </li>
        <li>
          <Day>
            Quarta-feira <strong>8h às 12h - 15h às 19h</strong>
          </Day>
        </li>
        <li>
          <Day>
            Quinta-feira <strong>8h às 12h - 15h às 19h</strong>
          </Day>
        </li>
        <li>
          <Day>
            Sexta-feira <strong>8h às 12h - 15h às 19h</strong>
          </Day>
        </li>
        <li>
          <Day>
            Sabado <strong>8h às 12h - 15h às 19h</strong>
          </Day>
        </li>
      </ol>
    </AppointmentsContainer>
  );
};

const AppointmentsContainer = styled.section`
  margin: 40px 0;
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  flex-direction: column;

`;

const Title = styled.h2`
  font-size: 5rem;
`;

const Day = styled.h3`
  width: 400px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: solid 1px var(--details-color);
  margin-bottom: 10px;
  font-size: 2.4rem;
  border-radius: 5px;
  padding: 0 10px;

  strong {
    font-size: 1.4rem;
    color: green;
  }
`;

export { Appointments };
