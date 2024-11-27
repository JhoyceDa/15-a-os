import { useRef } from "react";
import './modal.css'
import ves from '../assets/ico-ter.webp'
import ter from '../assets/ico-ves.webp'
const Modal = () => {
    const dialogRef = useRef<any>(null);

    const openDialog = () => {
        dialogRef.current.showModal();
    };

    const closeDialog = () => {
        dialogRef.current.close();
    };

    return (
        <div className="content-modal">
            < div className="wrapper">
                <button className="buton-aceptar" onClick={openDialog}>
                    Datos
                </button>
            </div>

            <dialog className="my-dialog" ref={dialogRef}>
                <p className="datos">Fecha: <span>30 de noviembre.</span></p>
                <p className="datos">Hora: <span>6:30 pm</span></p>
                <p className="datos">Ubicación: <span>Auditorio de I.E. María Auxiliadora</span></p>
                <p className="datos">Vestimenta: <span>Formal</span></p>
                <div className="content-ves">
                    <img className="img-ves" src={ter} />
                    <img className="img-ves" src={ves} />

                </div>
                <p className="final">No Faltez!</p>

                <button className="buton-aceptar" onClick={closeDialog}>Cerrar</button>
            </dialog>
        </div>
    );
}

export default Modal;