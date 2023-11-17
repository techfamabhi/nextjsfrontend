import React from 'react'
import Navbar from '../navbar/page'
import Footer from '../footer/page'
import Image from 'next/image'
export default function Page() {
  return (
   
   
   
   
   <>
   <Navbar/>
   
   <main role="main">
  <section className="bg-gray200 pt-5 pb-5">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-7">
          <article className="card">
            <Image layout="responsive"
             width={100}
              height={100}
              className="card-img-top mb-2"
              src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e0245bb4e87077312cc3d102e68c1efd&auto=format&fit=crop&w=735&q=80"
              alt="Card image"
          
            />
            <div className="card-body">
              <h1 className="card-title display-4">Sushi Rolls </h1>
              <ul>
                <li>5 cups short-grain sushi rice</li>
                <li>6 cups water</li>
                <li>1/2 cup rice vinegar</li>
                <li>2 tablespoons sugar</li>
                <li>A teaspoon of salt</li>
              </ul>
              <small className="d-block">
                <a className="btn btn-sm btn-gray200" href="#">
                  <i className="fa fa-external-link" /> Visit Website
                </a>
              </small>
            
              <div id="comments" className="mt-4">
                <div id="disqus_thread"></div>
                <noscript>
                  Please enable JavaScript to view the &lt;a
                  href="http://disqus.com/?ref_noscript"&gt;comments powered by
                  Disqus.&lt;/a&gt;
                </noscript>
              </div>
            
            </div>
          </article>
        </div>
      </div>
    </div>
    <div className="container-fluid mt-5">
      <div className="row">
        <h5 className="font-weight-bold">More like this</h5>
        <div className="card-columns">
          <div className="card card-pin">
            <Image layout="responsive"
             width={100}
              height={100}
              className="card-img"
              src="https://images.unsplash.com/photo-1518707399486-6d702a84ff00?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b5bb16fa7eaed1a1ed47614488f7588d&auto=format&fit=crop&w=500&q=60"
              alt="Card image"
            />
            <div className="overlay">
              <h2 className="card-title title">Some Title</h2>
              <div className="more">
                <a href="post.html">
                  <i
                    className="fa fa-arrow-circle-o-right"
                    aria-hidden="true"
                  />
                  More
                </a>
              </div>
            </div>
          </div>
          <div className="card card-pin">
            <Image layout="responsive"
             width={100}
              height={100}
              className="card-img"
              src="https://images.unsplash.com/photo-1519408299519-b7a0274f7d67?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d4891b98f4554cc55eab1e4a923cbdb1&auto=format&fit=crop&w=500&q=60"
              alt="Card image"
            />
            <div className="overlay">
              <h2 className="card-title title">Some Title</h2>
              <div className="more">
                <a href="post.html">
                  <i
                    className="fa fa-arrow-circle-o-right"
                    aria-hidden="true"
                  />
                  More
                </a>
              </div>
            </div>
          </div>
          <div className="card card-pin">
            <Image layout="responsive"
             width={100}
              height={100}
              className="card-img"
              src="https://images.unsplash.com/photo-1506706435692-290e0c5b4505?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0bb464bb1ceea5155bc079c4f50bc36a&auto=format&fit=crop&w=500&q=60"
              alt="Card image"
            />
            <div className="overlay">
              <h2 className="card-title title">Some Title</h2>
              <div className="more">
                <a href="post.html">
                  <i
                    className="fa fa-arrow-circle-o-right"
                    aria-hidden="true"
                  />
                  More
                </a>
              </div>
            </div>
          </div>
          <div className="card card-pin">
            <Image layout="responsive"
             width={100}
              height={100}
              className="card-img"
              src="https://images.unsplash.com/photo-1512355144108-e94a235b10af?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c622d56d975113a08c71c912618b5f83&auto=format&fit=crop&w=500&q=60"
              alt="Card image"
            />
            <div className="overlay">
              <h2 className="card-title title">Some Title</h2>
              <div className="more">
                <a href="post.html">
                  <i
                    className="fa fa-arrow-circle-o-right"
                    aria-hidden="true"
                  />
                  More
                </a>
              </div>
            </div>
          </div>
          <div className="card card-pin">
            <Image layout="responsive"
             width={100}
              height={100}
              className="card-img"
              src="https://images.unsplash.com/photo-1518542331925-4e91e9aa0074?ixlib=rb-0.3.5&s=6958cfb3469de1e681bf17587bed53be&auto=format&fit=crop&w=500&q=60"
              alt="Card image"
            />
            <div className="overlay">
              <h2 className="card-title title">Some Title</h2>
              <div className="more">
                <a href="post.html">
                  <i
                    className="fa fa-arrow-circle-o-right"
                    aria-hidden="true"
                  />
                  More
                </a>
              </div>
            </div>
          </div>
          <div className="card card-pin">
            <Image layout="responsive"
             width={100}
              height={100}
              className="card-img"
              src="https://images.unsplash.com/photo-1513028179155-324cfec2566c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=32ce1df4016dadc177d6fce1b2df2429&auto=format&fit=crop&w=350&q=80"
              alt="Card image"
            />
            <div className="overlay">
              <h2 className="card-title title">Some Title</h2>
              <div className="more">
                <a href="post.html">
                  <i
                    className="fa fa-arrow-circle-o-right"
                    aria-hidden="true"
                  />
                  More
                </a>
              </div>
            </div>
          </div>
          <div className="card card-pin">
            <Image layout="responsive"
             width={100}
              height={100}
              className="card-img"
              src="https://images.unsplash.com/photo-1516601255109-506725109807?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ce4f3db9818f60686e8e9b62d4920ce5&auto=format&fit=crop&w=500&q=60"
              alt="Card image"
            />
            <div className="overlay">
              <h2 className="card-title title">Some Title</h2>
              <div className="more">
                <a href="post.html">
                  <i
                    className="fa fa-arrow-circle-o-right"
                    aria-hidden="true"
                  />
                  More
                </a>
              </div>
            </div>
          </div>
          <div className="card card-pin">
            <Image layout="responsive"
             width={100}
              height={100}
              className="card-img"
              src="https://images.unsplash.com/photo-1505210512658-3ae58ae08744?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2ef2e23adda7b89a804cf232f57e3ca3&auto=format&fit=crop&w=333&q=80"
              alt="Card image"
            />
            <div className="overlay">
              <h2 className="card-title title">Some Title</h2>
              <div className="more">
                <a href="post.html">
                  <i
                    className="fa fa-arrow-circle-o-right"
                    aria-hidden="true"
                  />
                  More
                </a>
              </div>
            </div>
          </div>
          <div className="card card-pin">
            <Image layout="responsive"
             width={100}
              height={100}
              className="card-img"
              src="https://images.unsplash.com/photo-1488353816557-87cd574cea04?ixlib=rb-0.3.5&s=06371203b2e3ad3e241c45f4e149a1b3&auto=format&fit=crop&w=334&q=80"
              alt="Card image"
            />
            <div className="overlay">
              <h2 className="card-title title">Some Title</h2>
              <div className="more">
                <a href="post.html">
                  <i
                    className="fa fa-arrow-circle-o-right"
                    aria-hidden="true"
                  />
                  More
                </a>
              </div>
            </div>
          </div>
          <div className="card card-pin">
            <Image layout="responsive"
             width={100}
              height={100}
              className="card-img"
              src="https://images.unsplash.com/photo-1518450757707-d21c8c53c8df?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c88b5f311958f841525fdb01ab3b5deb&auto=format&fit=crop&w=500&q=60"
              alt="Card image"
            />
            <div className="overlay">
              <h2 className="card-title title">Some Title</h2>
              <div className="more">
                <a href="post.html">
                  <i
                    className="fa fa-arrow-circle-o-right"
                    aria-hidden="true"
                  />
                  More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>

   
   
   
   













<Footer/>


   
   
   </>
  )
}
