import axios from "axios";

const base_URL = "http://localhost:5000";

async function creatUser(user){
    axios.post(`${base_URL}/sign-up`, user).then((res)=>{console.log(res)}).catch((error)=>{console.log(error)});
}

const api = {
    creatUser
}

export default api;