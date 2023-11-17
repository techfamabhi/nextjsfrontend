"use client"

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserPosts,updateprofile,addlike,fetchLikes} from '@/redux/features/slice';
import { profileadd,setName,setPhone,setEmail,setImage,setBanner,setAddress,setCity,setState,setPin,fetchUser} from '@/redux/features/slice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import Backbutton from '../../BackButton/page';
import Navbar from '../../profilenav/page'
import Image from 'next/image';

export default function Page({params}) {
 
  //  const localUser = JSON.parse(localStorage.getItem("user"));

  const {userid,name,phone,email,image,banner,address,city,state,pin,userDetails,likedPosts} = useSelector((state)=>state.postsReducer);

  
  const { profileupdate } = useSelector((state) => state.postsReducer);



  const handleImageChange = (e)=>{
    dispatch(setImage(e.target.files[0]))
  }
  const handleBannerChange=(e)=>{
    dispatch(setBanner(e.target.files[0]))
  }

 // console.log("userdetails",userDetails);




  const isValidPhoneNumber = (phoneNumber) => {
    const phoneRegex = /^[6789]\d{9}$/;
    return phoneRegex.test(phoneNumber);
  };
  
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  
   
  
  //   const data = {
  //     userid: userDetails.id,
  //     name: name,
  //     phone: phone,
  //     email: userDetails.email,
  //     image: image,
  //     banner: banner,
  //     address: address,
  //     city: city,
  //     state: state,
  //     pin: pin,
  //   };
  
  //  // console.log("data:", data);
  
  //   dispatch(profileadd(data));
  // };
  

  const handleSubmit = (e) => {
    e.preventDefault();
   
   
    if (!city || !/^[A-Za-z ]+$/.test(city)) {
      alert("Enter valid City Details again");
      return;
    }
    if (!state || !/^[A-Za-z ]+$/.test(state)) {
      alert("Enter valid State Details again");
      return;
    }
    if (!pin || !/^\d{6}$/.test(pin)) {
      alert("Enter valid 6-digit Pin Details again");
      return;
    }
    if (!phone || !/^[6-9]\d{9}$/.test(phone)) {
      alert("Enter valid 10-digit phone number again");
      return;
    }
  
    
    
    const data = {
      userid: userDetails.id,
      name: name,
      phone: phone,
      email: userDetails.email,
      image: image,
      banner: banner,
      address: address,
      city: city,
      state: state,
      pin: pin,
    };
    
   // console.log("data:",data)
  
    dispatch(profileadd(data));
  };
//console.log(params);

   // console.log("id:"+params.user);
  const dispatch = useDispatch();
  const {getPostsForUser} = useSelector((state) => state.postsReducer);

  // useEffect(() => {
  //   dispatch(fetchUserPosts(params.user));
  //   dispatch(fetchUser(params.user));
  // }, [params.user,dispatch]);


  const handleClick = (pid) => {
    const data = { postId: pid, userId: params.user };
   //// console.log('likedata:',data)
    dispatch(addlike(data));
    dispatch(fetchUserPosts(params.user));
    dispatch(fetchLikes(params.user));
  };


  useEffect(() => {
    dispatch(fetchLikes(params.user));
    dispatch(fetchUserPosts(params.user));
    dispatch(fetchUser(params.user));
    dispatch(updateprofile(params.user));

  }, [dispatch, params.user]); // Include dispatch and params.user
  


  //// console.log("getuser:",getPostsForUser);
 //// console.log(likedPosts)


  return (
   <>
   <Navbar/>

   <main role="main">
   <div
  className="jumbotron border-round-0 min-50vh"
  style={{
    backgroundImage: `url(http://localhost:8000/img/${profileupdate.banner})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '400px'
  }}
  
  
></div>

  <div className="container mb-4"  id='profileid'>
  <Image 
  layout="fixed"
  src={`http://localhost:8000/img/${profileupdate.image}`}
  className="mt-neg100 mb-4 rounded-circle"
  width={100}
  height={100}
  objectFit="cover"
  alt=''
/>

    <h1 className="font-weight-bold title" style={{marginLeft:"-  62px"}}>{userDetails.username}</h1>
    <p></p>


  </div>

<span style={{marginLeft:"46px"}} className='my-3'>

<Backbutton  />

</span>
  
  <div className="container-fluid mb-5 mt-2">
    <div className="row">




    <ul class="nav nav-tabs" role="tablist">
	<li class="nav-item">
		<a class="nav-link active" data-toggle="tab" href="#tabs-1" role="tab">POSTS</a>
	</li>
	<li class="nav-item">
		<a class="nav-link" data-toggle="tab" href="#tabs-2" role="tab"> Edit Profile</a>
	</li>
	
</ul>
<div class="tab-content">
	<div class="tab-pane active" id="tabs-1" role="tabpanel" style={{ marginTop:"100px"}}>

  
                <div className='row'>
                {/* {getPostsForUser.posts && getPostsForUser.posts.map((post) => ( */}
               


{/* demo */}
{getPostsForUser.posts && getPostsForUser.posts.map((post, index) => (


        <div className='col-md-3' key={post.id} >
            <div className="card card-pin my-3" style={{height:"300px"}}>
                    <a href={"/detail/" + post.id}>
                      <Image     layout="fixed"

                        className="card-img-top"
                        src={`http://localhost:8000/img/${JSON.parse(
                          post.photopath
                        )[0]}`}
                        alt="Card image cap"
                       width={100}
                       height={200}
                      />
                    </a>
                    <div
                      className="card-body"
                      style={{ height: "100px", backgroundColor: "#63656B" }}
                    >
                      <div className="mb-5">
                        <p
                          className="card-text text-white"
                          style={{ fontSize: "14px" }}
                        >
                          {post.title}
                        </p>
                        <hr />
                        <div className="d-flex justify-content-between">
                        <span className='ml-4' style={{ fontSize: "13px", color: "#fff" }}>
                          <FontAwesomeIcon
                            type="button"
                            icon={faHeart}
                            onClick={() => handleClick(post.id)}
                            className={
                              likedPosts && likedPosts.includes(post.id)
                                ? "heart-clicked"
                                : "heart"
                            }
                          />
                          <span className="mx-1">{post.likes}</span>
                        </span>
                        <a href={"/detail/" + post.id}>
                       <span className="mr-4" style={{ fontSize: "13px", color: "#fff" }}>
                          <i
                            className="fa fa-comment ml-4"
                            style={{ color: "#fff" }}
                          ></i>
                          <span className="mx-1">{post.comments}</span>
                        </span>
                        </a>

                        </div>
                        {/* <span style={{ fontSize: "13px", color: "#fff" }}>
                          <i
                            className="fa fa-eye ml-4"
                            style={{ color: "#fff" }}
                          ></i>
                          <span className="mx-1">2,877</span>
                        </span> */}
                      </div>
                    </div>
                  </div>
              </div>
             
              ))}
             


{/* demo end */}

           
          
                </div>
                </div>
       
   


  
	<div class="tab-pane" id="tabs-2" role="tabpanel"style={{ marginTop:"100px"}}>
   

    <div className='row'>
    <div className='col-md-6 '>
            <div className="card card-pin">
                
            {/* <form className='p-5'>
            <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">userid:</label>
 <input type="text"  class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" Value={userDetails.id}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Name:</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  Value={userDetails.username}
     onChange={(e)=>dispatch(setName(e.target.value))}
     />
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
     value={userDetails.email}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Phone</label>
    <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
       onChange={(e)=>dispatch(setPhone(e.target.value))} Value={profileupdate.phone}
    />
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Image</label>
    <img
  class="rounded-circle p-2 mt-3"
  src={`http://localhost:8000/img/${profileupdate.image}`}
  alt="Card image cap"
  width="100"
  height="100"
/>

    <input type="file" class="form-control" id="exampleInputPassword1"
       onChange={handleImageChange}
    />
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Banner Image</label>
    <img
  class="rounded-circle p-2 mt-3"
  src={`http://localhost:8000/img/${profileupdate.banner}`}
  alt="Card image cap"
  width="100"
  height="100"
/>

    <input type="file" class="form-control" id="exampleInputPassword1"
    
       onChange={handleBannerChange}
    />
  </div>
  
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">City</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
 onChange={(e)=>dispatch(setCity(e.target.value))} Value={updateprofile.city}

    />
  </div>

  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Address</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
  Value={profileupdate.address}

    />
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">State</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
       onChange={(e)=>dispatch(setState(e.target.value))} Value={profileupdate.state}
    />
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Pin</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
       onChange={(e)=>dispatch(setPin(e.target.value))} Value={profileupdate.pin}
    />
  </div>
  <button type="submit" onClick={handleSubmit} class="btn btn-primary">Submit</button>
</form> */}









<form className='p-5'>
            <div class="mb-3">
 <input type="hidden"  class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" Value={userDetails.id}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Name:</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  Value={userDetails.username}
     onChange={(e)=>dispatch(setName(e.target.value))}
     />
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" readOnly class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
     value={userDetails.email}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Phone</label>
    <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
       onChange={(e)=>dispatch(setPhone(e.target.value))} Value={profileupdate.phone}
    />
  </div>
  <div class="mb-3" >
    <label for="exampleInputPassword1" class="form-label">Image</label>
    <Image
  layout="fixed"
  class="rounded-circle p-2 mt-3"
  src={`http://localhost:8000/img/${profileupdate.image}`}
  alt="Card image cap"
  width={100}
  height={100}
/>


    <input type="file" class="form-control" id="exampleInputPassword1"
       onChange={handleImageChange}
    />
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Banner Image</label>
    <Image
  class="rounded-circle p-2 mt-3"
  src={`http://localhost:8000/img/${profileupdate.banner}`}
  alt="Card image cap"
  layout="fixed"
  width={100}
  height={100}
/>

    <input type="file" class="form-control" id="exampleInputPassword1"
    
       onChange={handleBannerChange}
    />
  </div>
  
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">City</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
 onChange={(e)=>dispatch(setCity(e.target.value))} Value={profileupdate.city}

    />
  </div>

  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Address</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
  Value={profileupdate.address}  onChange={(e)=>dispatch(setAddress(e.target.value))}

    />
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">State</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
       onChange={(e)=>dispatch(setState(e.target.value))} Value={profileupdate.state}
    />
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Pin</label>
    <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
       onChange={(e)=>dispatch(setPin(e.target.value))} Value={profileupdate.pin}
    />
  </div>
  <button type="submit" onClick={handleSubmit} class="btn btn-primary">Submit</button>
</form>
        </div>
        
            </div>
          
          
          
    </div>
	</div>




</div>









    </div>
  </div>
</main>




   </>
  )
}
