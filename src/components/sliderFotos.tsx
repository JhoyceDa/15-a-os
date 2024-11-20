import img2 from '../assets/img2.jpeg';
import img3 from '../assets/img3.jpeg';
import '../App.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';

const SliderFotos = () => {
    return (
        <div className='content-slider'>
            <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
            >                
                <SwiperSlide><img className='fotos' src={img2} alt="Imagen 2" /></SwiperSlide>
                <SwiperSlide><img className='fotos' src={img3} alt="Imagen 3" /></SwiperSlide>
            </Swiper>
        </div>
    );
}

export default SliderFotos;