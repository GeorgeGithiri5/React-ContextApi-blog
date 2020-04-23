import React from 'react'
import BannerHolder from '../components/BannerHolder'
import Banner from '../components/Banner'
import BlogContainer from '../components/blogsContainer'


import {Link} from 'react-router-dom'
export default function Blog(){
    return(
        <>
        <BannerHolder
        Class='Blogspage'>
            <Banner title="You are On Our Blogs Post Page" subtitle="We always Update You">
                 <Link className="btn btn-warning" to='/'>Go Home</Link>
             </Banner>
        </BannerHolder>
        <BlogContainer/>
        </>
    )
}