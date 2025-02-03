import styled from "styled-components";

const Title = styled.h2`
    font-size: 5rem;
    text-transform: uppercase;
    margin: auto;
`

const ContainerPhotos = styled.ul`
  display: flex;
  align-items: center;
  gap: 30px;
  height: 450px;
  width: 90vw;
  overflow: auto;
  margin: auto;
`;

const Ilustration = styled.img`
  width: 300px;
`;

export { Title , ContainerPhotos , Ilustration}
