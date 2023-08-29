"use client"

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from "./btt.module.css"
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

export default function BackToTop() {
      const [btnVisible,setBtnVisible] = React.useState(false)
      
      React.useEffect(()=>{
        document.addEventListener("scroll",e=>{
            Math.floor(window.scrollY)>800? setBtnVisible(true):setBtnVisible(false);
        }),()=>{
          document.removeEventListener("scroll")
        }
      },[])

  
       return (
            <a  href="#top" className={`${styles.btp} ${btnVisible && styles.btnVisible}`}>
                <FontAwesomeIcon icon={faArrowUp}/>
             </a>
  )
}
