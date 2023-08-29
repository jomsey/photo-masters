"use client"

import styles from "./player.module.css"
import React from "react"


export default function Video(){
    const [isPlaying,setIsPlaying] = React.useState(false)
    const videoRef = React.useRef(null)

    const handlePlayButtonClick=()=>{
          if (isPlaying){
            setIsPlaying(false)
            videoRef.current.pause()
          }
          else{
            setIsPlaying(true)
            videoRef.current.play()
          }
          
    }

    return <div className={styles.container}>
                <div className={`${styles.controlsOverlay} ${!isPlaying && styles.visible}`}>
                   <button onClick={handlePlayButtonClick} >{isPlaying?"Pause":"Play"}</button>      
                </div>
               <video ref={videoRef} src="/videos/dive.mp4" loop muted ></video>;
            </div>;
}