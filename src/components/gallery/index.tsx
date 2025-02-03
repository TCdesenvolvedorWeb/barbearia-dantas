import imgCorte1 from "../../assets/img/corte-1.jpg";
import imgCorte2 from "../../assets/img/corte-2.jpg";
import imgCorte3 from "../../assets/img/corte-3.jpg";
import imgCorte4 from "../../assets/img/corte-4.jpg";
import imgCorte5 from "../../assets/img/corte-5.jpg";
import imgCorte6 from "../../assets/img/corte-6.jpg";
import { ContainerPhotos, Ilustration , Title} from "../../assets/styles/Gallery";

const Gallery = () => {
  return (
    <>
      <Title> Galeria </Title>

      <ContainerPhotos>
        <li>
          <Ilustration src={imgCorte1} alt="Corte degradê" />
        </li>
        <li>
          <Ilustration src={imgCorte2} alt="Corte degradê" />
        </li>
        <li>
          <Ilustration src={imgCorte3} alt="Corte degradê" />
        </li>
        <li>
          <Ilustration src={imgCorte4} alt="Corte degradê" />
        </li>
        <li>
          <Ilustration src={imgCorte5} alt="Corte degradê" />
        </li>
        <li>
          <Ilustration src={imgCorte6} alt="Corte degradê" />
        </li>
      </ContainerPhotos>
    </>
  );
};

export { Gallery };