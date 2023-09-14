import styles from "./member.module.css"
import Image from "next/image"


export default function Member({name,task}) {
  return (
    <div className={styles.member}>
    <span className={styles.avatar}>
    <Image 
        width="100"
        height="100"
        src="/images/prof-pics/p2.jpg"
        alt="profile pic"/>
    </span>
    <h3>{name}</h3>
    {/* <small>{task || "Photographer"}</small> */}
</div>
  )
}
