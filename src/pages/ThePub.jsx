import React from "react";
import { Link } from "react-router-dom";

function ThePub(){

    return (
        <div className="TaskWrapper">
            <div className="Task">

                <h1>The Pub</h1>

                <img src="https://c.tenor.com/evJYM-uYrVsAAAAM/shaun-of-the-dead-simon-pegg.gif" />
                <p className="description">
                Genau, die Gruppe wollte sich im <b>Papa Joe's</b> kurz aufwärmen und <i>gschwind</i> etwas trinken.
                <br />
                <br />
                Aus den ausgeschriebenen 1.5h Foxtrail wurden schlussendlich etwa 4h.
                <br />
                <br />
                Fun Fact - Hätte die Gruppe das Ziel ca. 15min später erreicht, wäre der Pivo Samstig das Monatsbild vom Foxtrail Februar geworden.
                <br />
                <br />
                So, weiter gehts mit den Pivo Samstig Games..
                <br />
                <br />
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

                    Wenn ihr denkt, am richtigen Ort angekommen zu sein, <b>macht mit eurem Smartphone ein Bild von der Frontansicht <i>vom Pub</i> und postet es im Chat</b>.
                    <br /><br />
                    Sobald ihr das Bild gepostet habt, drückt auf Weiter.
                </p>
            </div>

            <div>
                <Link to="/DrinkingBuddies">
                    <button className="btn">Weiter</button>
                </Link>
            </div>
        </div>
    );
}

export {ThePub}