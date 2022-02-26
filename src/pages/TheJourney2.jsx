import React from "react";
import { Link } from "react-router-dom";
import useForm from "../hooks/useForm";

const style = {
    "max-width": "250px"
};


function TheJourney2(){

    const formLogin = () => {
        console.log("Callback function when form is submitted!");
        console.log("Form Values ", values);
    }

    const {handleChange, handleSubmit,values, errors, styleNext} = useForm(formLogin);

    return (
        <div className="TaskWrapper">
            <div className="Task">

                <h1>The Journey begins</h1>
                <img src="https://c.tenor.com/GluXIL1RELsAAAAC/crawl-car.gif" style={style}/>
                <p className="description">
                Genau, die Gruppe wollte sich im <b>Papa Joe's</b> kurz aufwärmen und <i>gschwind</i> etwas trinken.
                <br />
                <br />
                Aus den ausgeschriebenen 1.5h Foxtrail wurden schlussendlich etwa 4-5h. Und nein, Roofies gab es bestimmt nicht ;-)
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
                        <a href="https://goo.gl/maps/4EtvN9ABviD8ddxz5" target="_blank">Hier</a> findet ihr euer nächstes Ziel.
                    </b><br /><br/>
                    Adresse:<br />
                    Talstrasse 82<br />
                    8001 Zürich
                    <br /><br />
                    <br /><br />

                    Wenn ihr denkt, am richtigen Ort angekommen zu sein, <b>macht mit eurem Smartphone ein Bild von der Frontansicht <i>vom Pub</i> und postet es im Chat</b>.
                    <br /><br />
                    Sobald ihr das Bild gepostet habt, Frage beantworten und weiter gehts.
                </p>
            </div>

            <form onSubmit={handleSubmit}>
            <div className="solution">
            <h3>Damit ihr weiter könnt müsst ihr den Namen des <i>Pubs</i> eingeben, vor welchem ihr gerade steht.</h3>
            <p>Gebt das Lösungswort in Kleinbuchstaben und ohne Abstände oder Sonderzeichen ein.
                    <br />
                    Beispiel: Aus "Pivo Samstig" wird "pivosamstig"
                    <br /><br />
                    Lösungswort: 
                </p>
                <input className="form-control" type="text" name="solution" placeholder="Hier eingeben" onChange={handleChange} />
            </div>

            <div>
                <input type="submit" className="btn" value="Prüfen" />
                <Link to="/ThePub2">
                    <button className="btn" style={styleNext}>Weiter</button>
                </Link>
            </div>
            </form>
        </div>
    );
}

export {TheJourney2}