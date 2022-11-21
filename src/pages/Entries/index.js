import React, { useContext, useEffect, useState } from "react";
import api from "../../services/api.js";
import UserContext from "../../contexts/UserContext.js";
import {Container} from '../../components/FormComponents.js'
import { Title, EntriesListContainer, EntriesOptions, EntryOption, Entry, CreatedAt, Description, Amount } from "./style.js";
import { useNavigate } from "react-router-dom";

function Entries(){
    const navigate = useNavigate();
    const {userToken, userName} = useContext(UserContext);
    const [entries,setEntries]=useState([]);
    const [saldo, setSaldo] = useState(0)
    async function handleLogout(){
        try {
            await api.logout(userToken);
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        const handleGet = async()=>{
            const answer = await api.listEntries(userToken);
            setEntries(answer);
        }
        handleGet().catch((error)=>{console.log(error)});
	}, []);
    return(
        <Container alignSelf='start'>
            <Title>Olá, {userName}
                <ion-icon name="log-out-outline" onClick={handleLogout}></ion-icon>
            </Title>
            <EntriesListContainer>
                {entries.map(entry=> 
                    <Entry>
                        <CreatedAt>{entry.createdAt}</CreatedAt>
                        <Description>{entry.description}</Description>
                        <>{entry.type==='entry'?<Amount entry>{entry.amount}</Amount>:<Amount>{entry.amount}</Amount>}</>
                    </Entry>)}
                <div>Seu saldo é {saldo}</div>
            </EntriesListContainer>
            <EntriesOptions>
                <EntryOption onClick={()=>navigate('/new-entry')}>Nova entrada</EntryOption>
                <EntryOption onClick={()=>navigate('/new-exit')}>Nova saída</EntryOption>
            </EntriesOptions>
        </Container>
    );
}

export default Entries;