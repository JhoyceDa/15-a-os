import './App.css'
import ParticlesComponent from './components/particles';
import Reloj from './components/reloj';
import useSound from 'use-sound';
import luces from './assets/lucesFondo.png'
import boopSfx from './assets/musica.mp3';



function App() {
  ParticlesComponent()
  const [play] = useSound(boopSfx);
  play()
  return (
    <>
      <canvas />
      <div className="container-inv">
      <img className="lucesFondo" src={luces} />
        <div className='sectio-texto'>
          <p className="titulo">Quinceañera</p>
          <svg className="number">
            <text className='texto-edad' x="50%" y="50%" dy=".35em" text-anchor="middle">
              15
            </text>
          </svg>
          <svg className="svg-nombre">
            <text className='texto-nombre' x="50%" y="50%" dy=".35em" text-anchor="middle">
              Jhasly Gil Soncco
            </text>
          </svg>
          <p className="texto-largo">
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
