import axios from  'axios';


export const getUsers = (token) =>{
    return axios.get('/api/users', {headers: {"x-auth-token": token}}); 
}

export const getCustomers = (token) =>{
    console.log("at getCustomers ");
    return axios.get('/api/users/customers', {headers: {"x-auth-token": token}}); 
}

export const getVendors = (token) =>{
    return axios.get('/api/users/vendors', {headers: {"x-auth-token": token}}); 
}

export default {   
    getUsers,
    getCustomers,
    getVendors
}
