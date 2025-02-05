import styled from "styled-components";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

const Contacts = () => {
  return (
    <Footer>
      <ul>
        <ContactsContainer>
          <FontAwesomeIcon icon={faWhatsapp} /> (84) 98143-4630
        </ContactsContainer>
        <ContactsContainer>
          <a
            href="https://www.instagram.com/barbeariadantas_?igsh=MXczbDlyMDl5Nmx4eQ=="
            target="_blank"
          >
            <FontAwesomeIcon icon={faInstagram} /> @barbeariadantas_
          </a>
        </ContactsContainer>
      </ul>

      <Developer>
        <span> Site desenvolvido por :  </span> 
        <a href="https://meu-portifolio-gamma-amber.vercel.app/" target="">
          <FontAwesomeIcon icon={faCode} /> DevTadeu
        </a>
      </Developer>
    </Footer>
  );
};

const Footer = styled.footer`
  max-width: 100vw;
  height: 70px;
  background-color: #000;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const ContactsContainer = styled.li`
  font-size: 2rem;
  text-transform: uppercase;
`;

const Developer = styled.h3`
    font-size: 1.6rem;
    color: var(--details-color);
`

export { Contacts };
