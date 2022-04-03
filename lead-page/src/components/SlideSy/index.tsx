import { Container, Image, Title, Header, Details, Div } from "./styles";
import app from "../../services/api";
import icon from "../../images/patt.png";
import CardSystems from "../CardSystems";
import { useEffect, useState } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import photo from "../../images/pic.card.png";

export default function SlideSy() {
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
        <Title>
          {" "}
          Nossos <strong>Sistemas</strong>
        </Title>
        <Details>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Details>
      </Header>
      <Div>
        <Slider {...settings}>
          {loadData?.map((item: any) => {
            return <CardSystems key='CardSystem' title={item?.title} details={item?.body} image={photo} />;
          })}
        </Slider>
      </Div>
    </Container>
  );
}
