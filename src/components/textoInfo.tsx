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
            <p className="texto-largo" id='typedtext'>
                Hay momentos inolvidables que se atesoran en el corazón para siempre, por esa razón quiero que compartas conmigo este día tan especial.
            </p>
        </div>
    )
}

export default InfoTexto;