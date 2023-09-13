"use client"
import { faQuoteLeft,faCaretLeft,faCaretRight} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Splide,SplideSlide,SplideTrack} from '@splidejs/react-splide';
import  styles from "./reviews.module.css"
import "@splidejs/react-splide/css"
import { reviews } from "@/lib/reviews";


export default function Reviews(props) {
  
  return (
    <section className={styles.reviews}>
          <div className={styles.first}>
              <span className="title-support">Testimonials</span>
              <h2>Our Customers' Feedback</h2>
              <p> We are proud to share the heartfelt feedback we've received from our valued customers, as it speaks to the quality, dedication, and passion that define our photography services. Their words of praise and gratitude inspire us to continue painting memories that truly resonate with the heart. We invite you to explore these testimonials to gain insight into the unforgettable experiences we create for our clients.</p>
          </div>

          <div className={styles.display}>

            <Splide >

               {
               reviews.map(r=>(
                  <SplideSlide key={r.name}>
                    <div className={styles.review}>
                      <p><FontAwesomeIcon icon={faQuoteLeft} beatFade/> <br/>
                       {r.review}
                       </p>
                      <span>{r.name}</span>
                    </div>
                  </SplideSlide>
               ))
               }
            </Splide>
          </div>
          
          <div className={styles.controls}>
            <FontAwesomeIcon icon={faCaretLeft} />
            <FontAwesomeIcon icon={faCaretRight}/> 

         
          </div>
</section>
  )
}
