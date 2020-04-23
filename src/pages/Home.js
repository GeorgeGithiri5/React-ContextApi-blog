import React from 'react'
import BannerHolder from '../components/BannerHolder'
import Banner from '../components/Banner'
import Title from '../components/Title'
import Recommended from '../components/Recommended'

import {Link} from 'react-router-dom'

export default function Home(){
    return(
        <>
         <BannerHolder 
         Class="Homepage">
             <Banner title="BlogHome Gives you Best Blogs ever" subtitle="We 
             post blogs on React | Express | Machine Learning | Data Science | 
                MongoDb | Node js| Php | Django | Bootstrap | RestFul Apis | Interviews ...">
                 <Link className="btn btn-warning" to='/Blogs'>View Our Blogs</Link>
             </Banner>
         </BannerHolder>
         <Title title = "Recommended for you"/>
         <Recommended/>
        </>
    )
}