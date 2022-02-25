import { Link } from "react-router-dom";

function Home2(){
    return (
        <div className="Home">
            <h1>Willkommen beim der ersten offiziellen Pivo Samstig Games</h1>
            <p>
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

                WICHTIG: Behaltet die Zeit im Auge, um <b>spätestens</b> 16.15 Uhr müsst ihr spätestens am Ziel sein.
                <br />
                <br />

                Viel Spass!
            </p>

            <div>
            <Link
                to="/thebeginning2"
                >
                    <button className="btn">Start</button>
            </Link>
            </div>
        </div>
    )
}

export {Home2};