
import React, { useState } from "react";
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/sign-up" element={<SignUp/>}/>
                <Route path="/" element={<Login/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;