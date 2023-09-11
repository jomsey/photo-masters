import Image from "next/image";
import styles from "./page.module.css"
import images from "@/lib/gallery-images";
import Video from "@/components/player/player";
import Reviews from "@/components/reviews/reviews";
import Service from '../components/service/service';
import Gallery from './../components/gallery/gallery';
import Member from './../components/team-member/member';
import BookingButton from "@/components/bookingButton/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faBookAtlas, faFilm, faPhotoFilm, faPlane, faPlaneUp,faRing} from "@fortawesome/free-solid-svg-icons";
import SeeGalleryButton from "@/components/seeGalleryButton/button";
import ReadMoreButton from './../components/readMoreBtn/button';

export default function Home() {
  return (
    <>
      <section className={styles.landing} id="top">
        
             <div className={styles.heroText}>
                  <h1>Your<br/><span>Photography</span><br/>Masters</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure est perferendis asperiores in accusantium voluptas qui sint nemo nostrum eos.</p>
            </div>
            <div className={styles.landingButtons}>
              <BookingButton/>
              <SeeGalleryButton/>
            </div>
       
      </section>

      <section className={styles.preamble}>
          <div>
               <span className="title-support">Your number one option</span>
               <h2>We Paint Your Memories</h2>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse corrupti magni delectus inventore pariatur officia ex quasi, necessitatibus tempora quia nesciunt numquam suscipit quo nihil dolores architecto voluptates ipsam animi doloremque repellat rerum asperiores. Quo praesentium consectetur consequuntur officia unde?</p>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quaerat commodi distinctio quibusdam hic ut omnis, quas adipisci fugit quisquam eos quasi ullam explicabo facere pariatur vel quod nihil voluptatibus?</p>
          </div>

          <div>
              <Image 
                    src="/images/b2x.jpg"
                    width="400"
                    height="300"
                    loading="lazy"
                    alt="camera man"
              />
          </div>

      </section>

      <section className={styles.services}>
          <span className="title-support">Our Tool Box</span>
          <h2>Services  We Offer</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque numquam totam rem. Iste repellendus praesentium dolores alias! Tempora quasi eius nihil at voluptatum. Aut, officia asperiores! Animi ipsam omnis natus?s</p>

        <div className={styles.servicesContainer}>
              <Service
                  name="Photos & Videos Editing" 
                  icon={faPhotoFilm}
                  description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis libero exercitationem adipisci corrupti sed, optio possimus."
              />
                  
              <Service
                name="Events Photography"
                description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis libero exercitationem adipisci corrupti sed, optio possimus."
              />

              <Service
                  name ="Video Shooting & Filming"
                  icon={faFilm}
                  description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis libero exercitationem adipisci corrupti sed, optio possimus."
              />
              <Service
                 name="Branding"
                 icon={faBookAtlas}
                 description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis libero exercitationem adipisci corrupti sed, optio possimus."

              />
              <Service
                name="Drone Videography"
                icon={faPlaneUp}
                description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis libero exercitationem adipisci corrupti sed, optio possimus."

              />
              <Service
                name="Wedding Photography"
                icon={faRing}
                description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis libero exercitationem adipisci corrupti sed, optio possimus."

              />
        </div>
      </section>
      

      <section className={styles.butter}>
              <div className={styles.col1}>
                  <span className="title-support">Our Story</span>
                  <h2>Lorem, ipsum dolor sit amet consectetur adipisicing.</h2>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea eius, dicta facilis dolor voluptatem dolorum molestias, sint nemo sed vel cumque! Dolorum, eius? Nemo blanditiis reprehenderit excepturi, sit laudantium ad!</p>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea eius, dicta facilis dolor voluptatem dolorum molestias, sint nemo sed vel cumque! Dolorum, eius? Nemo blanditiis reprehenderit excepturi, sit laudantium ad!</p>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea eius, dicta facilis dolor voluptatem dolorum molestias, sint nemo sed vel cumque! Dolorum, eius? Nemo blanditiis reprehenderit excepturi, sit laudantium ad!</p>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea eius, dicta facilis dolor voluptatem dolorum molestias, sint nemo sed vel cumque! Dolorum, eius? Nemo blanditiis reprehenderit excepturi, sit laudantium ad!</p>
                  <ReadMoreButton/>
              </div>

              <div className={styles.col2}>
                   <Image 
                        src="/images/b25.jpg"
                        width="500"
                        height="500"
                        loading="lazy"
                        alt="seated holding a tablet"/>
              </div>

      </section>


      <section className={styles.vision}>
            <div className={styles.col1}>
                <Image width="400" height="400" src="/images/b8.png" loading="lazy"/>
            </div>

            <div className={styles.col2}>
            <span className="title-support">We Are Motivated</span>
                <h2>Our Vision</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea eius, dicta facilis dolor voluptatem dolorum molestias, sint nemo sed vel cumque! Dolorum, eius? Nemo blanditiis reprehenderit excepturi, sit laudantium ad!</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea eius, dicta facilis dolor voluptatem dolorum molestias, sint nemo sed vel cumque! Dolorum, eius? Nemo blanditiis reprehenderit excepturi, sit laudantium ad!</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea eius, dicta facilis dolor voluptatem dolorum molestias, sint nemo sed vel cumque! Dolorum, eius? Nemo blanditiis reprehenderit excepturi, sit laudantium ad!</p>
            </div>
      </section>
  
      <Reviews/>

      <section className={styles.teamMembers}>
          <span className="title-support">Good People</span>

          <h2>Meet Our Team</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque numquam totam rem. Iste repellendus praesentium dolores alias! Tempora quasi eius nihil at voluptatum. Aut, officia asperiores! Animi ipsam omnis natus?s</p>
         
          <div className={styles.teamMembersContainer}> 
                <Member name="Neckyon"/>
                <Member name="Sam Doe" task="Drone Pilot"/>
                <Member name="Jane Doe"/>
                <Member name="Anne Doe"  task="Graphic Designer"/>
                <Member name="Bill Doe"/>
                <Member name="Sam Doe"/>
                <Member name="Jane Doe"/>
                <Member name="Anne Doe"/>
          </div>
          
      </section>
        <Gallery images={images}/>

    </>
  )
}
