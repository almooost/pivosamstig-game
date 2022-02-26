import React from "react";
import { Link } from "react-router-dom";
import useForm from "../hooks/useForm";

const style = {
    "max-width": "250px"
};


function ReiseReise(){

    const formLogin = () => {
        console.log("Callback function when form is submitted!");
        console.log("Form Values ", values);
    }

    const {handleChange, handleSubmit,values, errors, styleNext} = useForm(formLogin);

    return (
        <div className="TaskWrapper">
            <div className="Task">

                <h1>Reise Reise, Seemannsreise</h1>

                <img src="https://c.tenor.com/2iti_N6MuuoAAAAC/rammstein-till.gif" />
            
                <p className="description">
                    Reise Reise ja, aber aufs Schiff müsst ihr heute nicht, für das ist es doch etwas kalt.<br />
                    Begebt euch zum nächsten <a href="https://goo.gl/maps/3kfEe5D2U8JdLMWs8" target="_blank">Spot</a>, macht dort wieder ein Bild von der Aussenansicht und postet es im Chat.
                    <br /><br />
                    Adresse:<br />
                    Freischützgasse 14<br />
                    8004 Zürich

                    <br /><br />

                    Wenn ihr noch etwas gute Musik für den Weg braucht, here you go. <a href="https://open.spotify.com/track/53yBfGozCZOAqaM16PwMKP" target="_blank">Reise Reise</a><br /><br />

                    Sobald ihr am am Ziel angekommen seit, Frage beantworten und weiter gehts.
                </p>
            </div>
            <form onSubmit={handleSubmit}>
            <div className="solution">
            <h3>Für was ist diese Person bekannt? (ein Wort)</h3>
            <br />
            <img src="https://www.factinate.com/wp-content/uploads/2018/03/GettyImages-463118931-1024x730.jpg" alt="" style={style} />
            <br />
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
                <Link to="/Playboys">
                    <button className="btn" style={styleNext}>Weiter</button>
                </Link>
            </div>
            </form>
        </div>
    );
}

export {ReiseReise}