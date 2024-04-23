import React from "react";
import { Container, Content } from "./style";
import { FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";
import ItemContact from "../../../components/ItemContact";

export default function Contact() {
  return (
    <Container>
      <Content>
        <a href="https://www.linkedin.com/in/davidromario/"></a>
        <ItemContact
          IconFa={FaLinkedin}
          LinkContact="https://www.linkedin.com/in/davidromario/"
        />
        <ItemContact
          IconFa={FaGithub}
          LinkContact={"https://github.com/DavidRomario"}
        />
        <ItemContact
          IconFa={FaEnvelope}
          LinkContact="romario.david1997@gmail.com"
        />
      </Content>
    </Container>
  );
}
