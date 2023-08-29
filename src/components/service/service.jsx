import { faCamera } from "@fortawesome/free-solid-svg-icons"
import styles from "./service.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Service({icon=faCamera,name,description}) {
  return (
    <div className={styles.singleService}>
        <span className={styles.logo}><FontAwesomeIcon icon={icon}/></span>
        <h3>{name}</h3>
        <p>{description}</p>
    </div>
  )
}
