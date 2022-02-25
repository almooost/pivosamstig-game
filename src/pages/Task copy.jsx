import React, { createRef } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const tasks = {
    "1" : {
        description: "Erstes Spiel",
        pathNext: "/task/2",
        password: "niederdorf",
        state: "running"
    },
    "2" : {
        description: "Zweites Spiel",
        pathNext: "/task/3",
        password: "Bierlade",
        state: "running"

    },
    "3" : {
        description: "Drittes Spiel",
        pathNext: "/task/4",
        password: "Hophop",
        state: "running"

    },
    "4" : {
        description: "Viertes Spiel",
        pathNext: "",
        password: "walliselle",
        state: "running"

    }

}

function checkSolution(value, solution, ref){
    console.log(ref);
    if(value === solution)
        ref.disabled = false;
    else
        ref.disabled = true;
}

function Task(){

    let buttonRef = createRef();

    let {id} = useParams();
    if(tasks[id]){
        let description = tasks[id].description;
        let path = tasks[id].pathNext;
        let password = tasks[id].password;
        let state = tasks[id].state;
        return (
            <div className="TaskWrapper">
                <div className="Task">
                    {description}
                </div>

                <div className="solution">
                    <input type="text" value="" onInput={e => checkSolution(e.target.value,password,buttonRef)} />
                </div>

                <div>
                    <Link
                        to={{
                            pathname: `${path}`,
                            state: {gameState: `${state}`}
                        }}
                        >
                            <button ref={buttonRef} className="btn" >Weiter</button>
                    </Link>
                </div>
            </div>
        );
    } else {
        return (
            <div>Nanana, so nicht</div>
        )
    }
}

export {Task}