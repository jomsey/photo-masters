import Image from "next/image";
import styles from "./aboutUs.module.css";

export const metadata = {
  title: 'Jose Demo - About Us',
  description: 'Site description will appear here -- Coming soon  [Developed by Muwanguzi Joseph] ',
}

export default function AboutUs() {
  
  return (
    <>
      <header id="top" className={styles.landing} >
        <h1>About Us</h1>
      </header>
      <main className={styles.container}>
         <section className={styles.oreo}>
           <div className={styles.col1}>
                <Image width="400" height="400" src="/images/b16.jpg"/>
                <Image width="400" height="400" src="/images/b35.jpg"/> 
           </div>

           <div className={styles.col2}>
              <span className="title-support">Lorem ipsum dolor sit.</span>
              <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, dolorem.</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet provident, ipsum necessitatibus, repellendus in impedit aliquam vitae dignissimos libero excepturi dicta quam quos magnam assumenda quaerat totam consequuntur nisi tempora.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet provident, ipsum necessitatibus, repellendus in impedit aliquam vitae dignissimos libero excepturi dicta quam quos magnam assumenda quaerat totam consequuntur nisi tempora.</p>
          </div>
         </section>

        <section className={styles.lollipop}>
            <div>
               <span className="title-support">Lorem ipsum dolor sit.</span>
               <h2>Lorem, ipsum dolor.</h2>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet provident, ipsum necessitatibus, repellendus in impedit aliquam vitae dignissimos libero excepturi dicta quam quos magnam assumenda quaerat totam consequuntur nisi tempora.</p>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet provident, ipsum necessitatibus, repellendus in impedit aliquam vitae dignissimos libero excepturi dicta quam quos magnam assumenda quaerat totam consequuntur nisi tempora.</p>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet provident, ipsum necessitatibus, repellendus in impedit aliquam vitae dignissimos libero excepturi dicta quam quos magnam assumenda quaerat totam consequuntur nisi tempora.</p>
            </div>
            <div>
            <Image width="400" height="400" src="/images/b5.jpg"/>
            </div>
        </section>

         <section className={styles.bingo}>
             <span className="title-support">Lorem ipsum dolor sit.</span>
             <h2>Lorem ipsum dolor sit.</h2>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet provident, ipsum necessitatibus, repellendus in impedit aliquam vitae dignissimos libero excepturi dicta quam quos magnam assumenda quaerat totam consequuntur nisi tempora.</p>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet provident, ipsum necessitatibus, repellendus in impedit aliquam vitae dignissimos libero excepturi dicta quam quos magnam assumenda quaerat totam consequuntur nisi tempora.</p>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet provident, ipsum necessitatibus, repellendus in impedit aliquam vitae dignissimos libero excepturi dicta quam quos magnam assumenda quaerat totam consequuntur nisi tempora.</p>
         </section>
         
      </main>

    </>
  )
}
