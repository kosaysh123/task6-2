import "../ARRIVALS/ARRIVALS.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import img1 from "../ARRIVALS/img/2.jpg"
import img2 from "../ARRIVALS/img/3.jpg"
import img3 from "../ARRIVALS/img/4.webp"
import img4 from "../ARRIVALS/img/5.webp"

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
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
      <div className="All-Card">
        <Slider {...settings}>
          <div>
            <div className="product-card">
              <img src={img1} alt="" />
              <h2> Happy Home</h2>
              <p>track your information when you visit our site. But in order to comply with your preferences,
                 we'll have to use just one tiny cookie so that you're </p>
              <button>Add To Card </button>
            </div>
          </div>
          <div>
            <div className="product-card">
              <img src={img2} alt="" />
              <h2>Smart Shopper</h2>
              <p>track your information when you visit our site. But in order to comply with your preferences,
                 we'll have to use just one tiny cookie so that you're</p>
              <button>Add To Card </button>
            </div>
          </div>
          <div>
            <div className="product-card">
              <img src={img3} alt="" />
              <h2>Global Center</h2>
              <p>track your information when you visit our site. But in order to comply with your preferences,
                 we'll have to use just one tiny cookie so that you're</p>
              <button>Add To Card </button>
            </div>
          </div>
          <div>
          <div className="product-card">
              <img src={img4} alt="" />
              <h2>Global Center</h2>
              <p>track your information when you visit our site. But in order to comply with your preferences,
                 we'll have to use just one tiny cookie so that you're</p>
              <button>Add To Card </button>
            </div>
          </div>
          <div>
          <div className="product-card">
              <img src={img2} alt="" />
              <h2>Global Center</h2>
              <p>track your information when you visit our site. But in order to comply with your preferences,
                 we'll have to use just one tiny cookie so that you're</p>
              <button>Add To Card </button>
            </div>
          </div>
          <div>
          <div className="product-card">
              <img src={img1} alt="" />
              <h2>Global Center</h2>
              <p>track your information when you visit our site. But in order to comply with your preferences,
                 we'll have to use just one tiny cookie so that you're</p>
              <button>Add To Card </button>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
