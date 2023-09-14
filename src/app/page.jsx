import Image from "next/image";
import styles from "./page.module.css"
import images from "@/lib/gallery-images";
import Reviews from "@/components/reviews/reviews";
import Service from '../components/service/service';
import Gallery from './../components/gallery/gallery';
import Member from './../components/team-member/member';
import BookingButton from "@/components/bookingButton/button";
import ReadMoreButton from './../components/readMoreBtn/button';
import SeeGalleryButton from "@/components/seeGalleryButton/button";
import { faBookAtlas, faCakeCandles, faFilm, faPeopleGroup, faPhotoFilm, faPlaneUp,faRing, faTree, faTreeCity} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <>
      <section className={styles.landing} id="top">
        
             <div className={styles.heroText}>
                  <h1>Your<br/><span>Photography</span><br/>Masters</h1>
                  <p>Your memories are invaluable, and we are honored to be entrusted with capturing them.We believe in the magic of candid moments, genuine smiles, and natural beauty.</p>
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
               <p>Welcome to our photography world, where we take the brush of creativity and paint your memories onto the canvas of eternity.Our mission is to transform your treasured moments into timeless works of art. With every click of the shutter, we capture not just images but emotions, stories, and the essence of your unique experiences.</p>
               <p>We offer a personalized photography experience tailored to your specific needs. Whether it's a wedding, a family reunion, or a special event, we collaborate closely with you to understand your vision. Our goal is to create a visual narrative that reflects your style, personality, and the true essence of the moment.

</p>
          </div>

          <div>
              <Image 
                    src="/images/b2x.jpg"
                    width="1800"
                    height="1200"
                    loading="lazy"
                    alt="camera man"
              />
          </div>

      </section>

      <section className={styles.services}>
          <span className="title-support">Our Tool Box</span>
          <h2>Services  We Offer</h2>
          <p> We offer a wide range of photography services tailored to meet your unique needs and capture your most precious moments. Our team of skilled photographers is committed to delivering exceptional results that you'll treasure for a lifetime. Explore our services below</p>
        <div className={styles.servicesContainer}>
              <Service
                  name="Photo Editing and Retouching" 
                  icon={faPhotoFilm}
                  description="Enhance the beauty of your photos with our professional photo editing and retouching services. We ensure that every image meets the highest standards of quality and aesthetic."
              />
                  
              <Service
              icon={faCakeCandles}
                name="Events Photography"
                description="Whether it's a birthday celebration, anniversary, or corporate event, our event photography services ensure that every moment and detail is captured in style."
              />

              <Service
                  name ="Nature and Landscape Photography"
                  icon={faTree}
                  description="Discover the beauty of the natural world through our lens. Our nature and landscape photography showcases the awe-inspiring scenery of various destinations"
              />
              <Service
                 name="Portrait Sessions"
            
                 description="Our portrait sessions are a platform for self-expression and creativity. Whether it's an individual portrait, couple's session, or a personal branding shoot, we bring out your unique personality"

              />
              <Service
                name="Family Portraits"
                icon={faPeopleGroup}
                description="Preserve your family's bond with stunning family portrait sessions. From candid moments to formal group shots, we capture the essence of your family's unique connection"

              />
              <Service
                name="Wedding Photography"
                icon={faRing}
                description="Your special day deserves to be beautifully documented. We specialize in capturing the love, joy, and emotions of weddings, creating timeless memories for you and your loved ones."

              />
        </div>
      </section>
      

      <section className={styles.butter}>
              <div className={styles.col1}>
                  <span className="title-support">Our Story</span>
                  <h2>Capturing moments since...</h2>
                  <p>"Our Story" is a tale of passion, creativity, and a relentless pursuit of capturing the beauty of life through the lens. It all began with a shared love for photography among our founders, who believed in the power of a single photograph to convey emotions, stories, and memories that words often fall short of. Fuelled by this belief, we embarked on a journey to turn moments into masterpieces, and "We Paint Your Memories" was born</p>
                  <p>Over the years, our journey has been a canvas painted with the colors of diverse experiences. We've had the privilege of witnessing countless weddings, family reunions, travel adventures, and special events, each with its own unique story waiting to be told. Our dedication to understanding the essence of every moment and capturing it with an artist's eye has earned us the trust of our clients, who have become a part of our extended photography family.</p>
                  <p>As our story unfolded, so did our commitment to continuous improvement and creativity. We've embraced the evolution of photography, mastering new techniques, and staying at the forefront of technology to ensure that each click is a step closer to perfection. Our team's collective passion and drive to excel have been the driving force behind our growth and success.</p>
                  <ReadMoreButton/>
              </div>

              <div className={styles.col2}>
                   <Image 
                        src="/images/b25.jpg"
                        width="1500"
                        height="1800"
                        loading="lazy"
                        alt="seated holding a tablet"/>
              </div>

      </section>


      <section className={styles.vision}>
            <div className={styles.col1}>
                <Image 
                    width="434"
                    height="575" 
                    src="/images/b8.png" 
                    loading="lazy" 
                    alt="camera"/>
            </div>

            <div className={styles.col2}>
            <span className="title-support">We Are Motivated</span>
                <h2>Our Vision</h2>
                <p>Our vision is deeply rooted in the idea that photography should tell a story. Whether it's the laughter shared between loved ones, the sparkle in your eyes on your special day, or the breathtaking landscapes we encounter, we aim to encapsulate the soul of these moments in every photograph. We envision our work becoming a source of inspiration, evoking emotions, and stirring memories for generations to come.</p>
                <p>We want to redefine the way you experience photography. We believe that a photograph is not just an image; it's a gateway to the past, a reflection of emotion, and a portal to relive your most cherished moments. Our vision is to capture the essence of life's beauty, one frame at a time, and to create a visual legacy that transcends time and resonates with the heart.</p>
                <p>our vision extends beyond the ordinary. We aspire to be more than just photographers; we aspire to be storytellers, artists, and memory-makers. We envision a world where every click of our camera paints your memories in the most vibrant and authentic way possible. Join us in realizing this vision as we embark on a creative journey to capture the beauty and emotion of your life's most precious moments.</p>
            </div>
      </section>
  
      <Reviews/>

      <section className={styles.teamMembers}>
          <span className="title-support">Good People</span>

          <h2>Meet Our Team</h2>
          <p>Meet the artists who will be capturing your moments of love, joy, and celebration. Our team is a blend of seasoned professionals with years of experience and fresh talents brimming with creativity. We understand that every event is unique, and our diverse skills and personalities allow us to adapt and deliver photography that reflects your individuality.</p>
         
          <div className={styles.teamMembersContainer}> 
                <Member name="Neckyon"/>
                <Member name="Sam Doe" task="Drone Pilot"/>
                <Member name="Jane Doe"/>
                <Member name="Anne Doe"  task="Graphic Designer"/>
            
          </div>
          
      </section>
        <Gallery images={images}/>

    </>
  )
}
