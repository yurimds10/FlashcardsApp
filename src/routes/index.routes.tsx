import { Route, Routes } from "react-router-dom";

import { Home } from "../pages/home";
import { Decks } from "../pages/decks";
import { Dashboard } from "../pages/dashboard";
import { Friends } from "../pages/friends";
import { Sigin } from "../pages/sigin";
import { Sigup } from "../pages/sigup";


export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="decks" element={<Decks/>}/>
            <Route path="dashboard" element={<Dashboard/>}/>
            <Route path="friends" element={<Friends/>}/>
            <Route path="sigin" element={<Sigin/>}/>
            <Route path="sigup" element={<Sigup/>}/>
        </Routes>
    );
};
