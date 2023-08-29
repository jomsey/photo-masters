import { faFaceGrimace } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from "./social.module.css"

export default function SocialPack(){
    return(
        <div className={styles.pack +" pack"}>
          <FontAwesomeIcon icon={faFaceGrimace}/>
          <FontAwesomeIcon icon={faFaceGrimace}/>
          <FontAwesomeIcon icon={faFaceGrimace}/>
        </div>
    )
}