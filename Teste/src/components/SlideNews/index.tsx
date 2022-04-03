import { Container, Image, Title, Header, Details, Div } from "./styles";

import CardNews from "../CardNews";
import app from "../../services/api";
import icon from "../../images/patt.png";
import photo from "../../images/pic.card.png";
import { useEffect, useState } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SlideNews() {
  const [loadData, setLoadData] = useState([]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 3,
    centerMode: true,
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
        <Title> Novidades </Title>
        <Details>
          A campanha estimula a retomada de viagens por meio de novas
          experiencias e novos destinos
        </Details>
      </Header>
      <Div>
        <Slider {...settings}>
          {/* {loadData?.map((item: any) => {
              return (
                <CardNews
                  key={item?.id}
                  image={photo}
                  title={item?.title} 
                  details={item?.body}
                  date="31.12.2022"
                />
              );
            })} */}

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
