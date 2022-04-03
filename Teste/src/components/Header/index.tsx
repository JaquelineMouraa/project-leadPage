import { Content, Infos, Div, Details } from "./styles";

import Slider from "react-slick";
import app from "../../services/api";
import { useEffect, useState } from "react";
import photo from "../../images/img1.jpeg";
import { RiSendPlaneFill } from "react-icons/ri";
import { BsFillTelephoneFill } from "react-icons/bs";
import SlideNews from "../SlideNews";

import icon from "../../images/patt.png";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Controller, Thumbs } from "swiper";
import "swiper/swiper-bundle.css";
import SlideSis from "../SlideSis";
SwiperCore.use([Navigation, Pagination, Controller, Thumbs]);

export function Header() {
  const [loadData, setLoadData] = useState([]);

  const slides = [];
  slides.push(
    <>
      <SwiperSlide key="teste" tag="li">
        <img src={photo} style={{ width: "100%" }} />
      </SwiperSlide>
      <SwiperSlide key="teste" tag="li">
        <img src={photo} style={{ width: "100%" }} />
      </SwiperSlide>
      <SwiperSlide key="teste" tag="li">
        <img src={photo} style={{ width: "100%" }} />
      </SwiperSlide>

      <SwiperSlide key="teste" tag="li">
        <img src={photo} style={{ width: "100%" }} />
      </SwiperSlide>
      <SwiperSlide key="teste" tag="li">
        <img src={photo} style={{ width: "100%" }} />
      </SwiperSlide>
    </>
  );

  useEffect(() => {
    async function getData() {
      const response = await app.get(`/posts`);
      setLoadData(response.data);
    }
    getData();
  }, []);
  return (
    <>
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

        <img src={icon} />
      </Content>

      <Swiper
        id="main"
        tag="section"
        wrapperTag="ul"
        navigation
        pagination
        style={{ width: "100%" }}
        spaceBetween={0}
        slidesPerView={1}
        onInit={(swiper) => console.log("Swiper initialized!", swiper)}
        onSlideChange={(swiper) => {
          console.log("Slide index changed to: ", swiper.activeIndex);
        }}
        onReachEnd={() => console.log("Swiper end reached")}
      >
        {slides}
      </Swiper>

<SlideSis />
      <SlideNews />
    </>
  );
}
