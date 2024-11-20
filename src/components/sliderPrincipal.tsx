import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFlip, Pagination, Autoplay } from 'swiper/modules';
import './slider.css'
import InfoTexto from './textoInfo';
import SliderFotos from './sliderFotos';

const SliderPrincipal = () => {
    return (
        <div className='content-slicer-principal'>
            <Swiper
                effect={'flip'}
                grabCursor={false}
                pagination={false}
                navigation={false}
                autoplay={{
                    delay: 5500,
                    disableOnInteraction: false,
                }}
                modules={[EffectFlip, Pagination, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <InfoTexto />
                </SwiperSlide>
                <SwiperSlide>
                    <SliderFotos />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default SliderPrincipal;