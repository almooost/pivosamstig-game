import React from "react";

const style = {
    "max-width": "250px"
};

function OldTraditions2(){

    return (
        <div className="TaskWrapper">
            <div className="Task">

                <h1>Old Tradition</h1>

                <img src="https://c.tenor.com/qAy1e3z1P9UAAAAC/fun-excited.gif" style={style}/>
            
                <p className="description">
                    Zu fast schon einer Tradition wurde beim Pivo Samstig das “Pivo to Go”. Nun wäre es natürlich doch nur all zu Schade, wenn ich euch dem trockenen Winter-Wetter komplett ohne Speiseröhrenbefeuchtungsmittel aussetzen würde.
                    <br /><br />
                    <i>Obacht Hoi!</i> Das Pub ist doch nicht einfach ein Beer Shop. Ganz in eurer nähe befindet sich ein ganz interessanter Shop, wo ihr viele verschiedene Biere findet.
                    
                    <h2>
                        Geht zum nächsten Beer Shop und besorgt dort min. 3 verschiedene Biere.
                    </h2>
                    <i>Eine Info, wo es die <a href="https://goo.gl/maps/YTo1rfmKtNXToCc8A" target="_blank">besten Biere in eurer nähe</a> gibt, erhaltet ihr im Chat auf Anfrage.</i>
                    <br /><br />
                    <h3>
                        Macht ein Bild mit allen gekauften Bieren und dem Laden und postet es im Chat.
                        
                        <br />
                        Sobald ihr das Bild gepostet habt, erhaltet ihr weitere Informationen und den euer nächstes Ziel.
                    </h3>
                    <br /><br />

                    <b>WICHTIG</b>: Wann ihr das erworbene Bier trink, ist euch überlassen.
                    <br />
                    <i>Ich empfehle damit noch etwas zu warten</i>
                    <b>Das Glas oder die Dose mit der Etikette müsst ihr beim Treffpunkt dem Spielleiter vorweisen.</b>
                </p>
            </div>

        </div>
    );
}

export {OldTraditions2}