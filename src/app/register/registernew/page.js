"use client"
import React, { useState } from 'react'
function Page() {
  return (
    <>
    
    
    
    
    
    
    
    
    <section class="pt-5 pb-5">
    <div class="container text-center">
        <div class="row">
            <div class="col-md-12">
                <h4><a href="https://intl-tel-input.com/" target="_blank">Country Code Selection</a></h4>
            </div>
        </div>
    </div>

    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-6 mt-5 mb-5">
                <div class="form-area">
                    <div class="form-inner">
                        <form>
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="First Name" value="" />
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Last Name" value="" />
                            </div>
                            <div class="form-group">
                                <input type="text" id="mobile_code" class="form-control" placeholder="Phone Number" name="name"/>
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Email" name="name"/>
                            </div>
                         
                            <button type="submit" class="btn btn-primary form-submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>  
</section>
    
    
    
    </>
  )
}

export default Page