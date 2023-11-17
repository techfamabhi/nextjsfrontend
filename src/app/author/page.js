"use client"

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserPosts } from '@/redux/features/slice';

export default function Page({ params }) {
  console.log(params);
  const dispatch = useDispatch();
  const getPostsForUser = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchUserPosts(params.user));
  }, [params.user, dispatch]);

  console.log(getPostsForUser);

  return (
    <>
      <main role="main">
        {/* Your other content here */}
        {getPostsForUser && getPostsForUser.map((post) => (
          <div className="col-md-3" key={post.id}>
            <div className="card card-pin">
              <p>{post.title}</p>
            </div>
          </div>
        ))}
      </main>
    </>
  );
}
