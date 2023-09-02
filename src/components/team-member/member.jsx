import styles from "./member.module.css"
import Image from "next/image"
export default function Member({name}) {
  return (
    <div className={styles.member}>
    <span className={styles.avatar}>
    <Image width="100" height="100" src="/images/prof-pics/p2.jpg"/>
    </span>
    <h3>{name}</h3>
    <small>Lorem, ipsum dolor.</small>
</div>
  )
}
