import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

export const addlogin = createAsyncThunk('addlogin', async(data)=>{
    var tokenid = localStorage.getItem('user');
    const token = tokenid; // Replace with your actual token
    const config = {
      headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`,
      },
  };
   
    const {email,password} = data;

    const formdata = new FormData();
formdata.append('email', email);
formdata.append('password', password);

    const response = await axios.post('http://localhost:8000/api/login', formdata,config);

    console.log(response);
    return response.data;
});



export const login = createSlice({
    name:'login',
    initialState:{
      
        email:'',
        password:'',
        
        login:[],
        

    },

    reducers:{
       
        setEmail:(state,payload)=>{
            state.email = payload.payload
        },
        setPassword:(state,payload)=>{
            state.password = payload.payload
        },
        

    },

    extraReducers:{
        [addlogin.fulfilled]:(state, payload)=>{
            const response = payload.payload;

            console.log(response);

            if(response.message === "success"){
                const user = {id:response.uid, username:response.username, token:response.token};
                console.log(user);
                localStorage.setItem('user', JSON.stringify(user));
                localStorage.setItem('tokenall', response.token);
                window.location.href='/';
            }
            // alert("Login Successfully done");            
        },
        [addlogin.rejected]: (state, action) => {
            const error = action.error;
            console.error("Login failed:", error.message);
            alert('Email and Password Not matched')
        }

       
    }
}); 
export const {setEmail,setPassword} = login.actions;
export default login.reducer;