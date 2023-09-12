"use client"
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "./contact.module.css"
import { faAddressCard, faClock, faEnvelope, faPhoneFlip, faSpinner} from "@fortawesome/free-solid-svg-icons"

export default function Contact(){
    const [errors,setErrors] = React.useState({});
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
        const validEmail = /^[a-z0-9]+@[a-z]+\.[a-z]/
         
        //validate input fields 
        value.trim() === ""?setErrors(e=>({...e,[name]:`${name} can't be empty`})):delete errors[name];
        //check for valid email address
        name === "email" && value.trim() !== "" && ! validEmail.test(value)?setErrors(e=>({...e,email:"Enter a valid email"})):delete errors["email"];
        
        setFormData(data=>({...data,[name]:value}))
    }


    

    return(
        <section className={"contact "+ styles.contactContainer} id="contact">
            <div className={styles.first}>
                <h2>Contact Us</h2>
                <p>We understand that every photography project is unique. Contact us to discuss customized packages tailored to your specific requirements.</p>
                <form onSubmit={handleFormSubmit} method="post" noValidate>
                    <div className={styles.inputGroup}>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" onChange={handleFieldChange}/>
                        <small className={styles.formError}>{errors.name !==null  && errors.name}</small>
                    </div>

                    <div className={styles.inputGroup}>
                        <label htmlFor="email">Email</label>
                        <input name="email" type="email"   onChange={handleFieldChange}/>
                        <small className={styles.formError}>{errors.email !==null  && errors.email}</small>

                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="message">Message</label>
                        <textarea name="message" onChange={handleFieldChange}></textarea>
                        <small className={styles.formError}>{errors.message !==null  && errors.message}</small>

                    </div>
                    <button  type="submit">SEND {isLoading && <FontAwesomeIcon icon={faSpinner} spin/>}</button>
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