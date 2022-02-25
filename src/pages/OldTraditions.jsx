import React from "react";
import { Link } from "react-router-dom";

function OldTraditions(){

    return (
        <div className="TaskWrapper">
            <div className="Task">

                <h1>Old Traditions</h1>
            
                <p className="description">
                    Zu fast schon einer Tradition wurde beim Pivo Samstig das “Pivo to Go”. Nun wäre es natürlich doch nur all zu Schade, wenn ich euch dem trockenen Winter-Wetter komplett ohne Speiseröhrenbefeuchtungsmittel aussetzen würde.
                    <br /><br />
                    Doch Obacht! Das Pub ist doch nicht einfach ein Bierladen. Ganz in eurer nähe, nämlich im Umkreis von 50m befindet sich ein ganz interessanter Shop, wo ihr ganz viel verschiedene Biere findet.
                    <br />
                    Aufgabe:
                    <h2>
                        Geht zum nächsten Bierladen und besorgt dort min. 3 verschiedene Biere.
                    </h2>

                    <h4>
                        Die Info, wos die besten Biere in eurer nähe gibt, erhaltet ihr im Chat auf Anfrage.
                    </h4>
                    <br /><br />
                    Macht ein Bild mit allen gekauften Bieren vor dem Laden und schickt es in den Gruppenchat. Sobald ihr das Bild gepostet habt, erhaltet ihr den nächsten Standort via Chat.
                    <br /><br />

                    <b>WICHTIG</b>: Ob das Bier gleich sofort oder später konsumiert wird, ist egal. Das Glas oder die Dose mit der Etikette muss bis zum Schluss behalten werden.
                    <br /><br />
                </p>
            </div>

            <div>
                <Link to="/reisereise">
                    <button className="btn">Weiter</button>
                </Link>
            </div>
        </div>
    );
}

export {OldTraditions}