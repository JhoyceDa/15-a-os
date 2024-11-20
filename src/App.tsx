import './App.css'
import ParticlesComponent from './components/particles';
import Reloj from './components/reloj';
import useSound from 'use-sound';
import luces from './assets/lucesFondo.png'
import boopSfx from './assets/musica.mp3';
import SliderPrincipal from './components/sliderPrincipal';
import InfoTexto from './components/textoInfo';
import { useEffect, useState } from 'react';
import SliderFotos from './components/sliderFotos';


function App() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  ParticlesComponent()
  const [play] = useSound(boopSfx);
  //play() 
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
      />

      <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
      <canvas />
      <div className="container-inv">
        <img className="lucesFondo" src={luces} />
        <div className='sectio-texto'>
          <p className="titulo">Quinceañera</p>
          {width <= 700 ? <SliderPrincipal /> : <InfoTexto />}
        </div>
        <div className='section-hora'>
          {width >= 700 && <SliderFotos />}
          <p className="titulo-hora">Comienza en:</p>
          <Reloj />
        </div>
      </div>
    </>
  );

}

export default App
