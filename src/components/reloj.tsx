import { useEffect, useState } from "react";
import dayjs from "dayjs";

const Reloj = () => {
    const [timeLeft, setTimeLeft] = useState(dayjs('2024-11-30 18:30').diff(dayjs(), 'second'));
    useEffect(() => {
        if (timeLeft > 0) {
            const timerId = setTimeout(() => {
                setTimeLeft((timeLeft: number) => timeLeft - 1);
            }, 1000);
            return () => clearTimeout(timerId);
        } else {
            return () => null
        }
    }, [timeLeft]);
    const seconds = timeLeft % 60;
    const minutes = Math.floor(timeLeft / 60) % 60;
    const hours = Math.floor(timeLeft / 3600); // Cambiado para calcular las horas totales restantes

    const hoursArray = String(hours).padStart(2, '0').split('');
    const minutesArray = String(minutes).padStart(2, '0').split('');
    const secondsArray = String(seconds).padStart(2, '0').split('');

    return (
        <div className="content-tiempo">            
            <div className="conten-hora">
                <div className="hora">
                    {
                        hoursArray.map((el: any) => (
                            <p className="numero-tiempo" >{el}</p>
                        ))
                    }
                </div>
                <p className="texto-hora">horas</p>
            </div>
            <p className="punto">:</p>
            <div className="conten-hora">
                <div className="hora">
                    {
                        minutesArray.map((el: any) => (
                            <p className="numero-tiempo">{el}</p>
                        ))
                    }
                </div>
                <p className="texto-hora">minutos</p>
            </div>
            <p className="punto">:</p>
            <div className="conten-hora">
                <div className="hora">
                    {
                        secondsArray.map((el: any) => (
                            <p className="numero-tiempo">{el}</p>
                        ))
                    }
                </div>
                <p className="texto-hora">segundos</p>
            </div>
        </div>
    )
}

export default Reloj;