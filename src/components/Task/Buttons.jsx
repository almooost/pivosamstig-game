import React, {useState} from "react";

const FormButton = ({text, click, active = true}) => {
    const [isActive, setIsActive] = useState(false);

    const clickButton = () => {
        setIsActive(false);
        click();
    }

    return (
        <div>
            <button onClick={clickButton} disabled={!isActive} className="btn"></button>
        </div>
    )
}

export {FormButton}