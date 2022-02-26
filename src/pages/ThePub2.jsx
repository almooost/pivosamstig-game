import React from "react";
import { Link } from "react-router-dom";
import useForm from "../hooks/useForm";

function ThePub2(){

    const formLogin = () => {
        console.log("Callback function when form is submitted!");
        console.log("Form Values ", values);
    }

    const {handleChange, handleSubmit,values, errors, styleNext} = useForm(formLogin);

    return (
        <div className="TaskWrapper">
            <div className="Task">

                <h1>The Pub is the plan</h1>

                <img src="https://c.tenor.com/evJYM-uYrVsAAAAM/shaun-of-the-dead-simon-pegg.gif" />

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

            <form onSubmit={handleSubmit}>
            <div className="solution">
            <h3>Wie heisst das Pub, in welchem Shaun (Simon Peg), seinen Buddy Ed (Nick Frost), seine Freundin Liz und seine Mutter Barbara schutz suchen? <i>Shaun of the Dead</i></h3>
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
                <Link to="/OldTraditions2">
                    <button className="btn" style={styleNext}>Weiter</button>
                </Link>
            </div>
            </form>
        </div>
    );
}

export {ThePub2}