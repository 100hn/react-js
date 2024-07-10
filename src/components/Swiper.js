import { Swiper, SwiperSlide } from 'swiper/react';
import image1 from '../components/Image/Banner-1.jpg';
import image2 from '../components/Image/Banner-2.jpg';
import image3 from '../components/Image/Banner-3.jpg';
import image4 from '../components/Image/Resolute-UI-Banner-1.jpg';
import {  Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


export default () => {
  return (
    <Swiper
    modules={[ Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay= {{
        delay:1000,
        disableOnInteraction:false,
      }}
      loop={true}
      speed={1000}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      pagination={{ clickable: true }}
      
    >
      <SwiperSlide>
        <div className="relative h-full w-full">
          <img
            src={image1}
            alt="Slide 1"
            className=" w-full md:h-[700px] object-cover"
          />
          <div className="absolute max-w-[1300px] mx-auto md:left-[8%] top-1/2 -translate-y-1/2 p-6 text-white">
            <h2 className="md:text-4xl font-bold text-xl mb-2 uppercase">Fueling Innovation, <br />Empowering <br />Tomorrow</h2>
            {/* <a href='/Pitch'>
            <button className='bg-[#0F4769] hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mt-3 uppercase'>contact us</button>
            </a> */}
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative h-full w-full">
          <img
            src={image2}
            alt="Slide 2"
            className="w-full md:h-[700px]"
          />
          <div className="absolute md:left-[9%] top-1/2 -translate-y-1/2 p-6 text-white">
            <h2 className="md:text-4xl font-bold mb-2 text-xl uppercase">Progress is<br/> vitality</h2>
            
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative h-full w-full">
          <img
            src={image3}
            alt="Slide 3"
            className="w-full md:h-[700px]"
          />
          <div className="absolute md:left-[9%] top-1/2 -translate-y-1/2 p-6 text-white">
            <h2 className="md:text-4xl font-bold mb-2 text-xl uppercase">Powering <br/>Possibilities,<br />Shaping Futures</h2>
            
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative h-full w-full">
          <img
            src={image4}
            alt="Slide 4"
            className="w-full md:h-[700px]"
          />
          <div className="absolute md:left-[9%] top-1/2 -translate-y-1/2 p-6 text-[#0E4669]">
            <h2 className="md:text-4xl font-bold mb-2 text-xl uppercase">Unleashing Excellence,<br />One Victory at a Time</h2>
            
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};