import React from 'react';

export default function BannerHolder({Class,children}){
    return(
        <div className={Class}>
            {children}
        </div>
    )
}