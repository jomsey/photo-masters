"use client"
import React from "react";
import styles from "./gallery.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX,faCamera } from "@fortawesome/free-solid-svg-icons";
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
import images from "@/lib/gallery-images";


export default function Gallery(props){
    const [galleryVisible,setGalleryVisble] = React.useState(false)

    
    React.useEffect(() => {
        let lightbox = new PhotoSwipeLightbox({
          gallery: '#' + props.galleryID,
          children: 'a',
          pswpModule: () => import('photoswipe'),
          imageClickAction:
'next',
        });
        lightbox.init();
    
        return () => {
          lightbox.destroy();
          lightbox = null;
        };
      }, []);

    const handleViewgalleryButtonClick=()=>{
        galleryVisible?setGalleryVisble(false):setGalleryVisble(true)
    }
    return(
        <>
         <button className={styles.viewBtn} onClick={handleViewgalleryButtonClick}>View Photo Album</button>
         {
            galleryVisible && 
            <section className={styles.container}> 
            <button onClick={()=>setGalleryVisble(false)} className={styles.close}><FontAwesomeIcon  icon={faX}/></button>

            <div className={styles.album} id="simple">
             {images.map((image, index) => (
                    <a
                        href={image.largeURL}
                        data-pswp-width={image.width}
                        data-pswp-height={image.height}
                        key={index}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <div className={styles.galleryImage}>
                        <div className={styles.overlay}><FontAwesomeIcon icon={faCamera}/></div>
                        <img src={image.thumbnailURL} alt="" />
                    </div>
                    </a>
      ))}
    </div>
            </section>
         }
        
        </>
    )

}