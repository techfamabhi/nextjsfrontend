
"use client"
import { useDispatch, useSelector } from 'react-redux';
import { addpost,setTitle,setDescription,setPhoto} from '@/redux/features/slice';

import React, { useState,useEffect } from 'react';
import Navbar from "../navbar/page";
export default function Page() {
  const [cards, setCards] = useState([0]);

  
  const handleImageChange = (files) => {
    const maxFiles = 5; // Maximum number of allowed files
    const maxFileSize = 2097152; // Maximum file size (2 MB in bytes)
  
    if (files.length > maxFiles) {
      alert(`You can only select up to ${maxFiles} files.`);
      e.target.value = null; // Clear the selected files to prevent exceeding the limit
      return;
    }
  
    for (const file of files) {
      if (file.size > maxFileSize) {
        alert(`The file "${file.name}" exceeds the maximum file size of 2 MB.`);
        e.target.value = null; // Clear the selected files with an oversized file
        return;
      }
    }
  
    const fileList = Array.from(files);
    dispatch(setPhoto(fileList));
  };
  






  // const {title,description,photopath} = useSelector((state)=>state.post);
  const localUser = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : null;
 // console.log('localUser', localUser);


  const {title,description,photopath} = useSelector((state)=>state.postsReducer);

  const dispatch = useDispatch();
  

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Validation checks
    if (!title) {
      // Ensure a title is entered
      alert("Please enter a title");
      return;
    }
  
    if (!description) {
      // Ensure a description is entered
      alert("Please enter a description");
      return;
    }
  
    if (!photopath || photopath.length === 0) {
      // Ensure at least one image is selected
      alert("Please select at least one image");
      return;
    }
  
    const data = {
      title: title,
      description: description,
      photopath: photopath,
      userId:localUser.id
    };

   // console.log(data);
  
    dispatch(addpost(data));
  };
  

  return (
    <>
      <Navbar />
      <div style={{ backgroundColor: "#26333D", color: "#fff", paddingTop: "500px", paddingBottom: "500px" }}>
        <div className="container-fluid" >
          <div className='row' style={{ marginTop: "-500px" }}>
            {cards.map((cardIndex, index) => (
              <div className='col-md-8 mt-5' key={cardIndex} >
              <h6><b>Upload Post</b></h6>

              <form method="post" action="/upload" enctype="multipart/form-data">


                <div className="card mt-3">

                  <div className="card-header">

                    <input
                      type="text"
                      name="title"
                      id=""
                      className="form-control"
                      placeholder="Enter title of the post..."
                      style={{ border: "none" }}
                      onChange={(e)=>dispatch(setTitle(e.target.value))}
                    />
                  </div>
                  <ul className="list-group list-group-flush mt-5" style={{ height: "150px" }}>
                  {/* <input
                  className='ml-4'
                      type="file"
                      name="photopath"
                      accept="image/*"
                      id="basic-icon-default-email"
                      multiple
                      maxcount={5}
                      onChange={(e)=>handleImageChange(e.target.files)} // Use e.target.files to get selected files
                    /> */}


                    <input
  type="file"
  name="photopath"
  accept="image/*"
  id="basic-icon-default-email"
  multiple
  maxcount="5" // Maximum number of selected files
  size="2097152" // Maximum file size (2 MB in bytes)
  onChange={(e) => handleImageChange(e.target.files)}
/>





                  </ul>
                  <div className="card-header">
                    <input
                      type="text"
                      name="description"
                      id=""
                      className="form-control"
                      placeholder="Enter Description and Hashtag..."
                      style={{ border: "none" }}
                      onChange={(e)=>dispatch(setDescription(e.target.value))}
                    />
                  </div>
                  {index > 0 && (
                    <button
                      type="button"
                      className="btn btn-primary mt-2"
                      onClick={() => handleDeleteCard(index)}
                    >
                      Delete
                    </button>
                  )}
                </div>
                <button type="submit" onClick={handleSubmit} class="btn btn-light m-1 mt-3">Post</button>
</form>

               
              </div>





            ))}

         
          </div>
        </div>
      </div>

    </>
  );
}
