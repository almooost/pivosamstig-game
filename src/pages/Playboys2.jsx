import React from "react";
import { Link } from "react-router-dom";

const style = {
    "max-width": "250px"
};

function Playboys2(){

    return (
        <div className="TaskWrapper">
            <div className="Task">

                <h1>Quiz Day - Playboys</h1>

                <img src="https://cdn.dribbble.com/users/1857413/screenshots/5833579/media/03276d4a6a6bcd48fcb4860df4ae5ba1.gif" style={style} />
            
                <p className="description">
                    <i>"Life is too short to be living somebody else's dream." - Hugh Hefner</i><br /><br />

                    So zurück zum Spiel, fürs Erste hab ihr es fast geschafft. <i>Obacht Hoi!</i> Hört ihr das rauschen und gurgeln auch?
                    <br /><br />
                    Ach ja, da steht doch einer mit einem <i>Hahn</i>. Bittet ihn doch erst einmal um eine Runde <i>?Bier?</i> und lasst es auch schmecken.
                    <br /><br />
                    Damit es euch während eures Aufenthaltes nicht langweilig wird, gibt es noch ein kleines Rätsel zu lösen.
                    <br /><br />
                    Screenshot von der Lösung und ab in den Chat damit.
                    <br /><br />
                    <a href="https://crosswordlabs.com/embed/pivo-samstig-games" target="_blank">Link</a> zum <a href="https://crosswordlabs.com/embed/pivo-samstig-games" target="_blank">Rätsel</a> findet ihr <a href="https://crosswordlabs.com/embed/pivo-samstig-games" target="_blank">Hier</a>, <a href="https://crosswordlabs.com/embed/pivo-samstig-games" target="_blank">Hier</a>, <a href="https://crosswordlabs.com/embed/pivo-samstig-games" target="_blank">Hier</a> und <a href="https://crosswordlabs.com/embed/pivo-samstig-games" target="_blank">Hier</a>

                </p>
            </div>
            <div>
                <Link to="/BackToBase">
                        <button className="btn">Back to Base</button>
                </Link>
            </div>
        </div>
    );
}

export {Playboys2}