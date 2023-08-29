import Link from "next/link"
import styles from "./footer.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

export default function Footer() {
  return (
    <footer>
         <main className={styles.container}>
         <section>
            <div className={styles.brand}>
              {/* <img src="/images/logo.png" className={styles.logo} alt="" /> */}
               <h4>4D 4TOGRAPHERS</h4>
            </div>
            <div className={styles.contacts}>
              <span className={styles.email}>jomseydev@gmail.com</span>
              <div className={styles.socialContainer}></div>
            </div>
         </section>

         <section className={styles.siteLinks}>
          <h4>Site Links</h4>
          
               <Link href="/">Blog</Link>
               <Link href="/">About</Link>
               <Link href="/">Disclaimer</Link>
               <Link href="/">FAQs</Link>
               <Link href="/">Gallery</Link>
          
         </section>
         <section className={styles.siteLinks}>
          <h4>Photography Services</h4>
               <Link href="/">Portrait</Link>
               <Link href="/">Wedding</Link>
               <Link href="/">Event</Link>
               <Link href="/">Fashion</Link>
               <Link href="/">Real Estate</Link>
               <Link href="/">Photo Editing & Retouching</Link>
          
         </section>
         <section>
              <h4>Get Our Newsletter</h4>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi architecto repellendus quo inventore exercitationem omnis similique.</p>
              <form>
                 <div className={styles.inputGroup}>
                 <input type="email" placeholder="Your Email Here" />
                 <FontAwesomeIcon icon={faEnvelope}/>
                 </div>
                 <button type="submit">Subscribe</button>
              </form>
         </section>
         </main>
         <div className={styles.copyright}>
           <span>&copy; Muwanguzi Joseph {new Date().getFullYear()}</span>
         </div>
    </footer>
  )
}
