import React from "react";
import {Routes, Route} from 'react-router-dom';

import { Home } from "./Home";
import { Home2 } from "./Home2";
import { MainSection } from "../components/Main/Main";
import { TheBeginning } from "./TheBeginning";
import { TheBeginning2 } from "./TheBeginning2";
import { ReiseReise } from "./ReiseReise";
import { ReiseReise2 } from "./ReiseReise2";
import { Playboys } from "./Playboys";
import { Playboys2 } from "./Playboys2";
import { OldTraditions } from "./OldTraditions";
import { OldTraditions2 } from "./OldTraditions2";
import { BackToBase } from "./BackToBase";
import { TheJourney } from "./TheJourney";
import { TheJourney2 } from "./TheJourney2";
import { ThePub } from "./ThePub";
import { ThePub2 } from "./ThePub2";


const Main = () => {
    return (
        <MainSection>
            <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route exact path="/2" element={<Home2 />}></Route>
                <Route exact path="/thebeginning" element={<TheBeginning />}></Route>
                <Route exact path="/thebeginning2" element={<TheBeginning2 />}></Route>
                <Route exact path="/thepub" element={<ThePub />}></Route>
                <Route exact path="/thepub2" element={<ThePub2 />}></Route>
                <Route exact path="/TheJourney" element={<TheJourney />}></Route>
                <Route exact path="/TheJourney2" element={<TheJourney2 />}></Route>
                <Route exact path="/reisereise" element={<ReiseReise />}></Route>
                <Route exact path="/reisereise2" element={<ReiseReise2 />}></Route>
                <Route exact path="/Playboys" element={<Playboys />}></Route>
                <Route exact path="/Playboys2" element={<Playboys2 />}></Route>
                <Route exact path="/oldtraditions" element={<OldTraditions />}></Route>
                <Route exact path="/oldtraditions2" element={<OldTraditions2 />}></Route>
                <Route exact path="/backtobase" element={<BackToBase />}></Route>
            </Routes>
        </MainSection>
    );
}

export default Main;