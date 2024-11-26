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
import Modal from './components/modal';

function App() {
  const [play] = useSound(boopSfx);
  const [width, setWidth] = useState(window.innerWidth);
  const [isPlaying, setIsPlaying] = useState(false);

  const valor = window.location.search
  const result = new URLSearchParams(valor)
  const nombre = result.get('name')
  console.log(nombre?.replace('-', ' '))

  useEffect(() => {
    play()
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [play]);

  const handleInteraction = () => {
    if (!isPlaying) {
      setIsPlaying(true);
    }
  };

  ParticlesComponent()
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
      />
      <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
      <canvas />
      {isPlaying ?
        <div className="container-inv">
          <img className="lucesFondo" src={luces} />
          <div className='sectio-texto'>
            <p className="titulo">Quinceañera</p>
            {width <= 1500 ? <SliderPrincipal /> : <InfoTexto />}
          </div>
          <div className='section-hora'>
            {width >= 1500 && <SliderFotos />}
            <div className='section-modal'>
              <p className="titulo-hora">Comienza en:</p>
              <Modal />
            </div>
            <Reloj />
          </div>
        </div>
        :
        <div className="section-name-persona">
          <img className="lucesFondo" src={luces} />
          <p className='nombre-invitado'><span>Invitación para: </span>{nombre ? nombre.replace('-', ' ') : 'Mi Fiestade 15 Años'}</p>
          <div className='wrapp'>
            <button className='button' onClick={handleInteraction}>Abrir</button>
          </div>
        </div>
      }


    </>
  );

}

export default App
