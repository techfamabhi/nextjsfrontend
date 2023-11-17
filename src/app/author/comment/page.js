'use client';

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCommentsPosts, deletecomment } from '@/redux/features/slice';
import Link from 'next/link';
import Navbar from '../../navbar/page';
import BackButton from '@/app/BackButton/page';
import Image from 'next/image';

export default function Page() {
  const localUser = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : null;

  console.log('localUser', localUser);

  const { fetchedCommentedPosts } = useSelector((state) => state.postsReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    if (localUser) {
      dispatch(getCommentsPosts(localUser.id));
    }
  }, [dispatch, localUser]);

  console.log('fetchedCommentedPosts', fetchedCommentedPosts);

  const handleDelete = (id) => {
    dispatch(deletecomment(id));
    dispatch(getCommentsPosts(localUser.id));
  };

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
      <Navbar />
      <div style={{ marginLeft: '128px' }}>
        <BackButton />
      </div>
      <div className="container">
        <div className="row justify-content-center mt-3">
          <div className="col-9">
            {fetchedCommentedPosts &&
              fetchedCommentedPosts.map((likes) => (
                <div className="card mt-2" key={likes.id}>
                  <div className="card-horizontal">
                    <div className="row">
                      <div className="col-md-2">
                        <Link href={"/detail/" + likes.postid}>
                          <div className="img-square-wrapper">
                            <Image   layout="fixed"
                              className="rounded-circle p-2 mt-3"
                              src={`http://localhost:8000/img/${JSON.parse(likes.photopath)[0]}`}
                              alt="Card image cap"
                              width="100"
                              height="100"
                            />
                          </div>
                        </Link>
                      </div>
                      <div className="col-md-9">
                        <div className="card-body">
                          <h5 className="card-title">{likes.title}</h5>
                          <Image className="mr-2" 
                          layout='fixed' width={35}
                          height={35} 
                          src="/assets/img/comment2.gif" alt="heart-suit" />
                          <button type="button" onClick={() => handleDelete(likes.lid)}>
                            <Image layout="fixed"  width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/filled-trash.png" alt="filled-trash"/>
                          </button>
                          <p className="card-text">{likes.description}</p>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer">
                      <small className="text-muted">{formatDateAgo(likes.created_at)}</small>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
