import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay} from 'swiper';

import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"


// install Swiper modules
SwiperCore.use([Autoplay,Pagination,Navigation]);

export default () => {
  return (
    <>
  <div className="swiperHeading">
    <h2 className="swiperHeading__heading">Rethinking Trust.</h2>
</div>
    <Swiper spaceBetween={30} centeredSlides={true} 
    autoplay={{
  "delay": 2000,
  "disableOnInteraction": false
}} 

pagination={{
  "clickable": true
}} 

navigation={true} 
className="mySwiper">



  <SwiperSlide>
    <h3 className="slideHeading">
    Find out how to use HomeBuddy Calculator for better results.
    </h3>
    <button className="swiperButton">Learn More</button>
  </SwiperSlide>

  <SwiperSlide>
  <h3 className="slideHeading">
    Don't know where or how to get income confirmation documents?
  </h3>
  <button className="swiperButton">Learn More</button>
  </SwiperSlide>

  <SwiperSlide>
  <h3 className="slideHeading">
   How do credit cards with $0 balance effect your mortgage?
  </h3>
  <button className="swiperButton">Learn More</button>
  </SwiperSlide>

  <SwiperSlide>
  <h3 className="slideHeading">
  Fixed vs Variable Rate
  </h3>
  <button className="swiperButton">Learn More</button>
  </SwiperSlide>

  </Swiper>
    </>
  );
};