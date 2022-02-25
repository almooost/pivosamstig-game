import React from "react";
import { Link } from "react-router-dom";

function ReiseReise2(){

    return (
        <div className="TaskWrapper">
            <div className="Task">

                <h1>Reise Reise, Seemannsreise</h1>

                <img src="https://c.tenor.com/2iti_N6MuuoAAAAC/rammstein-till.gif" />
            
                <p className="description">
                    Reise Reise ja, aber aufs Schiff müsst ihr heute nicht, für das ist zu wenig Zeit und etwas zu kalt.<br />
                    Begebt euch zum nächsten <a href="https://goo.gl/maps/UjJe119CKg6KL2Vv5" target="_blank">Spot</a>, macht dort wieder ein Bild von der Aussenansicht und postet es im Chat.
                    <br /><br />
                    Adresse:
                    Grüngasse 7<br />
                    8004 Zürich

                    <br /><br />

                    Wenn ihr noch etwas gute Musik für den Weg braucht, here you go. <a href="https://open.spotify.com/track/53yBfGozCZOAqaM16PwMKP" target="_blank">Reise Reise</a><br /><br />

                    Sobald ihr am am Ziel angekommen seit drückt den Button, dann geht es weiter.
                </p>
            </div>
            <div>
                <Link to="/Playboys">
                        <button className="btn">Pyjamas</button>
                </Link>
            </div>
        </div>
    );
}

export {ReiseReise2}