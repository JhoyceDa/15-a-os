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
            <div className="wrapper">
                <button onClick={openDialog}>
                    Datos
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
                        
            <dialog ref={dialogRef}>
                <p>Este es un cuadro de diálogo en React.</p>
                <button className="boton-cerrar" onClick={closeDialog}>Cerrar</button>
            </dialog>
        </div>
    );
}

export default Modal;