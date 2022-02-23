import { useState } from "react";

function ThirdTask(){
    const [taskState, setTaskState] = useState('solution2');

    return(
        <div>
            <input onInput={event => setTaskState(event.target.value)} />
            <button>Weiter</button>
        </div>
    );
}

export default ThirdTask;