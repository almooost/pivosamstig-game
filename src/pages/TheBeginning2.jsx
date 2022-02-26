import React from "react";
import { Link } from "react-router-dom";
import useForm from "../hooks/useForm";

const style = {
    "max-width":"250px"
};

function TheBeginning2(){

    const formLogin = () => {
        console.log("Callback function when form is submitted!");
        console.log("Form Values ", values);
    }

    const {handleChange, handleSubmit,values, errors, styleNext} = useForm(formLogin);

    return (
        <div className="TaskWrapper">
            <div className="Task">

                <h1>Okaaayy, lets go!</h1>

                <img src="https://c.tenor.com/kA9FRdP2JU4AAAAd/okay-lets.gif" style={style}/>
            
                <p className="description">
                Heute, vor 7 Jahren wurde der erste offizielle Pivo-Samstig Anlass durchgeführt. Ein Foxtrail, welcher uns durch Zürich führte und eigentlich ca. 1.5h dauern sollte. Jedoch wurde die Gruppe durch einen "kurzen" Bar-Besuch um ein paar Stunden zurückgeworfen und somit beinahe die überhaupt mögliche Tagesfrist verpasst hatte.

                    <h3>In welcher Bar wurde die Gruppe aufgehalten?</h3>
                
                <i>Tipp: Die Bar befindet sich ganz in der Nähe ;-)</i>
                </p>
            </div>

            <form onSubmit={handleSubmit}>
            <div className="solution">
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
                
                <div style={styleNext}>
                    <Link to="/TheJourney2">
                        <button className="btn">Weiter</button>
                    </Link>
                </div>

            </div>
            </form>
        </div>
    );
}

export {TheBeginning2}