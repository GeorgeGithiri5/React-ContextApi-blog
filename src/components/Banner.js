import React from 'react'

export default function Banner({children,title,subtitle}){
    return(
        <div className="banner">
            <h4 className="bannerH4">{title}</h4>
            <p className="bannerH1">{subtitle}</p>
            {children}
        </div>
    )
}