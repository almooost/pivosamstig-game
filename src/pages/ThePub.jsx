import React from "react";
import { Link } from "react-router-dom";

function ThePub(){

    return (
        <div className="TaskWrapper">
            <div className="Task">

                <h1>The Pub</h1>
                <p className="description">
                Genau, die Gruppe wollte sich im Papa Joe's kurz aufwärmen und etwas "kleines" trinken. Aus den ausgeschriebenen 1.5h Foxtrail wurden schlussendlich etwa 4h.
                <br /><br />
                Ob ihrs glaubt oder nicht. Das Ziel haben wir erreicht!
                </p>

                <p className="description">
                    <b>
                        <a href="https://goo.gl/maps/KEzG7AAVXEa9o8iz9" target="_blank">Hier</a> findet ihr euer nächstes Ziel.
                    </b><br /><br/>
                    Adresse:<br />
                    Rindermarkt 6<br />
                    8001 Zürich
                    <br /><br />
                    <br /><br />

                    Wenn ihr denkt, am richtigen Ort angekommen zu sein, <b>schickt ein Bild der Frontansicht in den Chat</b>.
                    <br /><br />
                    Sobald ihr am Ziel angekommen seit gilt: “Die Geschmacksnerven sind angespannt, wenn einem der Gaumenkitzel übermannt”.

                    Bestellt eine Runde Getränke/Bier und lasst euch einen Glasuntersetzer vom Barkeeper unterschreiben. Macht ein Selfie/Bild von der Gruppe, dem unterschriebenen Glasuntersetzer und natürlich dem Barkeeper.
                    <b>Cheers</b>!
                    <br /><br />

                    Während ihr euch entspannt gibt es noch Zusatzpunkte mit zwei Schätzfragen zu holen. Die Lösung könnt ihr einfach in den Chat posten.
                    <br /><br />

                    <b>Was war die durchschnittliche Bier-Konsumation pro Person über die letzte Pivo Samstig Reise verteilt?</b>
                    <br /><br />

                    <b>Auf welchem Platz landete das Team "Pro Mille - Häfi / Sam" auf der nationalen Rangliste der Schweizer Beerpong League?</b>
                    <br /><br />


                    Behaltet die Zeit im Auge, es gibt noch mehr zu tun.
                    <br />
                    Sobald ihr Ready seit, drückt auf Weiter.
                </p>
            </div>

            <div>
                <Link to="/OldTraditions">
                    <button className="btn">Weiter</button>
                </Link>
            </div>
        </div>
    );
}

export {ThePub}