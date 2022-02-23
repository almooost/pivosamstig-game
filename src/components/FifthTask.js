import { useState } from "react";

function FifthTask() {
    const [taskState, setTaskState] = useState('solution4');

    return (
        <div>
            <input onInput={event => setTaskState(event.target.value)} />
            <button>Weiter</button>
        </div>
    );
}


export default FifthTask;