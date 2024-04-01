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
          <div className="text-center pb-5">
            <h2 className='text-upppercase'>Blog</h2>
          </div>
          <div className="row">
            <div className="col-lg-8 col-12 mb-4">
              <img src={`${blogValue && blogValue.blog_image}`} alt="education" className='rounded-4 img-fluid w-100 mb-3' />
              <div className='mb-4'><span><i className="fa-regular fa-clock fa-xl text-secondary"></i></span> &nbsp; <span>{blogValue && formatDate(blogValue.date)}</span></div>
              <h3>{blogValue && blogValue.blog_title}</h3>
              {blogValue &&
                <div dangerouslySetInnerHTML={{ __html: blogValue.long_desc }} />}
            </div>
            <div className="col-lg-4 col-12">
              <div className='rounded shadow bg-white p-3'>
                <h3 className="border-bottom-doted border-color-secondary pb-3 mb-3">Latest Post</h3>
                {blogData.slice(0, 6).map((value) => (
                  <div className="border-bottom pb-3 mb-3" key={value.id}>
                    <div className="d-flex align-items-center gap-3">
                      <div className='blog-sidebar-img-wrapper'>
                        <Link href={`/blog/${value.slug}`}>
                        <img src={value.blog_image} alt="education" className='img-fluid h-100' />
                        </Link>
                      </div>
                      <div> 
                        <div className='mb-2'><span><i className="fa-regular fa-clock fa-lg text-secondary"></i></span> &nbsp; <span>{ formatDate(value.date)}</span></div>
                        <h6 className='text-capitalize'> <Link href={`/blog/${value.slug}`}>{value.blog_title}</Link> </h6>
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