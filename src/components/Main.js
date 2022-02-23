import { useState } from "react";
import './Main.css';

function Main() {
    const [taskState, setTaskState] = useState('solution0');

    const handleSolution = () => {
        setTaskState('solution1');
        console.log(taskState);
    }
    return (
        <div className="Main">
            <p>
                Willkommen beim der ersten offiziellen “Pivo Samstig - Die Pivo-Jagd”
                <br/>
                <br />
                Das Spielprinzip ist ähnlich zu einer normalen Schnitzeljagd und erfordert vom Spieler Pivo(-Samstig) wissen und eine genaue Einschätzung.
                <br />
                <br />

                Spielregeln:
                Die Art und Weise wie sich die Spieler fortbewegen ist egal, muss sich aber im gesetzlichen Rahmen halten. (Nöd eifach mit 3.5‰ welle es Auto chlaue oder so seich).
                Keine direkte Kommunikation zum gegnerischen Team. (S Hilft eh nöd)
                Haltet euch an den Ablauf des Spieles und versucht nicht Aufgaben zu überspringen.
                Der Alkohol-Konsum ist optional. Es dürfen auch nicht-alkoholische Getränke konsumiert werden.
                <br />
                <br />

                WICHTIG: Behaltet die Zeit im Auge, um 16.15 Uhr müsst ihr spätestens am Ziel sein.
                <br />
                <br />

                Viel Spass!
            </p>

            <div>
                <button className='btn' onClick={ event => handleSolution(event.target.value)}>Starten</button>
            </div>
        </div>
    );
}

export default Main;
