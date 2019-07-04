import React from 'react';
import './ImageList.css'

const ImageList = (props)=>{
    console.log(props.images);
    const imageList = props.images.map((img)=>{
            return <img key={img.id} src={img.urls.regular} alt={img.alt_description}/>
        });
    
    
        return(
            <div className="image-list">{imageList}</div>
        );

    }


export default ImageList;