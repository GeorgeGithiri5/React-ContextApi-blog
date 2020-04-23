import React from 'react'
import BannerHolder from '../components/BannerHolder'
import Banner from '../components/Banner'

import {Link} from 'react-router-dom'

export default function Error(){
    return(
        <>
            <BannerHolder Class="Homepage">
            <Banner title="Opps!!" subtitle="Sorry,You entered a wrong Url">
                 <Link className="btn btn-warning" to='/'>Go Back</Link>
             </Banner>
            </BannerHolder>
        </>
    )
}