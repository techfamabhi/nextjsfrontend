"use client";
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLikedPosts, deleteLike } from '@/redux/features/slice';
import Navbar from '../../navbar/page';
import BackButton from '@/app/BackButton/page';
import Image from 'next/image';

// Import the dynamic 'useRouter' hook outside the component
//const { useRouter } = require('next/router');

export default function Page() {
    const { fetchedLikedPosts } = useSelector((state) => state.postsReducer);
    const dispatch = useDispatch();
    //const router = useRouter();  // Use 'useRouter' hook directly

    const localUser = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem("user")) : null;

    useEffect(() => {
        const fetchData = async () => {
            if (localUser) {
                await dispatch(fetchLikedPosts(localUser.id));
            }
        };

        fetchData();
    }, [dispatch, localUser]);

    const handleDelete = async (id) => {
        await dispatch(deleteLike(id));
        await dispatch(fetchLikedPosts(localUser.id));
    }

    const handlePostDetail = (post_id) => {
        router.push(`/detail/${post_id}`);
    }

    return (
        <>
            <Navbar />
            <div style={{ marginLeft: "128px" }}>
                <BackButton />
            </div>
            <div className="container">
                <div className="row justify-content-center mt-3">
                    <div className="col-9">
                        {fetchedLikedPosts && fetchedLikedPosts.map((likes, index) => (
                            <div className="card mt-2" key={likes.id}>
                                <div className="card-horizontal">
                                    <div className='row'>
                                        <div className="col-md-2" onClick={() => handlePostDetail(likes.post_id)}>
                                            <div className="img-square-wrapper">
                                                <Image layout="fixed"  className="rounded-circle p-2 mt-3" src={`http://localhost:8000/img/${JSON.parse(likes.photopath)[0]}`} alt="Card image cap" width="100" height="100" />
                                            </div>
                                        </div>
                                        <div className='col-md-9'>
                                            <div className="card-body">
                                                <h5 className="card-title">{likes.title}</h5>
                                                <Image layout='fixed' width={35}
                                                height={35} className='mr-2'
                                                 src="/assets/img/heart.gif" alt="heart-suit" />
                                                <button type="button" onClick={() => handleDelete(likes.lid)}>
                                                 
                                                 <Image  layout="fixed" width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/filled-trash.png" alt="filled-trash"/>
                                                </button>
                                                <p className="card-text">{likes.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-footer">
                                        <small className="text-muted">{likes.created_at}</small>
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
