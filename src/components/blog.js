import React from 'react'
import {memo} from 'react'

import {Link} from 'react-router-dom'

const Blog = memo(({ blog }) => {
    const {Name,Author,Title,Short_description,description} = blog
    return(
        <div className="">
            <article className='container singleBlogHolder'>
                <div className="">
                <h2>{Name}</h2>
                <p>{Author}</p>
                <p>{Title}</p>
                <p>{Short_description}</p>
                <p>{description}</p>
                <Link to={`/Blogs/${Title}`}>Read More</Link>
                </div>
            </article>
        </div>
    )
})

export default Blog