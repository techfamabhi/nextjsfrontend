'use client';

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authorpost } from '@/redux/features/slice';
import Image from 'next/image';

export default function Page({ params }) {
  const localUser = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem("user")) : null;

  console.log("local", localUser);
  console.log('abhi:', params);

  const { authorpostdata, userDetails } = useSelector((state) => state.postsReducer);

  console.log("userdetails", userDetails);
  console.log("authorpostdata", authorpostdata);

  console.log("id:" + params.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAuthorPost = async () => {
      if (localUser) {
        await dispatch(authorpost(params.user));
      }
    };

    fetchAuthorPost();
  }, [dispatch, params.user, localUser]);

  return (
    <>
      {/* <Navbar/> */}
      <main role="main">
        <div
          className="jumbotron border-round-0 min-50vh"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1522204657746-fccce0824cfd?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=84b5e9bea51f72c63862a0544f76e0a3&auto=format&fit=crop&w=1500&q=80)"
          }}
        ></div>
        <div className="container mb-4">
          {/* <Image
            src="../../assets/img/av.png"
            className="mt-neg100 mb-4 rounded-circle"
            width={128}
            height={120}
            alt=''
          /> */}
          <h1 className="font-weight-bold title">{userDetails.username}</h1>
          <p></p>
        </div>

        <div className="container-fluid mb-5">
          <div className="row">
            <ul class="nav nav-tabs" role="tablist">
              <li class="nav-item">
                <a class="nav-link active" data-toggle="tab" href="#tabs-1" role="tab">POSTS</a>
              </li>
            </ul>
            <div class="tab-content">
              <div class="tab-pane active" id="tabs-1" role="tabpanel" style={{ marginTop: "100px" }}>
                <div className='row'>
                {Array.isArray(authorpostdata) && authorpostdata.map((p) => (
                    <div className='col-md-3' key={p.id}>
                      <div className="card card-pin">
                        {/* <Image
                          className="card-img"
                          src="../assets/img/11.jpg"
                          alt="Card image"
                          style={{ width: "1000px", height: "350px" }}
                        /> */}
                        <div className="overlay">
                          <h2 className="card-title title">{p.title}</h2>
                          <div className="more">
                            <a href="post.html">
                              <i className="fa fa-arrow-circle-o-right" aria-hidden="true" />
                              More
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className='col-md-3'>
                    <div className="card card-pin">
                      {/* <Image
                        className="card-img"
                        src="../assets/img/11.jpg"
                        alt="Card image"
                        width={1000}
                        height={350}
                        // style={{ width:"1000px",height:"350px"}}
                      /> */}
                      <div className="overlay">
                        <h2 className="card-title title">Nice</h2>
                        <div className="more">
                          <a href="post.html">
                            <i className="fa fa-arrow-circle-o-right" aria-hidden="true" />
                            More
                          </a>
                        </div>
                      </div>
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
