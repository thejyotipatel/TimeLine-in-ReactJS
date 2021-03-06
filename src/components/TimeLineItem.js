import React from 'react'
 
import './style.css' 

const TimeLineItem = ({data, idx}) => {
    return(
    <div className="timeline-item">
        <div className="timeline-item-content">
            <span 
                className="tag"
                style={{background: data.category.color}} >
                {data.category.tag}
            </span>

            <time>{data.date}</time>
            <p>{data.text}</p>
            {data.link && ( 
                <a 
                    href={data.link.url} 
                    target="_blank" 
                    rel="noopener noreferrer" >
                    {data.link.text}
                    <i className="play fas fa-play"></i>
                </a>
            )} 
            <span className="circle"></span>
        </div>
    </div>
    )
}

export default TimeLineItem