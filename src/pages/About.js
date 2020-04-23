import React from 'react'
import {Link} from 'react-router-dom'

import BannerHolder from '../components/BannerHolder'
import Banner from '../components/Banner'

export default function About(){
    return(
        <>
            <BannerHolder Class='Blogspage'>
                <Banner title="About Us Page" subtitle="We blog 
                post on React | Express ...">
                    <Link className="btn btn-warning" to='/'>Go back Home</Link>
                </Banner>
            </BannerHolder>
        </>
    )
}