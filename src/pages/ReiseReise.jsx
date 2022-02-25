import React from "react";
import { Link } from "react-router-dom";

function ReiseReise(){

    return (
        <div className="TaskWrapper">
            <div className="Task">

                <h1>Reise Reise, Seemannsreise</h1>
            
                <p className="description">
                    Begebt euch zum nächsten <a href="https://goo.gl/maps/3kfEe5D2U8JdLMWs8" target="_blank">Spot</a>, macht dort wieder ein Bild von der Aussenansicht und postet es im Chat.
                    <br /><br />
                    Adresse:
                    Freischützgasse 14<br />
                    8004 Zürich

                    <br /><br />

                    Wenn ihr  noch etwas gute Musik für den Weg braucht, here you go. <a href="https://open.spotify.com/track/53yBfGozCZOAqaM16PwMKP" target="_blank">Reise Reise</a><br /><br />

                    "Aller guten Ding sind...3?2?4?" Egal...<br /><br />

                    Fast geschafft, jetzt fehlt nicht mehr viel und ihr seit am Ziel angekommen. Doch, was gibt es hier an solch einem dunkeln Ort noch zu tun?
                    <br /><br />
                    Ach ja, da steht doch einer mit einem Hahn. Bittet ihn doch erst einmal um eine Runde und lasst es auch schmecken.
                    <br /><br />
                    Damit es euch während eures Aufenthaltes nicht langweilig wird, gibt es noch ein kleines Rätsel zu lösen.
                    <br /><br />
                    Versucht das Rätsel zu lösen und erstellt einen Screenshot von der Lösung und schickt ihn in den Chat.
                    <br /><br />
                    <a href="https://crosswordlabs.com/embed/pivo-samstig-games" target="_blank">Link</a> zum Rätsel: https://crosswordlabs.com/embed/pivo-samstig-games

                </p>
            </div>
            <div>
                <Link to="/backtobase">
                        <button className="btn">Back to Base</button>
                </Link>
            </div>
        </div>
    );
}

export {ReiseReise}