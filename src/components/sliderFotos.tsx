import img2 from '../assets/img2.jpeg';
import img3 from '../assets/img3.jpeg';
import './sliderFotos.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Mousewheel, Pagination  } from 'swiper/modules';

const SliderFotos = () => {
    return (
        <div className='content-slider'>
            <Swiper
                direction={'vertical'}
                slidesPerView={1}
                spaceBetween={30}
                mousewheel={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                }}
                modules={[Mousewheel, Pagination, Autoplay]}
                className="mySwiper2"
            >
                <SwiperSlide><img className='fotos' src={img2} alt="Imagen 2" /></SwiperSlide>
                <SwiperSlide><img className='fotos' src={img3} alt="Imagen 3" /></SwiperSlide>
            </Swiper>
        </div>
    );
}

export default SliderFotos;