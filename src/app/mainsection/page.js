"use client";

import React, { useEffect, useState } from "react";
import Navbar from "../navbar/page";
import Category from "../category/page";
import { useDispatch, useSelector } from "react-redux";
import { addlike, fetchPosts, fetchLikes, commentcount,searchByUsername } from "@/redux/features/slice";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { setSearchQuery } from "@/redux/features/slice";
import Image from "next/image";

export default function Page() {
  const [isClicked, setIsClicked] = useState(false);

    // var localUser ={};
 //  const localUser = JSON.parse(localStorage.getItem("user"));
 const localUser = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem("user")) : null;

 

  const dispatch = useDispatch();

  const { posts, likedPosts,commentcountdata,searchq,searchQueryusername } = useSelector((state) => state.postsReducer);


  //start search code 
  const searchQuery = useSelector((state) => state.postsReducer.searchQuery);

  

  // Filter the posts based on the search query
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

// end search code



const handlesearchusername = (username) => {
  dispatch(searchByUsername(username.target.value));
};

  // if (localUser == null) {
  //   window.location.href = "/login";
  // }

  // useEffect(() => {
  //   dispatch(fetchLikes(localUser.id));
  //   dispatch(fetchPosts());
  // }, []);




  useEffect(() => {
    const fetchData = async () => {
        if (localUser) {
         await dispatch(fetchLikes(localUser.id));
         await dispatch(fetchPosts());
         await dispatch(commentcount());
        }
    };

    fetchData();
}, [dispatch, localUser]);



  

  const handleClick = (pid) => {
    const data = { postId: pid, userId: localUser.id };
   // console.log('likedata:',data)
    dispatch(addlike(data));
    dispatch(fetchPosts());
  };

 // console.log('LP:',likedPosts);



  return (
    <>
      <Navbar />

{
  localUser ?(
    <Category />
  ):(
    <h2 className="mt-5 text-center">Login First To See All Posts</h2>
  )
}
      {/* <Category /> */}


      {/* <form className="bd-search hidden-sm-down ml-5 my-5" style={{ width: '800px' }}>
<div class="form-group">
<input
                    className="form-control bg-graylight border-0 font-weight-bold"
                    type="text"
                    placeholder="Search By Username..."
                    onChange={handlesearchusername}
                  />
  <select class="form-control" name="" id="">
    <option></option>
   
  </select>
</div>
</form> */}


      <main role="main">
        <section className="mt-4 mb-5">
          <div className="container-fluid">
           

            <div className="row">
              <div className="card-columns">
                {filteredPosts.map((p) => (
                  <div className="card" key={p.pid}>
                    <a href={"/detail/" + p.pid}>
                      <Image
                      layout="responsive"
                        className="card-img-top"
                        src={`http://localhost:8000/img/${JSON.parse(
                          p.photopath
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
                           {p.title
                            .split(' ')
                            .slice(0, 4)
                            .join(' ')}
                        
                        </p>
                        <hr />
                        <div className="d-flex justify-content-between">
                        <span className='ml-4' style={{ fontSize: "17px", color: "#fff" }}>
                          <FontAwesomeIcon
                            type="button"
                            icon={faHeart}
                            onClick={() => handleClick(p.pid)}
                            className={
                              likedPosts && likedPosts.includes(p.pid)
                                ? "heart-clicked"
                                : "heart"
                            }
                          />
                          <span className="mx-1">{p.likes}</span>
                        </span>
                        <a href={"/detail/" + p.pid}>
                        <span className="mr-4" style={{ fontSize: "17px", color: "#fff" }}>
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
        </section>
      </main>
    </>
  );
}
