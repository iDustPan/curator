
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
        const thumbnail = img.thumbnail ? img.thumbnail : img.full;
        const { url, width, height, format } = thumbnail;

        let media;
        if (format === 'mp4') {
            media = <video className='slider-img' src={url} autoPlay controls></video>
        }else{
            media = <img className='slider-img' src={url} alt='thumbnail'/>
        }
      return (
        <div key={idx}>
            {media}
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
