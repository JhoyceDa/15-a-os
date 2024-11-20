import './App.css'
import ParticlesComponent from './components/particles';
import Reloj from './components/reloj';
import useSound from 'use-sound';
import luces from './assets/lucesFondo.png'
import boopSfx from './assets/musica.mp3';
import SliderPrincipal from './components/sliderPrincipal';

function App() {

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
          <SliderPrincipal />
          <p className="texto-largo" id='typedtext'>
            Hay momentos inolvidables que se atesoran en el corazón para siempre, por esa razón quiero que compartas conmigo este día tan especial.
          </p>
        </div>
        <div className='section-hora'>
          <p className="titulo-hora">Comienza en:</p>
          <Reloj />
        </div>
      </div>
    </>
  );

}

export default App
