import React from "react";

const TeamContext = React.createContext({
    name: '',
    task: null,
    finished: false
});

export default TeamContext;