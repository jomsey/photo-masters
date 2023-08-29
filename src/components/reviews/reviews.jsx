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
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam quidem perferendis cupiditate officiis consequatur numquam fuga nobis cum error ea.</p>
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
