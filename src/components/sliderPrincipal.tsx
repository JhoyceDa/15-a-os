import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFlip, Pagination, Navigation, Autoplay } from 'swiper/modules';
import './slider.css'
import InfoTexto from './textoInfo';
import SliderFotos from './sliderFotos';
import Padrinos from './padrinos';

const SliderPrincipal = () => {
    return (
        <div className='content-slicer-principal'>
            <Swiper
                effect={'flip'}
                grabCursor={true}
                pagination={false}
                navigation={false}
                autoplay={{
                    delay: 6500,
                    disableOnInteraction: false,
                }}
                modules={[EffectFlip, Pagination, Autoplay, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <InfoTexto />
                </SwiperSlide>
                <SwiperSlide>
                    <SliderFotos />
                </SwiperSlide>
                <SwiperSlide>
                    <Padrinos />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default SliderPrincipal;