import React from 'react'
import {BlogConsumer} from '../context'


export default function BlogContainer(){
    return(
        <>
    <BlogConsumer>
        {(value)=>{
           const {Name,Title,Short_description,description} = value.blogs
            return(
                <div className="container">
                        <p>{Name}</p>
                        <h1>{Title}</h1>
                        <p><i>{Short_description}</i></p>
            <p className="lead jumbotron">{description}</p>
                </div>
            )
        }}
    </BlogConsumer>
    </>
    )
}
            