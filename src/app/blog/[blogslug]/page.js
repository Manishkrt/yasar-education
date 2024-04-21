import CompanyLogoSlider from '@/component/CompanyLogoSlider'
import CoomonStudentSlider from '@/component/CoomonStudentSlider'
import Footer from '@/component/Footer'
import Navigation from '@/component/Navigation'
import QuiryForm from '@/component/QuiryForm'
import Link from 'next/link'
import React from 'react'


async function fetchBlog() {
  const response = await fetch('https://studentapp.sasfoundation.co/admin/public/api/blog')
  const responseJson = await response.json()
  return responseJson.blog_list.data
}
async function fetchSingleBlog(slug) {
  const response = await fetch(`https://studentapp.sasfoundation.co/admin/public/api/latest-blogs-of-oracle/${slug}`)
  const responseJson = await response.json()
  //   console.log("responseJson", responseJson);
  return responseJson.blog_details.data?.[0]
}

const page = async ({ params }) => {
  const blogData = await fetchBlog()
  const blogValue = await fetchSingleBlog(params.blogslug)
  console.log("blogData", blogValue);

  const formatDate = (timeString) => {
    const formattedTime = new Date(timeString).toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });
    return formattedTime;
  }
  return (
    <>
      <Navigation />
      <CoomonStudentSlider />

      <section className='pt-pb'>
        <div className="container">
          {/* <div className="text-center pb-5">
            <h2 className='text-upppercase'>Blog</h2>
          </div> */}
          <div className="row">
            <div className="col-lg-8 col-12 mb-4 wrapper-blogs-details-content">
              <img src={`${blogValue && blogValue.blog_image}`} alt="education" className='rounded-4 img-fluid w-100 mb-3' />
              <div className='mb-4'><span><i className="fa-regular fa-clock fa-xl text-secondary"></i></span> &nbsp; <span>{blogValue && formatDate(blogValue.date)}</span></div>
              <h3 className='Title-blogs-h3'>{blogValue && blogValue.blog_title}</h3>
              {blogValue &&
                <div  dangerouslySetInnerHTML={{ __html: blogValue.long_desc }} className='border-bottom pb-5 mb-5' />}
              <div className='mb-5'>
                <h4>2 Commnts</h4>
              </div>
              
              <div className='d-md-flex d-block align-items-center gap-3 pb-5 mb-5 border-bottom'> 
                <img src="/assets/img/comment-1-1.jpg" alt="" className='img-fluid rounded-circle d-block mb-md-0 mb-3 m-auto ' />
                <div>
                  <h4 className='mb-3 pb-0'>David Shon</h4>
                  <p className='fw-bold text-muted text-black-50 mb-4'>Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh. Nam nec eros id magna hendrerit sagittis. Nullam sed mi non odio feugiat volutpat sit amet nec elit. Maecenas id hendrerit ipsum. Sed eget auctor metus, ac dapibus dolor.</p>
                  <button className='border-0 bg-soft1 px-4 py-1 rounded fw-bold text-muted text-black-50'>Reply</button>
                </div>
              </div>
              <div className='d-md-flex d-block align-items-center gap-3 pb-5 mb-5 border-bottom'> 
                <img src="/assets/img/comment-1-2.jpg" alt="" className='img-fluid rounded-circle d-block mb-md-0 mb-3 m-auto ' />
                <div>
                  <h4 className='mb-3 pb-0'>Jhon Watchson</h4>
                  <p className='fw-bold text-muted text-black-50 mb-4'>Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh. Nam nec eros id magna hendrerit sagittis. Nullam sed mi non odio feugiat volutpat sit amet nec elit. Maecenas id hendrerit ipsum. Sed eget auctor metus, ac dapibus dolor.</p>
                  <button className='border-0 bg-soft1 px-4 py-1 rounded fw-bold text-muted text-black-50'>Reply</button>
                </div>
              </div>
              
            </div>
            <div className="col-lg-4 col-12">
              <div className='blog-search-wrapper bg-secondary d-flex align-items-center gap-2 mb-lg-5 mb-3'>
              <i className="fa-solid fa-magnifying-glass text-white fa-lg"></i>
                <input type="text" name="" className='blog-search-input border-0 flex-grow' id=""  placeholder='Type Here'/>
              </div>
              <div className='rounded shadow bg-white p-3'>
                <h3 className=" course-details__sidebar__title pb-3 mb-3">Latest Post</h3>
                {blogData.slice(0, 12).map((value) => (
                  <div className="border-bottom pb-3 mb-3" key={value.id}>
                    <div className="d-flex align-items-center gap-3">
                      <div className='blog-sidebar-img-wrapper'>
                        <Link href={`/blog/${value.slug}`}>
                        <img src={value.blog_image} alt="education" className='img-fluid h-100' />
                        </Link>
                      </div>
                      <div> 
                        <div className='mb-2'><span><i className="fa-regular fa-clock fa-lg text-secondary"></i></span> &nbsp; <span>{ formatDate(value.date)}</span></div>
                        <h3 className='text-capitalize   sidebar__post__content__title'> <Link href={`/blog/${value.slug}`}>{value.blog_title}</Link> </h3>
                      </div>
                    </div>
                  </div>
                ))}

              </div>
            </div>
          </div>

        </div>
      </section>


      <QuiryForm />
      <CompanyLogoSlider />
      <Footer />

    </>
  )
}

export default page