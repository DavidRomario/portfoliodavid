import { FaArrowRight } from "react-icons/fa";
import {
  Container,
  Content,
  Infos,
  Name,
  Function,
  Intro,
  LinkProjects,
  Logo,
  Img,
} from "../../styles/indexStyle.jsx";
import Link from "next/link";

export default function Home() {
  return (
    <Container>
      <Content>
        <Infos>
          <Name>Olá, sou David Romario</Name>
          <Function>FullStack Developer</Function>
          <Intro>
            Cursando Segurança da Informação, com experiencia em React, Angular,
            Node, JS, TS, mobile e outros.
          </Intro>
          <Link href="projects">
            <LinkProjects>
              PROJETOS <FaArrowRight />
            </LinkProjects>
          </Link>
        </Infos>
        <Logo>
          <Img src="/images/image.jpg" alt="logo" />
        </Logo>
      </Content>
    </Container>
  );
}
