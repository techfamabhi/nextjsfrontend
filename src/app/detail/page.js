"use client"

import React from 'react'
import Navbar from '../navbar/page';
import Image from 'next/image';
export default function Page({params}) {

    console.log(params)
    return (
        <>
        <Navbar/>

            <div class="container mt-4">
            <h3 style={{ marginLeft: "20px" }}>Halloweek Day 7 - Vampire - AKA Marcy</h3>

                <div class="row">

                   
                    <div className='col-md-8'>

                        <div class="card">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">
                                    <span><b>Alsoashley</b></span> <br />
                                    <span>103,522 Views•21h</span>
                                </li>
                                <li class="list-group-item">
                                    <Image layout="responsive" src="/assets/img/11.jpg" alt="Card image cap" width={1000} />
                                    <span>
                                    <i class="fa fa-thumbs-up" aria-hidden="true" style={{ fontSize:"25px",color:"#000"}}></i>
                                    </span>
                                    <span>
                                    <i class="fa fa-comment ml-3 mt-1" aria-hidden="true" style={{ fontSize:"25px",color:"#000"}}></i>
                                    </span>
                                    <span>
                                    <i class="fa fa-share ml-3 mt-1" aria-hidden="true" style={{ fontSize:"25px",color:"#000"}}></i>
                                    </span>




                                    
                                </li>
                                
                                <li class="list-group-item">
                                    Halloweek Day 7 - Happy Halloween!! I had to save my best for last on this 7 Day costume binge - me as Marceline the Vampire Queen! I adore this character, and couldn't help putting my spin on the classic Halloween "Vampire" as Marcy. Hope you all enjoyed this week, it was a blast to do it this year
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-md-4'>

                        <Image layout="responsive" src="/assets/img/11.jpg" alt="Card image cap"width={1000} />
                        <div className='mt-2'>
                            <span ><b>HIGHEST SCORING TODAY</b></span>
                            <hr />
                            <div style={{ overflowY: "scroll", overflowX: "hidden", height: "180px", width: "100%"}}>

                                <div className='row mt-1'>
                                    <div className='col-md-5'>
                                        <Image layout="responsive" src="/assets/img/11.jpg" alt="Card image cap" style={{ width: "100%", borderRadius: "5px" }} />

                                    </div>
                                    <div className='col-md-7'>
                                        <b style={{ fontSize: "13px" }}>Abhishek Gouda</b>
                                    </div>
                                </div>
                                <div className='row mt-1'>
                                    <div className='col-md-5'>
                                        <Image layout="responsive" src="/assets/img/11.jpg" alt="Card image cap" width={1000} style={{ borderRadius: "5px" }} />

                                    </div>
                                    <div className='col-md-7'>
                                        <b style={{ fontSize: "13px" }}>Abhishek Gouda</b>

                                    </div>
                                </div>
                                <div className='row mt-1'>
                                    <div className='col-md-5'>
                                        <Image layout="responsive" src="/assets/img/11.jpg" alt="Card image cap" width={1000} style={{ borderRadius: "5px" }} />

                                    </div>
                                    <div className='col-md-7'>
                                        <b style={{ fontSize: "13px" }}>Abhishek Gouda</b>
                                    </div>
                                </div>
                                <div className='row mt-1'>
                                    <div className='col-md-5'>
                                        <Image layout="responsive" src="/assets/img/11.jpg" alt="Card image cap" style={{ width: "100%", borderRadius: "5px" }} />

                                    </div>
                                    <div className='col-md-7'>
                                        <b style={{ fontSize: "13px" }}>Abhishek Gouda</b>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <Image layout="responsive" src="/assets/img/11.jpg" className='mt-5' alt="Card image cap" width={1000} />

                    </div>

                </div>
            </div>








        </>
    )
}
