import React from "react";

import styled from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper.scss';

import { Link } from "react-router-dom";

const Styles = styled.div`
.img1 {
  background-image: url("images/homepage/header/jacketa.jpg");
  width: 100vw;
  height: 90vh;
  background:cover;
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y:40%;

}

.img2 {
  background-image: url("images/homepage/header/wjacketa.jpg");
  width: 100vw;
  height: 90vh;  
  background:cover;
  background-repeat: no-repeat;
  background-size: cover;

  
}

.buttons {
  display: flex;
  justify-content: space-around;
  height:90vh;
  align-items:center;
}
.button {
  text-decoration:none;
  text-align:center;
  background: lightgrey;
  color: black;
  font-size:16px;
  width: 150px;
  padding:10px;
  border-radius: 5px;
}

.img2title {
    font-size: 32px;
    color: white;
    display: flex;
  justify-content: space-around;
  height:90vh;
  align-items:center;
  text-align:center;
}

.img3 {
  background-image: url("images/homepage/header/bluewhite.jpg");
  width: 100vw;
  height: 90vh;
  background:cover;
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y:30%;

}

@media only screen and (max-width: 600px) {

    .img3 {
  background-position-x:20%;
  transition: 2s ease; 
    }

    .img2title{
    padding-bottom:60vh;
    transition: 2s ease; 

}



  }

  
.comingsoon {
    margin-top: 10vh
}

.cstitle {
    text-align:center;
    font-size: 16px;
}

.csitembox {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
}

.csitem {    
}

.csitem img {
    height: 400px;
}

.csitemtext {
    text-align:center;
    font-size: 14px;

}

.brand {
    margin-top: 10vh;
    text-align: center;
}
.brand h1 {
    font-size: 32px;
    color: blueviolet;
    letter-spacing: 5px
}

.brand p {
    font-size:28px;
    color: plum;
}
`;

const Home = () => (
  <Styles>
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div className="img1">
          <div className="buttons"> 
        <Link to="/mens" className="button">
            <h4>
        SHOP MEN
        </h4>
        </Link>
        <Link to="/womens" className="button">
            <h4>
        SHOP WOMEN
        </h4>
        </Link>
          </div>
        </div>
        </SwiperSlide>
      <SwiperSlide>
        <div className="img2">
            <h1 className="img2title">THE WOMEN FALL COLLECTION HAS NOW ARRIVED AFTER HIGH DEMAND</h1>
        </div>
       </SwiperSlide>
      <SwiperSlide>
        <div className="img3">
        <h1 className="img2title">MORE TO COME... STAY TUNED... THIS WINTER</h1>
        </div>
       </SwiperSlide>
    </Swiper>

    <section className="comingsoon">
        <h1 className="cstitle">COMING SOON...</h1>
        <div className="csitembox">
        <div className='csitem'>
            <img src="images/homepage/comingsoon/mcargos.jpg"/>
            <div className="csitemtext">
                <h4>Unisex Cargos</h4>
                <p>10/26</p>
            </div>
        </div>

        <div className='csitem'>
            <img src="images/homepage/comingsoon/diorcollab.jpg"/>
            <div className="csitemtext">
                <h4>Dior x Jacoby Collab</h4>
                <p>10/26</p>
            </div>
        </div>
        </div>
    </section>

    <section className="brand">
        <h1> JACOBY FASHION</h1>
        <p>~ STRIVE FOR GREATNESS JUST LIKE JACOBY ~</p>
    </section>
  </Styles>
);

export default Home;
