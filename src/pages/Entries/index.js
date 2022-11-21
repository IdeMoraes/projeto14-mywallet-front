import React, { useContext } from "react";
import api from "../../services/api.js";
import UserContext from "../../contexts/UserContext.js";
import {Container, Form, Input, Button} from '../../components/FormComponents.js'
import { Title } from "./style.js";
import { useNavigate } from "react-router-dom";

function Entries(){
    const navigate = useNavigate();
    const {userToken, userName} = useContext(UserContext);
    async function handleLogout(){
        try {
            const answer = await api.logout(userToken);
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    }
    return(
        <Container alignSelf='start'>
            <Title>Olá, {userName}
                <ion-icon name="log-out-outline" onClick={handleLogout}></ion-icon>
            </Title>
            
        </Container>
    );
}

export default Entries;