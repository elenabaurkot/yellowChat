import axios from  'axios';


export const getUsers = () =>{
    return axios.get('/api/users'); 
}

export const getCustomers = () =>{
    console.log("at getCustomers ");
    return axios.get('/api/users/customers'); 
}

export const getVendors = (token) =>{
    
    return axios.get('/api/users/vendors', {headers: {"x-auth-token": token}}); 
}

export default {   
    getUsers,
    getCustomers,
    getVendors
}