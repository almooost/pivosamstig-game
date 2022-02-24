import React from "react";

function TaskTitle({title}){
    return (
        <div className="TaskTitle">
            <h1>{title}</h1>
        </div>
    );
}

function TaskContent({content}){
    return (
        <div className="TaskContent">
            <p>{content}</p>
        </div>
    );
}

function TaskTextField({id, value, placeholder}){
    return (
        <div className="field">
            <div className="control">
                <input type="text" id={id} className="input" value={value ? value : ''} placeholder={placeholder}/>
            </div>
        </div>
    )
}

export{TaskTitle, TaskContent, TaskTextField}