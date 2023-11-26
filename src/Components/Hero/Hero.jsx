import NavBar from "../NavBar/NavBar";
import Grid from "../SubComponents/Grid";
// import Atropos from "atropos/react";
// import "atropos/css";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const Hero = () => {
  return (
    <div >
        {/* className="bg-[#F9F9F9]" */}
        <NavBar />
        <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide><Grid /></SwiperSlide>
        <SwiperSlide><Grid /></SwiperSlide>
       
      </Swiper>
     
    
    
 
    </div>
  );
};

export default Hero;
