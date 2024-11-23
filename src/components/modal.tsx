import { useRef } from "react";
import './modal.css'
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
                <p className="datos">Hora: <span>6:00 pm</span></p>
                <p className="datos">Ubicación: <span>Urubamba - Av. Panamericana s/n - Restaurante el Urubambino.</span></p>
                
                <button className="buton-aceptar" onClick={closeDialog}>Cerrar</button>
            </dialog>
        </div>
    );
}

export default Modal;