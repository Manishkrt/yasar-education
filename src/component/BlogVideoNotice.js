
import Link from 'next/link';
import React from 'react'


async function fetchBlog() {
  try {
    const response = await fetch('https://studentapp.sasfoundation.co/admin/public/api/blog')
    const responseJson = await response.json()
    return responseJson.blog_list.data
  } catch (error) {
    console.log(error);
  }

}
async function fetchVideo() {
  try {
    const response = await fetch('https://studentapp.sasfoundation.co/admin/public/api/video')
    const responseJson = await response.json()
    const videoId = extractVideoId(responseJson.videos.data[0].video_link);
    return videoId
  } catch (error) {
    console.log(error);
  }
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

          <h2 className="text-center">Latest Updates</h2>
        </div>
        <div className='container text-wrapper-combine-vbn mt-5'>
          <div className='row'>

            <div className='col-lg-7'>
              <h1 className='blog-video-fs-bg  text-start mb-5px'>Blogs <svg
                className="arrow-svg  subtitle-svg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 55 13"
              >
                <g clipPath="url(#clip0_324_36194)">
                  <path d="M10.5406 6.49995L0.700562 12.1799V8.56995L4.29056 6.49995L0.700562 4.42995V0.819946L10.5406 6.49995Z" />
                  <path d="M25.1706 6.49995L15.3306 12.1799V8.56995L18.9206 6.49995L15.3306 4.42995V0.819946L25.1706 6.49995Z" />
                  <path d="M39.7906 6.49995L29.9506 12.1799V8.56995L33.5406 6.49995L29.9506 4.42995V0.819946L39.7906 6.49995Z" />
                  <path d="M54.4206 6.49995L44.5806 12.1799V8.56995L48.1706 6.49995L44.5806 4.42995V0.819946L54.4206 6.49995Z" />
                </g>
              </svg>
              </h1>
              <div className='row'>
                {blogData && blogData?.slice(0, 2).map((blogValue) => (
                  <div className="col-lg-12 col-md-12 col-sm-12 Blogs-card-wrapper-grid-common" key={blogValue.id}>
                    <div className="card mb-3">
                      <div className="row g-0">
                        <div className="col-md-4 blog-imageswrapper">
                          <Link href={`/blog/${blogValue.slug}`}>
                            <img
                              src={blogValue.blog_image}
                              className="img-fluid rounded-start"
                              alt="..."
                              height={100}
                            />
                          </Link>
                        </div>
                        <div className="col-md-8">
                          <div className="card-body mb-3 text-start">
                            <p className=" mb-1 text-danger fw-600">
                              <Link href={`/blog/${blogValue.slug}`} className='text-decoration-none text-dark-fw-500'>{blogValue.blog_title}</Link>

                            </p>
                            {/* <div className='d-flex'>
                          <p className="mb-1">
                            <Link href={`/blog/${blogValue.slug}`} className='text-decoration-none text-dark'>{blogValue.short_desc}</Link>
                          
                          </p>
                          <div className='text-end'>
                            <Link href={`/blog/${blogValue.slug}`} className='btn text-color-orange-fw fw-600 text-end p-0'><i className="fa-solid fa-angle-down"></i> Read More</Link>

                          </div>
                          </div> */}
                            <div className='d-flex'>
                              <p className="mb-1">
                                <Link href={`/blog/${blogValue.slug}`} className='text-decoration-none text-dark'>{blogValue.short_desc}</Link>
                                <Link href={`/blog/${blogValue.slug}`} className='btn text-color-orange-fw fw-600 text-end p-0 w-max-content'><i className="fa-solid fa-angle-down"></i> Read More</Link>
                              </p>
                              {/* <div className='text-end'>
                            <Link href={`/blog/${blogValue.slug}`} className='btn text-color-orange-fw fw-600 text-end p-0'><i className="fa-solid fa-angle-down"></i> Read More</Link>

                          </div> */}
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>

                  </div>
                ))}

              </div>
            </div>
            <div className='col-lg-5'>
              <h1 className='blog-video-fs-bg text-start mb-5px'>Video <svg
                className="arrow-svg  subtitle-svg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 55 13"
              >
                <g clipPath="url(#clip0_324_36194)">
                  <path d="M10.5406 6.49995L0.700562 12.1799V8.56995L4.29056 6.49995L0.700562 4.42995V0.819946L10.5406 6.49995Z" />
                  <path d="M25.1706 6.49995L15.3306 12.1799V8.56995L18.9206 6.49995L15.3306 4.42995V0.819946L25.1706 6.49995Z" />
                  <path d="M39.7906 6.49995L29.9506 12.1799V8.56995L33.5406 6.49995L29.9506 4.42995V0.819946L39.7906 6.49995Z" />
                  <path d="M54.4206 6.49995L44.5806 12.1799V8.56995L48.1706 6.49995L44.5806 4.42995V0.819946L54.4206 6.49995Z" />
                </g>
              </svg>
              </h1>
              {videoData &&
                <iframe width="100%" height="286px" src={`https://www.youtube.com/embed/${videoData}`} allow="accelerometer; autoPlay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
              }
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default BlogVideoNotice;
