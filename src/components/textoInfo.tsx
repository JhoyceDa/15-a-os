import { TypeAnimation } from 'react-type-animation';
import './infoTexto.css'

const InfoTexto = () => {
    return (
        <div className='content-slider-principal'>
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

            <TypeAnimation
                splitter={(str) => str.split(/(?= )/)}
                sequence={[
                    'Hay momentos inolvidables que se atesoran en el corazón para siempre, por esa razón quiero que compartas conmigo este día tan especial.',
                    1000,
                ]}
                
                speed={{ type: 'keyStrokeDelayInMs', value: 99 }}
                omitDeletionAnimation={true}
                style={{  }}
                repeat={Infinity}
            />
        </div>
    )
}

export default InfoTexto;