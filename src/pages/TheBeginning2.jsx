import React, { createRef, useState } from "react";
import { Link } from "react-router-dom";

const task = {
    description: "Erstes Spiel",
    solution: "papajoe",
    solution_desc : "Papa Joe's Zürich [Möglichkeiten papa joe, papa joes, papa joes zürich] "
};


function TheBeginning2(){

    const {isDisabled, setDisabled} = useState(true);

    function checkSolution(event){
        event.preventDefault();
        console.log(event);
        console.log(buttonRef);
        event.target.value === task.solution
        ? setDisabled(false)
        : setDisabled(true);
    }

    let buttonRef = createRef();

    return (
        <div className="TaskWrapper">
            <div className="Task">

                <h1>And so it begins!</h1>
            
                <p className="description">
                    Heute, fast genau vor 7 Jahren wurde der erste offizielle Pivo-Samstig Anlass durchgeführt. Der Foxtrail, welche uns durch Zürich führte und eigentlich ca. 1.5h dauern sollte, wurde durch einen "unverhofften" Bar-Besuch um ein paar Stunden verzögert.
                </p>
                <br/><br/>
                <h2>In welcher Bar wurde die Gruppe aufgehalten?</h2>
                <p className="description">
                    Tipp: Die Bar ist ganz in der nähe ;-)
                </p>
            </div>

            <div className="solution">
            <p>Info: Gebt das Lösungswort in Kleinbuchstaben und ohne Abstände ein.
                    <br />
                    Beispiel: Aus "Pivo Samstig" wird "pivosamstig"
                    <br /><br />
                    Lösungswort: 
                </p>
                <input className="form-control" type="text" name="solution" placeholder="Hier eingeben" />
            </div>

            <div>
                <Link to="/ThePub2">
                        <input type="submit" ref={buttonRef} className="btn" onSubmit={e => checkSolution(e)} value="Weiter" disabled={isDisabled} />
                </Link>
            </div>
        </div>
    );
}

export {TheBeginning2}