"use client"

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchQuery } from '@/redux/features/slice';
// import Navbar from "../navbar/page.js";
import Image from 'next/image';
export default function Page() {
 // const localUser = JSON.parse(localStorage.getItem('user'));
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = '/login';
  };

  const dispatch = useDispatch();
  const searchQuery = useSelector((state) => state.postsReducer.searchQuery);

  const handleSearchInputChange = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
    {/* <Navbar/> */}
    <div className="bgmain">
      <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top" style={{ backgroundColor: '#171544' }}>
        <a className="navbar-brand font-weight-bolder mr-3" href="/">
          <b>PicFeed</b>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className={`collapse navbar-collapse${isMenuOpen ? ' show' : ''}`} id="navbarsDefault">
          <ul className="navbar-nav mr-auto align-items-center">
            <li className="nav-item">
              <button type="submit" className="btn btn-primary btn-sm">
                {/* <Image width="30" height="30" src="https://img.icons8.com/ios-filled/50/000000/plus-key.png" alt="plus-key" /> */}
                <a href="/newpost" style={{ color: 'white' }}>New Post</a>
              </button>
            </li>
            <li className="nav-item">
              <form className="bd-search hidden-sm-down ml-5" style={{ width: '800px' }}>
                <input
                  className="form-control bg-graylight border-0 font-weight-bold"
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={handleSearchInputChange}
                />
                <div className="dropdown-menu bd-search-results" id="search-results" />
              </form>
            </li>
          </ul>

         

          <ul className="navbar-nav ml-auto align-items-center mr-3">
          <li className="nav-item">
              <a className="nav-link" href={'/author/liked'}>
              {/* <Image width="40" height="40" src="https://img.icons8.com/emoji/48/heart-suit.png" alt="heart-suit"/>
               */}
                        </a>
            </li>

            <li className="nav-item mr-2">
              <a className="nav-link" href={'/author/comment'}>
              {/* <Image width="35" height="35" src="https://img.icons8.com/ios/50/comments--v1.png" alt="comments--v1"/>       */}
                      
              </a>
            </li>
            
            <li className="nav-item">
              {/* <a className="nav-link" href={'/author/' + localUser.id}> */}
                <Image  className="rounded-circle mr-2" src="/assets/img/av.png"  alt="User"  width={30} height={30}/>
                {/* <span className="align-middle">{localUser.username}</span> */}
              {/* </a> */}
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/login">
                <button type="button" onClick={handleLogout} className="btn btn-primary btn-sm">
                  Logout
                </button>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    </>
  );
}
