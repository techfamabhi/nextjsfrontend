"use client"

import React, { useState } from 'react';
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchQuery, searchByUsername } from '@/redux/features/slice';
// import Navbar from "../navbar/page.js";
import Image from 'next/image';
import { Link } from 'react-router-dom';
export default function Page() {
 // const localUser = JSON.parse(localStorage.getItem('user'));
 const localUser = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem("user")) : null;
 
 const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = '/login';
  };



  // const handleLogout = () => {
  //   localStorage.clear();
  //   token=localUser.token
  //   const data={
  //     tokenId:token
  //   }
  //   dispatch(logout(data))
  //   // window.location.href = '/login';
  // };
  const dispatch = useDispatch();




  
  const {searchQuery,searchdata} = useSelector((state) => state.postsReducer);

  const handleSearchInputChange = (e) => {
    // dispatch(setSearchQuery(e.target.value));
        const searchTerm = e;
        // console.log(searchTerm)
        dispatch(searchByUsername(searchTerm));

  };

  const handleChange = (e)=>{
    if(e.value.type=="user"){
      window.location.href="/authorpost/"+e.value.val;
    }

    else if(e.value.type=='tag'){
      window.location.href="/tags/" + e.value.val;
    }
  }

  const options = searchdata && searchdata;



//console.log(searchdata);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
    {/* <Navbar/> */}
    <div className="bgmain">
      
   {
    localUser ? (
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
           {
            localUser?(
              <button type="submit" className="btn btn-primary btn-sm">
              {/* <Image width="30" height="30" src="https://img.icons8.com/ios-filled/50/000000/plus-key.png" alt="plus-key" /> */}
              <a href="/newpost" style={{ color: 'white' }}>New Post</a>
            </button>
            ):(
              <p></p>
            )
           }
          </li>
          <li className="nav-item">
            <form className="bd-search hidden-sm-down ml-5" style={{ width: '800px' }} >
              {/* <input
                className="form-control bg-graylight border-0 font-weight-bold"
                type="text"
                placeholder="Search for #tags or @users"
                onChange={handleSearchInputChange}
              /> */}


{/* <input list="encodings" className="form-control bg-graylight border-0 font-weight-bold"  placeholder="Search for #tags or @users"
                onChange={handleSearchInputChange} type='text'/>
<datalist id="encodings" className='form-control bg-graylight'>
 <option value="1">1</option>
 <option value="2">2</option>
 <option value="3">3</option>
 <option value="4">4</option>
 <option value="5">5</option>
 <option value="6">6</option>

</datalist> */}


<Select
multiple={false}
options={options}
placeholder='Search for #tags and @users'
onInputChange={(e)=>handleSearchInputChange(e)} 
onChange={(e)=>handleChange(e)}

/>

              <div className="dropdown-menu bd-search-results" id="search-results" />
            </form>
          </li>
        </ul>

       

        <ul className="navbar-nav ml-auto align-items-center mr-3">
        <li className="nav-item">
            <a className="nav-link" href={'/author/liked'}>
            <Image  layout="responsive" width="40" height="40" src="https://img.icons8.com/emoji/48/heart-suit.png" alt="heart-suit"/>
            
                      </a>
          </li>

          <li className="nav-item mr-2">
            <a className="nav-link" href={'/author/comment'}>
            <Image width="35" layout="responsive" height="35" src="https://img.icons8.com/ios/50/comments--v1.png" alt="comments--v1"/>      
                    
            </a>
          </li>
          
          <li className="nav-item">
            {/* <a className="nav-link" href={'/author/' + localUser.id}>
            <Image layout="responsive" className="rounded-circle mr-2" src="/assets/img/av.png" width={30} height={30} alt="User" />
              <span className="align-middle">{localUser.username}</span>
            </a> */}



<a className="nav-link" href={localUser ? '/author/' + localUser.id : '/login'}>
{localUser && <img width="40" height="40" className='mr-3' src="https://img.icons8.com/external-royyan-wijaya-detailed-outline-royyan-wijaya/48/external-user-circle-user-royyan-wijaya-detailed-outline-royyan-wijaya.png" alt="external-user-circle-user-royyan-wijaya-detailed-outline-royyan-wijaya"/>}
{localUser && <span className="align-middle">{localUser.username}</span>}
</a>

          </li>
          <li className="nav-item">
      <a className="nav-link active" href="/login">
        {localUser ? (
          <button type="button" onClick={handleLogout} className="btn btn-primary btn-sm">
            Logout
          </button>
        ) : (
                        <button type="button"  className="btn btn-primary btn-sm">
            Login
          </button>
        )}
      </a>
    </li>
        </ul>
      </div>
    </nav>
    ):(
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
        
       

        <ul className="navbar-nav ml-auto align-items-center mr-3">
       
          <li className="nav-item">
      <a className="nav-link active" href="/login">
        {localUser ? (
          <button type="button" onClick={handleLogout} className="btn btn-primary btn-sm">
            Logout
          </button>
        ) : (
                        <button type="button"  className="btn btn-primary btn-sm">
            Login
          </button>
        )}
      </a>
    </li>
        </ul>
      </div>
    </nav>
    )
   }   
     
   
   
   
   
   
   
   
   
   
    </div>
    </>
  );
}
