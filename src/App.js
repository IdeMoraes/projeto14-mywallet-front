
import React, { useState } from "react";
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import UserContext from "./contexts/UserContext";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import NewEntry from "./pages/NewEntry";
import NewExit from "./pages/NewExit";
import Entries from "./pages/Entries";

function App(){
    const [userToken, setUserToken] = useState('');
    const [userName, setUserName] = useState('');
    return(
        <UserContext.Provider value={{userToken, setUserToken, userName, setUserName}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/sign-up" element={<SignUp/>}/>
                    <Route path="/" element={<Login/>}/>
                    <Route path="/new-entry" element={<NewEntry/>}/>
                    <Route path="/new-exit" element={<NewExit/>}/>
                    <Route path="/new-entry" element={<NewEntry/>}/>
                    <Route path="/entries" element={<Entries/>}/>
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    )
}

export default App;