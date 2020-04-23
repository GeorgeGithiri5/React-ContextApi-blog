import React from 'react'
import {Link} from 'react-router-dom'

export default class Navbar extends React.Component{
    constructor(){
        super()
        this.state = {
            isToggle: false
        }
    }
    Toggle=()=>{
        this.setState({isToggle: !this.state.isToggle})
    }
    render(){
    return(
        <>
            <div className= "nav-blog bg-dark">
                    <div className="nav-brand">
                        <p><Link to='/'>BlogHome</Link></p>
                    </div>
                <div className="btn">
                <button onClick={this.isToggle} className="menu">
                    Menu
                </button>
                </div>
                <ul className={this.state.isOpen?"nav-link show-nav":"navbar-list"}>
                    <li><Link to ='/'>Home</Link></li>
                    <li><Link to ='/Blogs'>Our Blogs</Link></li>
                    <li><Link to ='/About'>About Us</Link></li>
                </ul>
            </div>
        </>
    )
}
}