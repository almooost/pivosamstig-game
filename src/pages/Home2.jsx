import { Link } from "react-router-dom";

const style = {
    "font-size":"5px"
};

function Home2(){
    return (
        <div className="Home">
            <h1>
                Willkommen beim den ersten offiziellen
                <br />
                <i>Pivo Samstig Games</i>
            </h1>
            <p>
                Das Spielprinzip ist ähnlich zu einer normalen Schnitzeljagd und erfordert Pivo Samstig Wissen, gutes Zeitmanagement, gute Orientierungsfähigkeit, ein Smartphone, Geselligkeit und natürlich Durst.
                <br />
                <br />

                Der Spieler entscheidet selbst über die Art und Weise der Fortbewegung, solange es im gesetzlichen Rahmen ist.
                <br />
                <i>(Nöd eifach mit 3.5‰ welle es Auto chlaue oder so seich).</i>
                <br />
                <br />
                Die digitale Kommunikation beschränkt sich rein auf den bereitgestellten Chat und darf nur innerhalb vom Team stattfinden.
                <br />
                <br />
                Keine direkte Kommunikation zum gegnerischen Team. <i>S Hilft eh nöd</i>
                <br />
                <br />
                Der Spielablauf muss eingehalten werden.
                <br />
                <br />
                Der Zeitliche Ablauf is eher knapp berechnet, also "sputet" euch.
                <br />
                <br />
                Wenn ihr durch eine Aufgabe blockiert werdet, etwas nicht funktioniert oder ihr euch verlauft, kontaktiert den Spielleiter.
                <br />
                <i style={style}>Der Alkohol-Konsum ist optional. Es dürfen auch nicht-alkoholische Getränke konsumiert werden.</i>
                <br />
                <br />

                <b>WICHTIG: Behaltet die Zeit im Auge, um <b>!!spätestens!!</b> 16.15 Uhr müsst ihr am Treffpunkt sein.</b>
                <br />
                <i style={style}>Mit dem Start und der Teilnahme werden jegliche Haftungsansprüche gegenüber dem Spielleiter abgelegt. Jeder Spieler haftet selbst für verursachte Schäden.</i>
                <br />

                Viel Spass!
            </p>

            <div>
            <Link to="/TheBeginning2">
                <button className="btn">Start</button>
            </Link>
            </div>
        </div>
    )
}

export {Home2};