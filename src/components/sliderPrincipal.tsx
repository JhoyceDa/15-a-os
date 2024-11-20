import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFlip, Pagination, Navigation } from 'swiper/modules';
import SliderFotos from './sliderFotos';
import '../App.css';
import './slider.css'

const SliderPrincipal = () => {
    return (
        <div>
            <Swiper
                effect={'flip'}
                grabCursor={true}
                pagination={true}
                navigation={true}
                modules={[EffectFlip, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div>

                        <svg className="number">
                            <text className='texto-edad' x="50%" y="50%" dy=".35em" text-anchor="middle">
                                15
                            </text>
                        </svg>
                        <svg className="svg-nombre">
                            <text className='texto-nombre' x="50%" y="50%" dy=".35em" text-anchor="middle">
                                Jhaslyn Gil Soncco
                            </text>
                        </svg>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <SliderFotos />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default SliderPrincipal;