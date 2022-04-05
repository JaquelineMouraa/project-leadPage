import { Container, Image, Title, Header, Details, Div } from "./styles";
import app from "../../services/api";
import icon from "../../images/patt.png";

import { useEffect, useState } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardNews from "../CardNews";

import photo from "../../images/img2.jpeg";

export default function SlideNews() {
  const [loadData, setLoadData] = useState([]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  useEffect(() => {
    async function getData() {
      const response = await app.get(`/posts`);
      setLoadData(response.data);
    }
    getData();
  }, []);

  return (
    <Container>
      <Header>
        <Image src={icon}></Image>
        <Title>Novidades</Title>
        <Details>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Details>
      </Header>
      <Div>
        <Slider {...settings}>
          <CardNews
            key=""
            image={photo}
            title="Titulo 1"
            details="Detalhes DetalhesDetalhes Detalhes Detalhes DetalhesDetalhesDetalhes"
            date="31.12.2022"
          />

          <CardNews
            key=""
            image={photo}
            title="Titulo 1"
            details="Detalhes DetalhesDetalhes Detalhes Detalhes DetalhesDetalhesDetalhes"
            date="31.12.2022"
          />

          <CardNews
            key=""
            image={photo}
            title="Titulo 1"
            details="Detalhes DetalhesDetalhes Detalhes Detalhes DetalhesDetalhesDetalhes"
            date="31.12.2022"
          />

          <CardNews
            key=""
            image={photo}
            title="Titulo 1"
            details="Detalhes DetalhesDetalhes Detalhes Detalhes DetalhesDetalhesDetalhes"
            date="31.12.2022"
          />

          <CardNews
            key=""
            image={photo}
            title="Titulo 1"
            details="Detalhes DetalhesDetalhes Detalhes Detalhes DetalhesDetalhesDetalhes"
            date="31.12.2022"
          />

          <CardNews
            key=""
            image={photo}
            title="Titulo 1"
            details="Detalhes DetalhesDetalhes Detalhes Detalhes DetalhesDetalhesDetalhes"
            date="31.12.2022"
          />

          <CardNews
            key=""
            image={photo}
            title="Titulo 1"
            details="Detalhes DetalhesDetalhes Detalhes Detalhes DetalhesDetalhesDetalhes"
            date="31.12.2022"
          />
        </Slider>
      </Div>
    </Container>
  );
}
