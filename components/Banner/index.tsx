import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';

const Banner: FC = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        loop={true}
        navigation={true}
        modules={[Autoplay, Navigation]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://corporacionfloresac.com.pe/images/sampledata/asimages/slider/banner/banner1a.jpg"
            alt=""
            className="w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://corporacionfloresac.com.pe/images/sampledata/asimages/slider/banner/banner2a.jpg"
            alt=""
            className="w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://corporacionfloresac.com.pe/images/sampledata/asimages/slider/banner/banner3a.jpg"
            alt=""
            className="w-full"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
export default Banner;
