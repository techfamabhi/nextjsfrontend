import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import axios from "axios";

export const addregister = createAsyncThunk('addregister', async(data)=>{
   
    const {username,email,password,confirm_password,contact} = data;

    const formdata = new FormData();
formdata.append('username', username);
formdata.append('email', email);
formdata.append('password', password);
formdata.append('confirm_password', confirm_password); // Fix this line
formdata.append('contact', contact);

    const response = await axios.post('http://localhost:8000/api/register', formdata);

    if(response.status == 407){
        alert('error');
    }

    console.log(response);
    return response.data;
});



export const register = createSlice({
    name:'register',
    initialState:{
        username:'',
        email:'',
        password:'',
         confirm_password:'',
        register:[],
        

    },

    reducers:{
        setUsername:(state,payload)=>{
            state.username = payload.payload
        },
        setEmail:(state,payload)=>{
            state.email = payload.payload
        },
        setPassword:(state,payload)=>{
            state.password = payload.payload
        },
        setConfirm: (state, payload) => {
            state.confirm_password = payload.payload;
          },
          
        setContact:(state,payload)=>{
            state.contact = payload.payload
        },

    },

    extraReducers:{
        [addregister.fulfilled]:(state,action)=>{
            alert("Registration Successfully Done"); 
            console.log(action.payload);
            window.location.href="/login"           
        },
        [addregister.rejected]:(state,action)=>{
            console.log(action.payload.error);
        }

       
    }
}); 
export const {setUsername,setEmail,setPassword,setConfirm,setContact} = register.actions;
export default register.reducer;