"use client"

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addlike, authorpost, fetchLikes } from '@/redux/features/slice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
 import Navbar from '../../navbar/page'
 import Image from 'next/image';

export default function Page({params}) {
 
  // const localUser = JSON.parse(localStorage.getItem("user"));
  const localUser = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem("user")) : null;
 
  //console.log("local",localUser);

   //console.log('abhi:',params);

  const {authorpostdata,userDetails,likedPosts} = useSelector((state)=>state.postsReducer);


  //console.log("userdetails",userDetails);
  //console.log("authorpostdata",authorpostdata)

 

    //console.log("id:"+params.user);
  const dispatch = useDispatch();
  

  // useEffect(() => {
  //   dispatch(authorpost(params.user));
  //   dispatch(fetchLikes(localUser.id));

  // }, [dispatch, params.user]);
  
  

  useEffect(() => {
    const fetchAuthorPost = async () => {
      if (localUser) {
        await dispatch(authorpost(params.user));

        await dispatch(authorpost(params.user));
        await dispatch(fetchLikes(localUser.id));
      }
    };

    fetchAuthorPost();
  }, [dispatch, params.user, localUser]);



  // //console.log("getuser",getPostsForUser)
  const handleClick = (pid) => {
    const data = { postId: pid, userId: localUser.id };
    //console.log('likedata:',data)
    dispatch(addlike(data));
    dispatch(authorpost(params.user));
  };

  return (
   <>
   <Navbar/>
   

   <main role="main">

 <div>
  <div
    className="jumbotron border-round-0 min-50vh"
    style={{
      backgroundImage:authorpostdata.profileAndPosts && 
        `url(http://localhost:8000/img/${authorpostdata.profileAndPosts.banner})`
    }}
  ></div>
  <div className="container mb-4">
  {authorpostdata.profileAndPosts?.image ? (
  <Image
    src={`http://localhost:8000/img/${authorpostdata.profileAndPosts.image}`}
    className="mt-neg100 mb-4 rounded-circle"
    layout="fixed"
    width={120}
    height={120}
    alt=''
  />
) : (
  <Image
    src="/assets/img/av.png"
    className="mt-neg100 mb-4 rounded-circle"
    layout="fixed"
    width={120}
    height={120}
    alt=''
  />
)}



  </div>
</div>

<h1 className="font-weight-bold title" style={{marginLeft:"60px"}}>{authorpostdata.profileAndPosts && authorpostdata.profileAndPosts.name}</h1>

  {/* <div className="container-fluid mb-5">
    <div className="row">


    <h3>@{localUser.username}</h3>
    <h1 className="font-weight-bold title">{userDetails.username}</h1>

    <ul class="nav nav-tabs" role="tablist">
	<li class="nav-item">
		<a class="nav-link active" data-toggle="tab" href="#tabs-1" role="tab">POSTS</a>
	</li>
	
	
</ul>
<div class="tab-content">
	<div class="tab-pane active" id="tabs-1" role="tabpanel" style={{ marginTop:"100px"}}>

  
                <div className='row'>
               
                {authorpostdata.authorPosts &&
            authorpostdata.authorPosts.map((p) => (
              <div className='col-md-3' key={p.id}>
                <div className='card card-pin'>
                  {p.photopath ? (
                    <img
                      src={`http://localhost:8000/img/${JSON.parse(p.photopath)[0]}`}
                      alt='Card image cap'
                      style={{ width: '100%', height: '250px' }}
                    />
                  ) : null}
                  <div className='overlay'>
                    <h2 className='card-title title'>{p.title}</h2>
                    <p>{p.description}</p>
                    <div className='more'></div>
                  </div>
                </div>
              </div>
            ))}


          
            
           
          
                </div>
       
       
	</div>


  

</div>









    </div>
  </div> */}

  <div className="container-fluid">
           

           <div className="row">
             <div className="card-columns">
             {authorpostdata.authorPosts &&
            authorpostdata.authorPosts.map((p) => (
                 <div className="card" key={p.id}>
                   <a href={"/detail/" + p.id}>
                   <Image
                      src={`http://localhost:8000/img/${JSON.parse(p.photopath)[0]}`}
                      alt='Card image cap'
                      layout="responsive"
                     width={1000}
                     height={250}
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
                         {p.title}
                       </p>
                       <hr />
                       <div className="d-flex justify-content-between">
                       <span className='ml-4' style={{ fontSize: "13px", color: "#fff" }}>
                         <FontAwesomeIcon
                           type="button"
                           icon={faHeart}
                           onClick={() => handleClick(p.id)}
                           className={
                             likedPosts && likedPosts.includes(p.id)
                               ? "heart-clicked"
                               : "heart"
                           }
                         />
                         <span className="mx-1">{p.likes}</span>
                       </span>
                     <a href={"/detail/" + p.id}>
                      <span className="mr-4" style={{ fontSize: "13px", color: "#fff" }}>
                         <i
                           className="fa fa-comment ml-4"
                           style={{ color: "#fff" }}
                         ></i>
                         <span className="mx-1">{p.comments}</span>
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
               ))}
             </div>
           </div>
         </div>
</main>




   </>
  )
}
