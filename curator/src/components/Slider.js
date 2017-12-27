
import React, { Component } from 'react';
import Slider from 'react-slick';

const BannerSlider = ({ images }) => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    if (!images) {
      return <div></div>;
    }

    const imgs = images.map((img, idx) => {
      const imgUrl = img.thumbnail.url && img.full.url;
      return (
        <div key={idx}>
          <img className='slider-img' src={img.thumbnail.url} alt=""/>
        </div>
      );
    })

    return (
      <Slider {...settings} className='text-success'>
        { imgs }
      </Slider>
    );
}

export default BannerSlider;
