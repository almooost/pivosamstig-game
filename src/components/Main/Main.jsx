import React from "react";
import './Main.css';

const style = {
    padding: '1.5rem'
};

function MainSection({children}){
    return(
        <section className="Main" style={style}>{children}</section>
    )
}

export {MainSection};