"use client"
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "./contact.module.css"
import { faAddressCard, faClock, faEnvelope, faPhoneFlip, faSpinner} from "@fortawesome/free-solid-svg-icons"

export default function Contact(){
    const [errors,setErrors] = React.useState(null);
    const [isLoading,setIsLoading] = React.useState(false)
    const [message,setMessage] = React.useState(null)
    const [formData,setFormData]=React.useState({})

    const handleFormSubmit= async e=>{
        e.preventDefault()
        setIsLoading(true)
        
        if (formData){
              try {
              const response =  await fetch("/api/message",{
                    method:"POST",
                    body:formData
                  })
          
            } catch (error) {}
            finally{
             setIsLoading(false)
        }}

    }

    const handleFieldChange=(e)=>{
        const name =  e.target.name
        const value = e.target.value        
        setFormData(data=>({...data,[name]:value}))
    }

    return(
        <section className={"contact "+ styles.contactContainer} id="contact">
            <div className={styles.first}>
                <h2>Contact Us</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates eius iure eaque facilis dolores impedit quod sed quidem, ut nobis.
                </p>
                <form onSubmit={handleFormSubmit} method="post">
                    <div className={styles.inputGroup}>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" onChange={handleFieldChange}/>
                    </div>

                    <div className={styles.inputGroup}>
                        <label htmlFor="email">Email</label>
                        <input name="email" type="email" onChange={handleFieldChange}/>
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="message">Message</label>
                        <textarea name="message" onChange={handleFieldChange}></textarea>
                    </div>
                    <button type="submit">SEND {isLoading && <FontAwesomeIcon icon={faSpinner} spin/>}</button>
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