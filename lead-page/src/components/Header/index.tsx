import { Container, Content, Image, Infos, Div, Details, ContainerSlider } from "./styles";

import Slider from "react-slick";
import app from "../../services/api";
import { useEffect, useState } from "react";
import photo from "../../images/pic.card.png";
import { RiSendPlaneFill } from "react-icons/ri";
import { BsFillTelephoneFill } from "react-icons/bs";

export function Header() {
  const [loadData, setLoadData] = useState([]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
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
    <>
      <Container>
        <Content>
          <Infos>
            <Div>
              <strong> CÂMBIO </strong>
              <Details>01 DE OUT 2021 </Details>
              <Details>$1 USD-BRA = R$ 5,66 </Details>
              <Details>$1 EUR-BRA = R$ 6,56 </Details>
            </Div>
            <Div>
              <BsFillTelephoneFill style={{ width: "15px", height: "15px" }} />
              <Details>4000.1798 </Details>
              <RiSendPlaneFill
                style={{ width: "15px", height: "15px", marginLeft: "10px" }}
              />
              <Details>99999.9999 </Details>
            </Div>
          </Infos>
          </Content>
          <ContainerSlider>
          <Slider {...settings}>
            {loadData?.map((item: any) => {
              return (
                <Image src={ photo}></Image>
              );
            })}
          </Slider>
          </ContainerSlider>
      </Container>
    </>
  );
}
