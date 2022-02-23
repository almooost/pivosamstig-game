import { useState } from "react";

function SecondTask() {
    const [taskState, setTaskState] = useState('solution1');

    return (
        <div>
            <input onInput={event => setTaskState(event.target.value)} />
            <button>Weiter</button>
        </div>
    );
}

export default SecondTask;