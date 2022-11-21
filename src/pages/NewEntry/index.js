import React, { useContext, useState } from "react";
import api from "../../services/api.js";
import UserContext from "../../contexts/UserContext.js";
import {Container, Form, Input, Button} from '../../components/FormComponents.js'
import { Title } from "./style.js";

function NewEntry(){
    const {userToken} = useContext(UserContext);

    const [formData, setFormData] = useState({
        amount: '',
        description: '',
    });

    function handleChange(event){
        setFormData({...formData, [event.target.name]: event.target.value});
    }
    async function handleSubmit(event){
        event.preventDefault();
        console.log(formData);
        try {
            await api.createEntry(formData, userToken);
        } catch (error) {
            alert('Erro, tente novamente');
            console.log(error);
        }
        
    }
    return(
        <Container alignSelf='start'>
            <Title>Nova entrada</Title>
            <Form onSubmit={handleSubmit}>
                <Input placeholder='Valor'type='number' onChange={(event)=>handleChange(event)} name='amount' value= {formData.amount} required/>
                <Input placeholder='Descrição'type='text' onChange={(event)=>handleChange(event)} name='description' value= {formData.description} required/>
                <Button>Salvar entrada</Button>
            </Form>
        </Container>
    )
}

export default NewEntry;