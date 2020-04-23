import React, { Component } from 'react';
import {BlogContext} from '../context'
import Blog from './blog'

class Recommended extends Component {
 static contextType = BlogContext
    render() {
        let {recommended : recBlog} = this.context
        recBlog = recBlog.map(blog=>{
            return <Blog key={blog.id} blog={blog}/>
        })
        
        return (
            <div>
                {recBlog}
            </div>
        );
    }
}

export default Recommended;