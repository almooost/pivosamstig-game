import React from "react";
import {Routes, Route} from 'react-router-dom';

import { Task } from "./Task";
import { Home } from "./Home";
import { MainSection } from "../components/Main/Main";

const Main = () => {
    return (
        <MainSection>
            <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route exact path="/task/:id" element={<Task />}></Route>
            </Routes>
        </MainSection>
    );
}

export default Main;