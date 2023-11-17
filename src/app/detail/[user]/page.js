"use client"

import React, { useEffect } from 'react'
import Navbar from '../../navbar/page';
import { addComment, fetchParticularPost, setComment, fetchComments,authorpost } from '@/redux/features/slice';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import Backbutton from '../../BackButton/page';
import Image from 'next/image';
export default function Page({params}) {

   // console.log(params);
    const {detailPost, comment, postComments} = useSelector((state)=>state.postsReducer);

   // const localUser = JSON.parse(localStorage.getItem("user"));
   const localUser = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem("user")) : null;

    const dispatch = useDispatch();

    // useEffect(()=>{
    //     dispatch(fetchParticularPost(params.user));
    //     dispatch(fetchComments(params.user));
    // },[]);

    useEffect(() => {
      dispatch(fetchParticularPost(params.user));
      dispatch(fetchComments(params.user));
    }, [dispatch, params.user]);
    
    //console.log(fetchComments);

    const handleSubmit = ()=>{
      const data = { postId: params.user, userId: localUser.id, text:comment };
      dispatch(addComment(data));
      dispatch(fetchComments(params.user));

    }

   // console.log('detailpost:',detailPost);
   // console.log(postComments)

    // console.log(detailPost);
    // console.log(detailPost.photopath);
    function formatDateAgo(created_at) {
      const currentDate = new Date();
      const postedDate = new Date(created_at);
      const timeDifference = currentDate - postedDate;
      const daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    
      if (daysAgo > 1) {
        return `${daysAgo} days ago`;
      } else if (daysAgo === 1) {
        return '1 day ago';
      } else {
        return 'today';
      }
    }
    return (
        <>
        <Navbar/>
        <span style={{marginLeft:"120px"}}>
        <Backbutton/>
        </span>
        

            <div class="container mt-4">
            <h3 style={{ marginLeft: "20px" }}>{detailPost.title}</h3>

                <div class="row">

                   
                    <div className='col-md-8'>

                        <div class="card">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">
                                    <Link href={`/authorpost/${detailPost.userid}`} onClick={()=>dispatch(authorpost(detailPost.userid))} ><span><b>@{detailPost.username}</b></span> </Link><br />
                                    {/* <span>103,522 Views•21h</span> */}
                                </li>
                                <li class="list-group-item">
                                {detailPost.photopath ? (
  <Image
    src={`http://localhost:8000/img/${JSON.parse(detailPost.photopath)[0]}`}
    alt="Card image cap"
    layout="responsive"
   width={1000}
   height={500}
  />
) : null}

                                    {/* <span>
                                    <i class="fa fa-thumbs-up" aria-hidden="true" style={{ fontSize:"25px",color:"#000"}}></i>
                                    </span>
                                    <span>
                                    <i class="fa fa-comment ml-3 mt-1" aria-hidden="true" style={{ fontSize:"25px",color:"#000"}}></i>
                                    </span>
                                    <span>
                                    <i class="fa fa-share ml-3 mt-1" aria-hidden="true" style={{ fontSize:"25px",color:"#000"}}></i>
                                    </span> */}
                                    
                                </li>
                                
                                <li class="list-group-item">
                                    {detailPost.description}
                                </li>
                            </ul>
                        </div>

                        
            <div className="bootdey" style={{width:"106%",marginLeft:"-18px"}}>
      <div className="bootstrap snippets">
        <div className="panel">
          <div className="panel-body">
            <textarea
              className="form-control"
              name='comment'
              rows={3}
              placeholder="comment ....."
              onChange={(e)=>dispatch(setComment(e.target.value))}
              value={comment}
            />
            <div className="mar-top clearfix">
              <button className="btn btn-sm btn-primary pull-right" onClick={handleSubmit} type="button">
                Add Comment
              </button>
              {/* <a className="btn btn-trans btn-icon fa fa-video-camera add-tooltip" href="#" />
              <a className="btn btn-trans btn-icon fa fa-camera add-tooltip" href="#" />
              <a className="btn btn-trans btn-icon fa fa-file add-tooltip" href="#" /> */}
            </div>
          </div>
        </div>
        <div className="panel">
          <div className="panel-body">
            {/* Newsfeed Content */}
            {postComments && postComments.map((p,index)=>(
              <div className="media-block"  key={p.id}>
              <a className="media-left mx-3" href="#">
              <Image
  className="img-circle img-sm"
  // layout="responsive"
  alt="Profile Picture"
  width={20}
  height={20}
  style={{ borderRadius: "25px" }}
  src={`http://localhost:8000/img/${p.image}`}
/>

              </a>
              
              <div className="media-body">
                <div className="mar-btm">
                  {/* <a href="#" className="btn-link text-semibold media-heading box-inline">
                    {p.username}
                  </a> */}
                  <Link href={`/authorpost/${p.userid}`} onClick={()=>dispatch(authorpost(p.userid))} ><span><b>@{p.username}</b></span> </Link><br />
                                    {/* <span>103,522 Views•21h</span> */}
                  <p className="text-muted text-sm">
                    <i className="fa fa-mobile fa-lg" /> {formatDateAgo(p.created_at)}
                  </p>
                </div> 
                <p>
                  {p.text}
                </p>
                <div className="pad-ver">
                  <div className="btn-group">
                    <a className="btn btn-sm btn-default btn-hover-success" href="#">
                      <i className="fa fa-thumbs-up" />
                    </a>
                    <a className="btn btn-sm btn-default btn-hover-danger" href="#">
                      <i className="fa fa-thumbs-down" />
                    </a>
                  </div>
                  <a className="btn btn-sm btn-default btn-hover-primary" href="#">
                    Comment
                  </a>
                </div>
                <hr />
                {/* Comments */}
              </div>
            </div>
            ))}
            
          </div>
        </div>
      </div>
    </div>



                    </div>
                    {/* <div className='col-md-4'>

                        <img src="../../assets/img/11.jpg" alt="Card image cap" style={{ width: "100%" }} />
                        <div className='mt-2'>
                            <span ><b>HIGHEST SCORING TODAY</b></span>
                            <hr />
                            <div style={{ overflowY: "scroll", overflowX: "hidden", height: "180px", width: "100%"}}>

                                <div className='row mt-1'>
                                    <div className='col-md-5'>
                                        <img src="../../assets/img/11.jpg" alt="Card image cap" style={{ width: "100%", borderRadius: "5px" }} />

                                    </div>
                                    <div className='col-md-7'>
                                        <b style={{ fontSize: "13px" }}>Abhishek Gouda</b>
                                    </div>
                                </div>
                                <div className='row mt-1'>
                                    <div className='col-md-5'>
                                        <img src="../../assets/img/11.jpg" alt="Card image cap" style={{ width: "100%", borderRadius: "5px" }} />

                                    </div>
                                    <div className='col-md-7'>
                                        <b style={{ fontSize: "13px" }}>Abhishek Gouda</b>

                                    </div>
                                </div>
                                <div className='row mt-1'>
                                    <div className='col-md-5'>
                                        <img src="../../assets/img/11.jpg" alt="Card image cap" style={{ width: "100%", borderRadius: "5px" }} />

                                    </div>
                                    <div className='col-md-7'>
                                        <b style={{ fontSize: "13px" }}>Abhishek Gouda</b>
                                    </div>
                                </div>
                                <div className='row mt-1'>
                                    <div className='col-md-5'>
                                        <img src="../../assets/img/11.jpg" alt="Card image cap" style={{ width: "100%", borderRadius: "5px" }} />

                                    </div>
                                    <div className='col-md-7'>
                                        <b style={{ fontSize: "13px" }}>Abhishek Gouda</b>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <img src="../../assets/img/11.jpg" className='mt-5' alt="Card image cap" style={{ width: "100%" }} />

                    </div> */}

                </div>
            </div>






            








        </>
    )
}


