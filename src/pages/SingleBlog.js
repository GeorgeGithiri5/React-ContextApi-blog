import React from 'react'
import BannerHolder from '../components/BannerHolder'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import {BlogContext} from '../context'

export default class SingleBlog extends React.Component{
    constructor(props){
        super(props)
        this.state={
            Title:this.props.match.params.specific
        }
    }
    // componentDidMount(){
        
    // }
    static contextType = BlogContext
    render(){
        const {getAblog} = this.context
        const blog = getAblog(this.state.Title)
        if(!blog){
            return <div>
                No such Blog is found...<br/>
                <Link to='/Blogs' className="btn btn-warning">Go To Blogs page</Link>
            </div>
        }
        const {Name,Title,Short_description,description} = blog
        return(
            <>
                <BannerHolder Class='Blogspage'>
                    <Banner title={`${Title}`}>
                        <Link to='/Blogs' className="btn btn-warning">Go To Blogs</Link>
                    </Banner>
                </BannerHolder>
                <div className="container">
                <p className="text-center">{Name}</p>
                <p className="text-center">{Short_description}</p>
                <p className="lead">{description}</p>
                </div>
            </>
        )
    }
    }
    