import { useState } from "react";

function FirstTask() {
    const [taskState, setTaskState] = useState('solution0');

    return (
        <div>
            <input onInput={event => setTaskState(event.target.value)} />
            <button>Weiter</button>
        </div>
    );
}

export default FirstTask;
