import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "./contact.module.css"
import { faAddressCard, faClock, faEnvelope, faPhoneFlip} from "@fortawesome/free-solid-svg-icons"

export default function Contact(){
    return(
        <section className={"contact "+ styles.contactContainer} id="contact">
            <div className={styles.first}>
                <h2>Contact Us</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates eius iure eaque facilis dolores impedit quod sed quidem, ut nobis.
                </p>
                <form>
                    <div className={styles.inputGroup}>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" />
                    </div>

                    <div className={styles.inputGroup}>
                        <label htmlFor="email">Email</label>
                        <input type="email" />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="message">Message</label>
                        <textarea  ></textarea>
                    </div>
                    <button type="submit">SEND</button>
                </form>
            </div>
            <div className={styles.second}>
                <h3>Info</h3>
                <div className={styles.container}>
                    <div className={styles.infoCluster}>
                        <FontAwesomeIcon icon={faEnvelope}/>
                        <span>ouremail@domain.com</span>
                    </div>
                    <div className={styles.infoCluster}>
                        <FontAwesomeIcon icon={faPhoneFlip}/>
                        <span>+256-456-789-000</span>
                    </div>
                    <div className={styles.infoCluster}>
                        <FontAwesomeIcon icon={faAddressCard}/>
                        <span>Kampala,Uganda</span>
                    </div>
                    <div className={styles.infoCluster}>
                        <FontAwesomeIcon icon={faClock}/>
                        <span>08:00 - 22:00</span>
                </div>
                 </div>
            </div>
        </section>
    )
}