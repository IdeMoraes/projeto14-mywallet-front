import axios from "axios";

const base_URL = "http://localhost:5000";

async function creatUser(user){
    axios.post(`${base_URL}/sign-up`, user).then((res)=>{console.log(res.data)}).catch((error)=>{console.log(error)});
}

async function login(user){
    const {data} = await axios.post(`${base_URL}/login`, user);
    return data;
}

async function createEntry(entry, token){
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    axios.post(`${base_URL}/new-entry`, entry, config).then((res)=>{console.log(res.data)}).catch((error)=>{console.log(error)});
}

async function createExit(exit, token){
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    axios.post(`${base_URL}/new-exit`, exit, config).then((res)=>{console.log(res.data)}).catch((error)=>{console.log(error)});
}

async function logout(token){
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    const {data} = await axios.delete(`${base_URL}/logout`, config);
    return data;
}

const api = {
    creatUser,
    login,
    createEntry,
    createExit,
    logout,
}

export default api;