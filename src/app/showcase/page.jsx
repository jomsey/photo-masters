import React from 'react'
import Image from 'next/image'
import styles from "./showcase.module.css"
import Gallery from '@/components/album/gallery'

export const metadata = {
  title: 'Jose Demo - Showcase',
  description: 'Site description will appear here -- Coming soon  [Developed by Muwanguzi Joseph] ',
}
export default function Showcase() {
  return (
    <>
    <header id="top" className={styles.top}>
      <h1>Real Work</h1>
    </header>
    <main className={styles.container}>
       <section className={styles.dp1} >
           <div className={styles.row1}>
              <div>
                    <Image width="400" height="400" src="/images/p3.jpg"/> 
                </div>

                <div className={`${styles.center}`}>
                    <h2>Lorem, ipsum dolor.</h2>
                    <span className="title-support">We Are Motivated</span>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias nostrum nesciunt animi, ab deleniti ut doloribus, quas dolor ipsam sunt magnam hic qui beatae earum corrupti. Natus, laboriosam amet tempore ipsam vero distinctio error adipisci maiores velit reprehenderit esse hic.</p>
                </div>
           </div>

           {/* <div className={`${styles.row2} ${styles.center}`}>
                <div>
                    <Image width="400" height="400" src="/images/b20.jpg"/> 
                      <span>Lorem ipsum dolor sit amet.</span>
                </div>
                
                <div> 
                    <Image width="400" height="400" src="/images/b26.jpg"/> 
                    <span>Lorem ipsum dolor sit amet.</span>
                  </div>
                
                <div>
                      <Image width="400" height="400" src="/images/b29.jpg"/> 
                      <span>Lorem ipsum dolor sit amet.</span>
                </div>
           </div> */}

       </section>

       <section className={styles.dp1} >
           <div className={`${styles.row1} ${styles.rowRev}`}>
              <div>
                    <Image width="400" height="400" src="/images/b21.jpg"/> 
                </div>

                <div className={`${styles.center}`}>
                    <h2>Lorem, ipsum dolor.</h2>
                    <span className="title-support">We Are Motivated</span>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias nostrum nesciunt animi, ab deleniti ut doloribus, quas dolor ipsam sunt magnam hic qui beatae earum corrupti. Natus, laboriosam amet tempore ipsam vero distinctio error adipisci maiores velit reprehenderit esse hic.</p>
                </div>
           </div>

           {/* <div className={`${styles.row2} ${styles.center}`}>
                <div>
                    <Image width="400" height="400" src="/images/b28.jpg"/> 
                      <span>Lorem ipsum dolor sit amet.</span>
                </div>
                
                <div> 
                    <Image width="400" height="400" src="/images/b15.jpg"/> 
                    <span>Lorem ipsum dolor sit amet.</span>
                  </div>
                
                <div>
                      <Image width="400" height="400" src="/images/b18.jpg"/> 
                      <span>Lorem ipsum dolor sit amet.</span>
                </div>
           </div> */}
       </section>
       <Gallery/>
    </main>
    </>
  )
}
