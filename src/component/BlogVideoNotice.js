
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
  return responseJson.videos.data
}

function extractVideoId(url) { 
  const match = url.match(/(?:\?|&)v=([^&#]+)/);
  return match ? match[1] : null;
}
const BlogVideoNotice = async () => {
  const blogData = await fetchBlog()
  const videoData = await fetchVideo()
  // console.log("blogData", blogData);
  console.log("videoData", videoData);

  

  const youtubeLink = 'https://www.youtube.com/watch?v=C651wz9im9c';
const videoId = extractVideoId(youtubeLink);
console.log(videoId); // Output: C651wz9im9c



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
                          src="https://oracleglobaleducation.com/blog/admin/postimages/c26be60cfd1ba40772b5ac48b95ab19b.png"
                          className="img-fluid rounded-start"
                          alt="..."
                          height={100}
                        />
                      </div>
                      <div className="col-md-8 ">
                        <div className="card-body text-start">
                          <p className=" mb-1 text-danger fw-600">Real Patients, Real Stories2</p>
                          <p className="mb-1">
                            This Article’s Title goes Here, but not too long.
                          </p>
                          <button className='btn text-danger fw-600 text-start p-0'><i class="fa-solid fa-angle-down"></i> Read More</button>
                        </div>
                      </div>
                    </div>

                  </div>

                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 Blogs-card-wrapper-grid-common">
                  <div className="card mb-3" style={{ maxWidth: 540 }}>
                    <div className="row g-0">
                      <div className="col-md-4 blog-imageswrapper">
                        <img
                          src="https://oracleglobaleducation.com/blog/admin/postimages/43eb829bd6b2dc85d947cfc7062ecb13.jpg"
                          className="img-fluid rounded-start"
                          alt="..."
                          height={100}
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body mb-3 text-start">
                          <p className=" mb-1 text-danger fw-600">Real Patients, Real Stories</p>
                          <p className="mb-1">
                            This Article’s Title goes Here, but not too long.
                          </p>
                          <div className='text-end'>
                            <button className='btn text-danger fw-600 text-end p-0'><i class="fa-solid fa-angle-down"></i> Read More</button>

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
              <iframe width="100%" height="320px" src={videoData[0].video_link} title="Guru Randhawa : ISHARE TERE | Saiee M | Ft. Dhvani B | Golden Geet Studio" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
              <iframe width="100%" height="320px" src={`https://www.youtube.com/embed/${videoId}`}   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
              <iframe width="100%" height="320px" src="https://www.youtube.com/embed/_Hq_hLWvuMA" title="Guru Randhawa : ISHARE TERE | Saiee M | Ft. Dhvani B | Golden Geet Studio" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
            {/* <div className='col-lg-4'>
                <h1 className='Secondary-orange'>Notice Board</h1>

                <div className="bg-LightGrey p-lg-4 p-2 rounded-2 NoticeBoard-wrapper">
                 
                    <div className="">
                        <ul className='p-0 list-style-none'>
                            <li className='rounded  my-2 bg-DarkGrey px-2 py-2'>
                            1. <Link href='#' className='cursive bg-DarkGrey text-decoration-underline '> Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem modi numquam quo?</Link>
                            </li> 
                            <li className='rounded  my-2 bg-DarkGrey  px-2 py-2'>
                            2. <Link href='#' className='cursive bg-DarkGrey text-decoration-underline '> Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem modi numquam quo?</Link>
                            </li> 
                            <li className='rounded  my-2 bg-DarkGrey px-2 py-2'>
                            3. <Link href='#' className='cursive bg-DarkGrey text-decoration-underline '> Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem modi numquam quo?</Link>
                            </li> 
                          
                           
                         
                           
                           
                         
                            
                        </ul>
                    </div>

                </div>
                    </div>    */}
          </div>
        </div>
      </section>
    </>
  )
}

export default BlogVideoNotice;
