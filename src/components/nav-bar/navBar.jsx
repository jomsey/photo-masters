"use client"
import React from 'react';
import Link from 'next/link';
import styles from "./navBar.module.css";
import { faPhoneAlt} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function NavBar() {
  const [navOpen,setNavOpen] = React.useState(false)
  const handleNavOpen=()=>navOpen?setNavOpen(false):setNavOpen(true);
  const handleLinkClick = ()=>navOpen && setNavOpen(false);

  return (
    <nav>
        <div className={styles.navContainer}>
            <div className={styles.logo} ><img src="/next.svg" alt="" /></div>
            <div className={styles.navLinks}>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/showcase">Showcase</Link></li>
                    <li><Link href="#contact">Contact</Link></li>
                    {/* <li><Link href="/blog">Blog</Link></li> */}
              
                </ul>
            </div>
            
         <div className={styles.navContact}>
            <ul>
                <li><a href="tel:+254114411886"><button type="button">Call Us <FontAwesomeIcon icon={faPhoneAlt} shake /></button></a></li>

            </ul>
         </div>
        </div>
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
    </nav>
  )
} 
