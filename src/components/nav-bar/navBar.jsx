import Link from 'next/link';
import styles from "./navBar.module.css";
import { faPhoneAlt} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MobileNav from './mobileNav';


export default function NavBar() {
  return (
    <nav>
        <div className={styles.navContainer}>
            <Link href="\"> <div className={styles.logo} ><img src="/next.svg" alt="" /></div></Link>
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
        <MobileNav/>
    </nav>
  )
} 
