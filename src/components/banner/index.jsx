/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/style-prop-object */
import React, { Component } from "react";
import Slider from "react-slick";
import { Container, Col, Row } from "react-bootstrap";
import banner from "./imagies/banner.png";
import bannerr from "./imagies/banner1.png";
import bannerrr from "./imagies/banner2.png";
import "./Banner.scss";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      adaptiveHeight: true,
      autoplaySpeed: 2000,
      autoplay: true,
      variableWidth: true,
      accessibility: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div>
        <Slider {...settings}>
          <div className="banner">
            <img src={banner} class="img-fluid" alt="/" fluid />
          </div>
          <div className="banner">
            <img src={bannerr} class="img-fluid" alt="/" fluid />
          </div>
          <div className="banner">
            <img src={bannerrr} class="img-fluid" alt="/" fluid />
          </div>
        </Slider>
        <Container fluid>
          <Row className="bannerrow align-items-center justify-content-center">
            <Col className="bannercol">1 of 3</Col>
            <Col className="bannercoll">2 of 3</Col>
            <Col className="bannercol">3 of 3</Col>
          </Row>
        </Container>
      </div>
    );
  }
}

// /* eslint-disable jsx-a11y/img-redundant-alt */
// /* eslint-disable react/jsx-no-comment-textnodes */
// import React from "react";
// import banner from "./imagies/banner.jpeg";
// //import bannerr from "./imagies/banner1.jpeg";
// //import bannerrr from "./imagies/banner2.jpeg";
// import { Swiper, SwiperSlide } from "swiper/react";
// //import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
// import "swiper/swiper-bundle.min.css";
// // import "swiper/swiper.min.css";
// import "swiper/swiper-bundle.min.css";
// import "swiper/swiper.scss";
// function index() {
//   return (
//     <Swiper
//       spaceBetween={1}
//       slidesPerView={2}
//       onSlideChange={() => console.log("slide change")}
//       onSwiper={(swiper) => console.log(swiper)}
//     >
//       <SwiperSlide>
//         <img src={banner} alt="Image 1" />
//       </SwiperSlide>
//       <SwiperSlide>
//         {" "}
//         <img src={banner} alt="Image 1" />
//       </SwiperSlide>
//       <SwiperSlide>
//         {" "}
//         <img src={banner} alt="Image 1" />
//       </SwiperSlide>
//       ...
//     </Swiper>
//   );
// }

// export default index;
