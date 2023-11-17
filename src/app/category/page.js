"use client"

import { fetchtags } from "@/redux/features/slice";
import { useDispatch, useSelector } from 'react-redux';
import React, {useState, useEffect } from 'react';
import Image from "next/image";
export default function Page() {
  const [isContentVisible, setIsContentVisible] = useState(false); // Initially visible

  const toggleContent = () => {
    setIsContentVisible(!isContentVisible);
  };    
  
  const dispatch = useDispatch();
  const {tags} = useSelector((state)=>state.postsReducer)
 // console.log("tags",tags);
  useEffect(() => {
   dispatch(fetchtags());
}, [dispatch]);


  return (
    <>
      <h4 className='text-center mt-5 mb-5'>
        <b>Life is what happens when you're busy making memes. EXPLORE TAGS</b>
      </h4>
     

      <div className='container'>
      <div className='row'>
  <div className='col-md-6'>
    <h5><b>EXPLORE TAGS</b> </h5>
  </div>
  
  {/* <div className='col-md-6 text-right'>
    <button
      type="button"
      className="btn btn-sm btn-primary mb-2"
      onClick={toggleContent}
    >
      {isContentVisible ? 'LESS TAGS' : 'MORE TAGS'} <span style={{ color:"#fff",fontSize:"25px" }}>+</span>
    </button>
  </div> */}
</div>
<div className="row">
  <h5 className="text-center pb-4 pt-3"><b>Top Trending #Hashtags</b></h5>
</div>

<div className='row'>
    
{tags && tags.map((tag, index) => (
<div className='col-md-2' key={tag.id}>
           <a href={"/tags/" + tag.name}>
              <figure>
                <picture>
                  <Image
                    src="/assets/img/cardimg.jpg"
                    layout="responsive"
                    alt="The Ramp game promotional image"
                    id='cardimg'
                    width={100}
                    height={100}
                  />
                </picture>
                <figcaption className='text-center'>
                  <Image
                    src="/assets/img/cardimg.jpg"
                    id='cardimg'
                    aria-hidden="true"
                    alt=""
                    width={100}
                    height={100}
                  />
                  <section className="adaptive-glass" style={{ marginLeft: "-15px" }}>
                    <p className='cardtext1' style={{ fontSize: "16px" }}>
                      <b>#{tag.name}</b>
                    </p>
                    <p
                      className='cardtext2'
                      style={{ marginTop: "-25px", fontSize: "10px" }}
                    >
                      
                      <b>{tag.total_posts} Posts</b>
                    </p>
                  </section>
                </figcaption>
              </figure>
              </a>
</div>
))}






</div>


      {isContentVisible && (
        <div className='row g-0'>
        
           
          

         
        </div>
 )}
       
      </div>
    </>
  );
}
