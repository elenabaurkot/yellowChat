import axios from  'axios';


export const getUsers = () =>{
    return axios.get('/api/users'); 
}

export const getCustomers = () =>{
    console.log("at getCustomers ");
    return axios.get('/api/users/customers'); 
}

export const getVendors = () =>{
    return axios.get('/api/users/vendors'); 
}

export default {   
    getUsers,
    getCustomers,
    getVendors
}