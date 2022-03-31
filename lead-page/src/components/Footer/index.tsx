import { Container, Content, Infos, Image, Div, Text, TextAdress } from "./styles";

import icon from "../../images/patt.png";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";


export default function Footer() {
  return (
    <Container>
      <Content>
        <Image src={icon}></Image>
        <Div>
          <Text>VP nas redes sociais: </Text>
          <FaFacebookSquare
            style={{ width: "20px", height: "20px", margin: "0 10px 0 10px" }}
          />
          <FaInstagramSquare style={{ width: "20px", height: "20px" }} />
        </Div>
      </Content>
      <Infos>
        <TextAdress>
          VIAGENS PROMO EIRELI CNPJ: 05.008.876/0001-06 - Endereço: Av.
          Ibirapuera, 2033 - Cj 192, Moema, CEP. 040029-100, São Paulo - SP,
          Brasil. ViagensPromo{" "}
          <AiOutlineCopyrightCircle style={{ width: "10px", height: "10px" }} />{" "}
          Copyright 2022{" "}
        </TextAdress>
      </Infos>
    </Container>
  );
}
