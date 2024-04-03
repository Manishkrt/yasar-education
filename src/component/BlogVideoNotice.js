
import Link from 'next/link';
import React from 'react'


async function fetchBlog() {
  const response = await fetch('https://studentapp.sasfoundation.co/admin/public/api/blog')
  const responseJson = await response.json() 
  return responseJson.blog_list.data
}
async function fetchVideo() {
  const response = await fetch('https://studentapp.sasfoundation.co/admin/public/api/video')
  const responseJson = await response.json() 
  const videoId = extractVideoId(responseJson.videos.data[0].video_link);
  return videoId
}

function extractVideoId(url) { 
  const match = url.match(/(?:\?|&)v=([^&#]+)/);
  return match ? match[1] : null;
}

  const BlogVideoNotice = async () => {
  const blogData = await fetchBlog()
  const videoData = await fetchVideo() 

  return (
    <>
      <section className='Blog-Video-Notice-wrapper pt-pb'>
        <div className="mb-0 text-center">

          <h2 className="text-dark text-center">Latest Updates</h2>
        </div>
        <div className='container text-wrapper-combine-vbn mt-5'>
          <div className='row'>

            <div className='col-lg-8'>
              <h1 className='Secondary-orange text-center'>Blogs</h1>
              <div className='row'>

                <div className="col-lg-12 col-md-12 col-sm-12 Blogs-card-wrapper-grid-common">
                  <div className="card mb-3" >
                    <div className="row g-0">
                      <div className="col-md-4 blog-imageswrapper">
                        <img
                          src={blogData[0].blog_image}
                          className="img-fluid rounded-start"
                          alt="..."
                          height={100}
                        />
                      </div>
                      <div className="col-md-8 ">
                        <div className="card-body text-start">
                          <p className=" mb-1 text-danger fw-600">{blogData[0].blog_title}</p>
                          <p className="mb-1">
                          {blogData[0].short_desc}
                          </p>
                          <div className='text-end'>

                          <button className='btn text-danger fw-600 text-end p-0'><i className="fa-solid fa-angle-down"></i> Read More</button>
                        </div>
                        </div>
                      </div>
                    </div>

                  </div>

                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 Blogs-card-wrapper-grid-common">
                  <div className="card mb-3">
                    <div className="row g-0">
                      <div className="col-md-4 blog-imageswrapper">
                        <img
                          src={blogData[1].blog_image}
                          className="img-fluid rounded-start"
                          alt="..."
                          height={100}
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body mb-3 text-start">
                          <p className=" mb-1 text-danger fw-600">{blogData[1].blog_title}</p>
                          <p className="mb-1">
                          {blogData[1].short_desc}
                          </p>
                          <div className='text-end'>
                            <button className='btn text-danger fw-600 text-end p-0'><i className="fa-solid fa-angle-down"></i> Read More</button>

                          </div>
                        </div>
                      </div>
                    </div>

                  </div>

                </div>

              </div> 
            </div> 
            <div className='col-lg-4'>
              <h1 className='Secondary-orange text-center'>Video</h1>
              <iframe width="100%" height="320px" src={`https://www.youtube.com/embed/${videoData}`}   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
            
          </div>
        </div>
      </section>
    </>
  )
}

export default BlogVideoNotice;
