
import React, { useState } from "react";
import api from "../../services/api.js";
import {Container, Form, Input, Button, StyledLink} from '../../components/FormComponents.js'
import Logotype from "../../components/Logotype.js";

function SignUp(){
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    function handleChange(event){
        setFormData({...formData, [event.target.name]: event.target.value});
    }
    async function handleSubmit(event){
        event.preventDefault();
        //console.log(formData);
        if(formData.password!==formData.confirmPassword){
            alert("As senhas devem ser iguais");
            return
        }
        delete formData.confirmPassword;
        try {
            await api.creatUser({
                name: formData.name,
                email: formData.email,
                password: formData.password,
            });
        } catch (error) {
            alert('Erro, tente novamente');
            console.log(error);
        }
    }
    return(
        <Container>
            <Logotype>MyWallet</Logotype>
            <Form onSubmit={handleSubmit}>
                <Input placeholder='Nome' type='text' onChange={(event)=>handleChange(event)} name='name' value= {formData.name} required/>
                <Input placeholder='E-mail'type='email' onChange={(event)=>handleChange(event)} name='email' value= {formData.email} required/>
                <Input placeholder='Senha'type='password' onChange={(event)=>handleChange(event)} name='password' value= {formData.password} required/>
                <Input placeholder='Confirme a senha'type='password' onChange={(event)=>handleChange(event)} name='confirmPassword' value= {formData.event} required/>
                <Button>Cadastrar</Button>
            </Form>
            <StyledLink to='/'>Já tem uma conta? Entre agora!</StyledLink>
        </Container>
    )
}

export default SignUp;