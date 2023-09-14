"use client"
import React from "react"
import Link from 'next/link';
import styles from "./navBar.module.css"

export default function MobileNav(){
    const [navOpen,setNavOpen] = React.useState(false)
     const handleNavOpen=()=>navOpen?setNavOpen(false):setNavOpen(true);
     const handleLinkClick = ()=>navOpen && setNavOpen(false);

    return( 
        <>
        <div className={`${styles.mobiToggle}`}>
                        <div onClick={handleNavOpen} className={`${styles.toggleBtn} ${navOpen && styles.toggleEffect}`}>
                            <span></span><span></span><span></span>
                        </div>
                </div>
                <div className={`${styles.offCanvas} ${navOpen && styles.offCanvasOpen}`}>
                        
                            <Link href="/" onClick ={handleLinkClick}>Home</Link>
                            <Link href="/about" onClick ={handleLinkClick}>About</Link>
                            <Link href="/showcase" onClick ={handleLinkClick}>Showcase</Link>
                            <Link href="#contact" onClick ={handleLinkClick}>Contact</Link>                   
                </div>
        </>);
}