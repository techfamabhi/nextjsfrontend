import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPosts = createAsyncThunk('fetchposts', async () => {
  var tokenid = localStorage.getItem('tokenall');
  const token = tokenid; // Replace with your actual token
  const config = {
    headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}`,
    },
};



  const response = await axios.get('http://localhost:8000/api/post',config);
  return response.data;
});

export const addpost = createAsyncThunk('addpost', async (data) => {

  var tokenid = localStorage.getItem('tokenall');
  const token = tokenid; // Replace with your actual token
  const config = {
    headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}`,
    },
};
  const { title, description, photopath,userId } = data;
  const formdata = new FormData();
  formdata.append('userid', userId);
  formdata.append('title', title);
  formdata.append('description', description);

  photopath.forEach((img) => {
    formdata.append('photopath[]', img);
  });

  const response = await axios.post('http://localhost:8000/api/post', formdata,config, {
    headers: { 'content-type': 'multipart/form-data' }
  }).catch((error) => {
    console.error('Error:', error);
  });

  console.log(response);
  return response.data;
});



export const fetchParticularPost = createAsyncThunk('fetchparticularpost', async (id) => {
  console.log('id:', id);
  var tokenid = localStorage.getItem('tokenall');
  const token = tokenid; // Replace with your actual token
  const config = {
    headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}`,
    },
};
  const response = await axios.get('http://localhost:8000/api/post/' + id,config);
  return response.data;
});

export const addlike = createAsyncThunk('addlike', async (data) => {
  var tokenid = localStorage.getItem('tokenall');
  const token = tokenid; // Replace with your actual token
  const config = {
    headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}`,
    },
};

  const user_id = data.userId;
  const post_id = data.postId;
  const formdata = new FormData();
  formdata.append('user_id', user_id);
  formdata.append('post_id', post_id);

  console.log(formdata);
  const response = await axios.post('http://localhost:8000/api/like', formdata,config);
  console.log(response);
  return response.data;
});

export const addComment = createAsyncThunk('addComment', async (data) => {

  var tokenid = localStorage.getItem('tokenall');
  const token = tokenid; // Replace with your actual token
  const config = {
    headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}`,
    },
};

  const user_id = data.userId;
  const post_id = data.postId;
  const text = data.text;
  const formdata = new FormData();
  formdata.append('user_id', user_id);
  formdata.append('post_id', post_id);
  formdata.append('text', text);

  const response = await axios.post('http://localhost:8000/api/addcomment', formdata,config);
  console.log(response);
  return response.data;
});


export const fetchLikes = createAsyncThunk('fetchLikes', async (id) => {

  
  var tokenid = localStorage.getItem('tokenall');
  const token = tokenid; // Replace with your actual token
  const config = {
    headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}`,
    },
};

  const user_id = id;
  const pData = {
    'user_id': user_id,
  };
  const response = await axios.post('http://localhost:8000/api/fetchlikes', pData,config);
  console.log('hiii', response.data);
  return response.data;
});

export const fetchComments = createAsyncThunk('fetchcomments', async (id) => {
  
  var tokenid = localStorage.getItem('tokenall');
  const token = tokenid; // Replace with your actual token
  const config = {
    headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}`,
    },
};

  const post_id = id;
  const pData = {
    'post_id': post_id,
  };

  const response = await axios.post('http://localhost:8000/api/fetchcomments', pData,config);
  console.log('hiii', response.data);
  return response.data;
});

export const fetchUserPosts = createAsyncThunk('fetchUserPosts', async (userId) => {
  
  var tokenid = localStorage.getItem('tokenall');
  const token = tokenid; // Replace with your actual token
  const config = {
    headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}`,
    },
};

    console.log('userId', userId);
    const response = await axios.get('http://localhost:8000/api/getPostsForUser/' + userId,config);
    return response.data;
  });




export const fetchUser = createAsyncThunk('fetchUser', async (id)=>{

  
  var tokenid = localStorage.getItem('tokenall');
  const token = tokenid; // Replace with your actual token
  const config = {
    headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}`,
    },
};
  const response = await axios.get('http://localhost:8000/api/fetchuser/'+ id,config);
  return response.data;
})
    
export const profileadd = createAsyncThunk('profileadd', async (data) => {
  
//   var tokenid = localStorage.getItem('tokenall');
//   const token = tokenid; // Replace with your actual token
//   const config = {
//     headers: {
//         'Content-Type': 'multipart/form-data',
//         'Authorization': `Bearer ${token}`,
//     },
// };

  console.log("Profile Picture Update : ",data)

  // const {userid,name,phone,email,image,banner,address,city,state,pin} = data;
  const formdata = new FormData();
  formdata.append('_method','PUT');
  formdata.append('userid', data.userid);
  formdata.append('name', data.name);
  formdata.append('phone', data.phone);
  formdata.append('email', data.email);
  formdata.append('image', data.image);
  formdata.append('banner', data.banner);
  formdata.append('address', data.address);
  formdata.append('city', data.city);
  formdata.append('state', data.state);
  formdata.append('pin', data.pin);

  const response = await axios.post('http://localhost:8000/api/profile/'+ data.userid, formdata, {
                   headers: { 'Content-Type': 'multipart/form-data' }
  });

  console.log(response.data);
  return response.data;
});

export const fetchLikedPosts = createAsyncThunk('fetchLikedPosts', async (id)=>{

  
  var tokenid = localStorage.getItem('tokenall');
  const token = tokenid; // Replace with your actual token
  const config = {
    headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}`,
    },
};
  
  const response = await axios.get('http://localhost:8000/api/getLikedPosts/'+ id,config);
  return response.data;
});

export const getCommentsPosts = createAsyncThunk('getCommentsPosts', async (id)=>{
  
  var tokenid = localStorage.getItem('tokenall');
  const token = tokenid; // Replace with your actual token
  const config = {
    headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}`,
    },
};
  const response = await axios.get('http://localhost:8000/api/getCommentsPosts/'+ id,config);
  return response.data;
});

export const deleteLike = createAsyncThunk('deleteLike', async (id)=>{
  
  var tokenid = localStorage.getItem('tokenall');
  const token = tokenid; // Replace with your actual token
  const config = {
    headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}`,
    },
};
  const response = await axios.post('http://localhost:8000/api/deletelike/'+id,config);
  return response.data;
});


export const deletecomment = createAsyncThunk('deletecomment', async (id)=>{
  
  var tokenid = localStorage.getItem('tokenall');
  const token = tokenid; // Replace with your actual token
  const config = {
    headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}`,
    },
};
  const response = await axios.post('http://localhost:8000/api/deletecomment/'+id,config);
  return response.data;
});


export const fetchtags = createAsyncThunk('fetchtags', async () => {
  
  var tokenid = localStorage.getItem('tokenall');
  const token = tokenid; // Replace with your actual token
  const config = {
    headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}`,
    },
};
  const response = await axios.get('http://localhost:8000/api/fetchtags',config);
  return response.data;
});


export const updateprofile = createAsyncThunk('updateprofile', async (id)=>{
  console.log('updateIDD:'+id)

//   var tokenid = localStorage.getItem('tokenall');
//   const token = tokenid; // Replace with your actual token
//   const config = {
//     headers: {
//         'Content-Type': 'multipart/form-data',
//         'Authorization': `Bearer ${token}`,
//     },
// };
  const response = await axios.get('http://localhost:8000/api/updateprofile/'+id);
  console.log("updateprofile",response.data);
  return response.data;
 

});


export const authorpost = createAsyncThunk('authorpost', async (id) => {
  var tokenid = localStorage.getItem('tokenall');
  const token = tokenid; // Replace with your actual token
  const config = {
    headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}`,
    },
};
  const response = await axios.get(`http://localhost:8000/api/authorpost/${id}`,config);
  return response.data;
});



export const commentcount = createAsyncThunk('commentcount', async (id) => {
  console.log('commentcount:',id);
  
  // const response = await axios.get(`http://localhost:8000/api/countcomment/${id}`);
  // return response.data;
});

export const fetchTagPosts = createAsyncThunk('fetchTagPosts', async (tag) => {
  var tokenid = localStorage.getItem('tokenall');
  const token = tokenid; // Replace with your actual token
  const config = {
    headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}`,
    },
};
  const formdata = new FormData();
  formdata.append('tag', tag);

  const response = await axios.post("http://localhost:8000/api/fetchtagposts", formdata,config);

  return response.data;

});




export const searchByUsername = createAsyncThunk('searchByUsername', async (data) => {
  console.log('searchByUsername:',data);
  
  const formdata = new FormData();
  formdata.append('username', data);
   const response = await axios.post(`http://localhost:8000/api/searchByUsername`,formdata);
  return response.data;
});



// export const authorpost = createAsyncThunk('authorpost', async (id)=>{
//   console.log("idd:",id);
//   const response = await axios.get('http://localhost:8000/api/authorpost/'+id);
//   console.log("authorpost",response.data);
//   return response.data;
 

// });

    
// export const updateprofile = createAsyncThunk('updateprofile', async (data) => {

//   console.log("Profile update : ",data)

//   // const {userid,name,phone,email,image,banner,address,city,state,pin} = data;
//   const formdata = new FormData();
//   formdata.append('_method','PUT');
//   formdata.append('userid', data.userid);
//   formdata.append('name', data.name);
//   formdata.append('phone', data.phone);
//   formdata.append('email', data.email);
//   formdata.append('image', data.image);
//   formdata.append('banner', data.banner);
//   formdata.append('address', data.address); 
//   formdata.append('city', data.city);
//   formdata.append('state', data.state);
//   formdata.append('pin', data.pin);

//   const response = await axios.post('http://localhost:8000/api/updateprofile/'+ data.userid, formdata, {
//                    headers: { 'Content-Type': 'multipart/form-data' }
//   });

//   console.log(response.data);
//   return response.data;
// });

const posts = createSlice({
  name: 'posts',
  initialState: {
    title: '',
    description: '',
    photopath: [],
    posts: [],
    detailPost: {},
    likedPosts: [],
    searchQuery: '',
    getPostsForUser:[],
    comment:'',
    postComments:[],
    tags:[],
    searchQueryusername:[],

    name:'',
    phone:'',
    email:'',
    image:'',
    banner:'',
    address:'',
    city:'',
    state:'',
    pin:'',
    userDetails:{},
    fetchedLikedPosts:[],
    fetchedCommentedPosts:[],
    profileupdate:{},
    tagPosts:[],
    searchdata:[],
    // authorpostdata:[],
   // authorpostdata: null,
   authorpostdata: {
    authorPosts: [],
  },
  profilepostdata:{
    profileAndPosts:[]
  },
  commentcountdata:0,

  },
  reducers: {
    setTitle: (state, payload) => {
      state.title = payload.payload;
    },
    setDescription: (state, payload) => {
      state.description = payload.payload;
    },
    setPhoto: (state, payload) => {
      state.photopath = payload.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setComment:(state, action)=>{
      state.comment = action.payload;
    },



    setName:(state, action)=>{
      state.name = action.payload;
    },
    setPhone:(state, action)=>{
      state.phone = action.payload;
    },
    setEmail:(state, action)=>{
      state.email = action.payload;
    },
    setImage:(state, action)=>{
      state.image = action.payload;
    },
    setBanner:(state, action)=>{
      state.banner = action.payload;
    },

    
    setAddress:(state, action)=>{
      state.address = action.payload;
    },
    setCity:(state, action)=>{
      state.city = action.payload;
    },
    setState:(state, action)=>{
      state.state = action.payload;
    },
  
    setPin:(state, action)=>{
      state.pin = action.payload;
    },
    setSearchUsername :(state,action)=>{
      state.searchQueryusername = action.payload
    },
  



  },
  extraReducers: {
    [fetchPosts.fulfilled]: (state, action) => {
      state.posts = action.payload;
    },
    [fetchParticularPost.fulfilled]: (state, action) => {
      state.detailPost = action.payload;
    },
    [fetchUserPosts.fulfilled]:(state,action)=>{
        state.getPostsForUser = action.payload;
    },
    [addpost.fulfilled]: () => {
      alert("Post Added");
      window.location.href = '/';
    },
    [addlike.fulfilled]: (state, action) => {
      state.likedPosts = action.payload;
    },
    [fetchLikes.fulfilled]: (state, action) => {
      state.likedPosts = action.payload;
            console.log('hiii');
    },
    [addComment.fulfilled]: (state)=>{
      state.comment = '';      
    },
    [fetchComments.fulfilled]: (state, action)=>{
      state.postComments = action.payload;
     
    },
    [profileadd.fulfilled]: () => {
      alert("Profile Updated");
       window.location.href = '/';
    },

    [fetchUser.fulfilled]:(state, action)=>{
      state.userDetails = action.payload;
    },

    [fetchLikedPosts.fulfilled]:(state, action)=>{
        state.fetchedLikedPosts = action.payload;
    },

    [getCommentsPosts.fulfilled]:(state, action)=>{
        state.fetchedCommentedPosts = action.payload;
    },

    [deleteLike.fulfilled]:(state, action)=>{
        console.log('deleted');
    },
    [deletecomment.fulfilled]:(state,action)=>{
        console.log("deleted");
    },
    [fetchtags.fulfilled]: (state, action) => {
      state.tags = action.payload;
    },
    [updateprofile.fulfilled]: (state, action) => {
      state.profileupdate = action.payload;
    },
    [authorpost.fulfilled]: (state, action) => {
      state.authorpostdata = action.payload;
    },
    [commentcount.fulfilled]:(state,action)=>{
      state.commentcountdata = action.payload;
    },
    [fetchTagPosts.fulfilled]:(state, action)=>{
      state.tagPosts = action.payload;
    },
    [searchByUsername.fulfilled]:(state,action)=>{
      console.log('searchdata');
      const searchData = action.payload;
      console.log(searchData);

      var options = [];
      searchData.users.map((u)=>{
          options = [...options, {label: "@"+u.username, value:{type:"user", val:u.id}}];
      });

      searchData.tags.map((t)=>{
        options = [...options, {label: "#"+t.name, value:{type:"tag", val:t.name}}];
      });

      state.searchdata = options;
    }

    }
});

// export const {setTitle,setDescription,setPhoto} = posts.actions;
// export default posts.reducer;
// export const { setSearchQuery } = setSearchQuery.actions;


export const {
    setTitle,
    setDescription,
    setPhoto,
    setSearchQuery, 
    setComment,
    setName,
    setPhone,
    setEmail,
    setImage,
    setBanner,
    setAddress,
    setCity,
    setState,
    setPin,
    setSearchUsername
    // Export setSearchQuery reducer
  } = posts.actions;
  
  export default posts.reducer;