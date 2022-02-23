import { useState } from "react";

function FourthTask() {
    const [taskState, setTaskState] = useState('solution3');

    return (
        <div>
            <input onInput={event => setTaskState(event.target.value)} />
            <button>Weiter</button>
        </div>
    );
}


export default FourthTask;