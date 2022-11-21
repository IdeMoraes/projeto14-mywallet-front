import React, { useContext, useState } from "react";
import api from "../../services/api.js";
import { useNavigate } from "react-router-dom";
import UserContext from "../../contexts/UserContext.js";
import {Container, Form, Input, Button, StyledLink} from '../../components/FormComponents.js'
import Logotype from "../../components/Logotype.js";

function Login(){

    const navigate = useNavigate();

    const {setUserToken} = useContext(UserContext);

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    function handleChange(event){
        setFormData({...formData, [event.target.name]: event.target.value});
    }

    async function handleSubmit(event){
        event.preventDefault();
        try {
            const answer = await api.login(formData);
            setUserToken(answer);
            navigate('/new-entry');
        } catch (error) {
            alert('Erro, tente novamente');
            console.log(error);
        }    
    }
    return(
        <Container>
            <Logotype>MyWallet</Logotype>
            <Form onSubmit={handleSubmit}>
                <Input placeholder='E-mail'type='email' onChange={(event)=>handleChange(event)} name='email' value= {formData.email} required/>
                <Input placeholder='Senha'type='password' onChange={(event)=>handleChange(event)} name='password' value= {formData.password} required/>
                <Button>Entrar</Button>
            </Form>
            <StyledLink to='/sign-up'>Primeira vez? Cadastre-se!</StyledLink>
        </Container>
    )
}

export default Login;