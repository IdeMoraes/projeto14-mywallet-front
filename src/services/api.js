import axios from "axios";

const base_URL = "http://localhost:5000";

async function creatUser(user){
    axios.post(`${base_URL}/sign-up`, user).then((res)=>{console.log(res.data)}).catch((error)=>{console.log(error)});
}

async function login(user){
    const {data} = await axios.post(`${base_URL}/login`, user);
    return data;
}

const api = {
    creatUser,
    login
}

export default api;