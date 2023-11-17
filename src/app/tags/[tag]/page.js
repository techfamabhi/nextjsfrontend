"use client"
import React, { useEffect, useState } from "react";
import Navbar from "../../navbar/page";
import { useDispatch, useSelector } from "react-redux";
import { addlike, fetchLikes, fetchTagPosts } from "@/redux/features/slice";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import Backbutton from "../../BackButton/page";
import Image from "next/image";
import { navigate } from 'next/navigation';  // Import navigate directly

export default function Page({ params }) {
    const [isClicked, setIsClicked] = useState(false);
    // const router = useRouter();

    const localUser = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : null;
   // console.log('localUser', localUser);

    const tag = params.tag;
   // console.log('tagName:', tag)

    const dispatch = useDispatch();

    const { likedPosts, tagPosts } = useSelector((state) => state.postsReducer);

 //   console.log(tagPosts)

    useEffect(() => {
        const fetchData = async () => {
            try {
                await dispatch(fetchLikes(localUser ? localUser.id : null));
                await dispatch(fetchTagPosts(tag));
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [dispatch, localUser, tag]);

    const handleClick = (pid) => {
        const data = { postId: pid, userId: localUser ? localUser.id : null };
      //  console.log('likedata:', data)
        dispatch(addlike(data));
        dispatch(fetchTagPosts(tag));
    };

    return (
        <>
            <Navbar />
            <span style={{ marginLeft: "60px" }}>
                <Backbutton />
            </span>

            <h3 className="my-3" style={{ marginLeft: "55px" }}>Top Trending #Hashtags is -  #{tag}</h3>

            <main role="main">
                <section className="mt-4 mb-5">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="card-columns">
                                {tagPosts && tagPosts.map((p) => (
                                    <div className="card" key={p.id}>
                                        <a href={"/detail/" + p.id}>
                                            <Image  
                                            layout="responsive"
                                            width={100}
                                                     height={100}
                                                className="card-img-top"
                                                src={`http://localhost:8000/img/${JSON.parse(
                                                    p.photopath
                                                )[0]}`}
                                                alt="Card image cap"
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
