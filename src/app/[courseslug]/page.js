
import React from 'react'; 
import CourseDetails from './CourseDetails';
import { MetaDetails } from '@/utils/data';

  
export async function generateMetadata({params}){  
  const {courseslug} = params; 
  const filterMetadata =  MetaDetails.find(d=>d.link === courseslug) 
  return{
      title: filterMetadata.title,
      description: filterMetadata.description,
      keywords: filterMetadata.keywords,
      alternates: {
        canonical: filterMetadata.canonical,
      },  
  }
}
 

const Page = async({params}) => {  
  return (

    <>
    <CourseDetails params={params}/>
    </>
  )
}

export default Page;
