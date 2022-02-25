import React from "react";
import { Link } from "react-router-dom";

function DrinkingBuddies(){

    return (
        <div className="TaskWrapper">
            <div className="Task">

                <h1>Drinking Buddies</h1>

                <img src="https://c.tenor.com/KE66yao1fi0AAAAC/cheers-beer.gif" />
                <p className="description">
                    <i>"Die Geschmacksnerven sind angespannt, wenn einem der Gaumenkitzel übermannt."</i>
                    <br /><br />
                    <h3>Bestellt eine Runde Bier und lasst euch einen Glasuntersetzer vom Barkeeper unterschreiben. Macht ein Selfie/Bild von der Gruppe inkl. Glasuntersetzer und natürlich dem Barkeeper.
                    Cheers!</h3>
                    <br />
                    <i>Das Bild dann einfach im Chat posten.</i>
                    <br /><br />

                    Während ihr euch entspannt gibt es noch Zusatzpunkte mit zwei Schätzfragen zu holen. Die Lösungen könnt ihr einfach in den Chat posten.
                    <br /><br />

                    <b>Was war die durchschnittliche Bier-Konsumation pro Person über die letzte Pivo Samstig Reise verteilt?</b>
                    <br /><br />

                    <b>Auf welchem Platz landete das Team "Pro Mille - Häfi / Sam" auf der nationalen Rangliste der Schweizer Beerpong League?</b>
                    <br /><br />
                    
                    Behaltet die Zeit im Auge, es gibt noch mehr zu tun.
                    <br />
                    Sobald das Bild gepostet ist, drückt auf Weiter.
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

export {DrinkingBuddies}