import React from 'react'
import items from './data'

const BlogContext = React.createContext()

class BlogProvider extends React.Component{
    state = {
        blogs: [],
        Name: [],
        Author: [],
        Title: [],
        recommended:[],
        Short_description:[],
        description:[]
    }
    componentDidMount(){
        let blogs = this.formatData(items)
        let Name = blogs.filter(blog=>blog.Name)
        let Author = blogs.filter(blog=>blog.Author)
        let Title = blogs.filter(blog=>blog.Title)
        let Short_description = blogs.filter(blog=>blog.Short_description)
        let recommended = blogs.filter(blog=>blog.recommended===true)
        let description = blogs.filter(blog=>blog.description)
        this.setState({
            blogs,
            Name,
            Author,
            Title,
            recommended,
            Short_description,
            description,
        })
    }

    formatData(items){
        let blogList = items.map(item=>{
            let id = item.id
            let Name = item.Name
            let Title = item.Title
            let recommended = item.recommended
            let Short_description = item.Short_description
            let description = item.description
            let blog ={...this.item,id,Name,Title,recommended,Short_description,description}
            return (blog)
        })
        return(blogList)
    }
    getAblog=(Title)=>{
        let tempBlogs = [...this.state.blogs]
        const blog = tempBlogs.find(blog=>blog.Title===Title)
        return blog
    }
    render(){
        return(
            <BlogContext.Provider value={{...this.state,getAblog:this.getAblog}}>
                {this.props.children}
            </BlogContext.Provider>
        )
    }
}

const BlogConsumer = BlogContext.Consumer;

export{
    BlogContext,BlogProvider,BlogConsumer
}