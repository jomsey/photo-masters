"use client"

import React from "react"
import styles from "./booking.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckCircle, faEdit, faPenRuler, faPhone, faSpinner } from "@fortawesome/free-solid-svg-icons"

export default function Booking(){
   const [formSubmittingDone ,setFormSubmittingDone] = React.useState(false)
   const [bookingDone ,setBookingDone] = React.useState(false)
   const [formData,setFormData] = React.useState(null)


   const handleSubmit = e =>{
      e.preventDefault()
      //setBookingDone(true)
      try {
         console.log(formData)
      } catch (error) {
         
      }
      finally{

      }
      
   }

   const handleFieldChange=e=>{
      const value = e.target.value
      const name = e.target.name
      setFormData(data=>({...data,[name]:value}))
   }
   
 return (
    <section className={styles.container}>
       <h1>Book A Session</h1>

      {
         bookingDone?(
         <div className={`${styles.row} ${styles.comfirm}`}>
         <h4><FontAwesomeIcon icon={faCheckCircle}/> Booking Comfirmed</h4>
         <div className={styles.slot}>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, unde. Error fuga aliquid est quisquam eveniet perspiciatis perferendis aperiam deleniti porro exercitationem molestiae, magnam voluptate tempore minima autem, quos optio.</p>
         </div>
         <div className={` ${styles.help}`}>
               <div>
                  <h5>Session stage on</h5>
                  <span>10-11-2023 at 11 AM</span>
               </div>
               <button type="submit"><FontAwesomeIcon icon={faEdit} /> Reschedule</button>
         </div>
      </div>
         ):

       (<div className={styles.row}>
         <form onSubmit={handleSubmit} method="POST">
            
            <div className={styles.slot}>
               <h4>Schedule</h4>
                <div className={styles.inputGroup}>
                           <label htmlFor="name">Date & Time</label>
                           <input type="datetime-local" name="dateTime" onChange={handleFieldChange} />
                     </div>
                
            </div>
            <div className={styles.slot}>
               <h4>Contact Infomation</h4>
               <div className={styles.infoContainer}>
                 <div>
                     <div className={styles.inputGroup}>
                           <label htmlFor="name">Name / Company</label>
                           <input type="text" name="company" onChange={handleFieldChange} />
                     </div>
                     <div className={styles.inputGroup}>
                           <label htmlFor="email">Email</label>
                           <input type="text" name="email" onChange={handleFieldChange} />
                     </div>
                     <div className={styles.inputGroup}>
                           <label htmlFor="phone">Phone</label>
                           <input type="text" name="phone" onChange={handleFieldChange} />
                     </div>
                     <div className={styles.inputGroup}>
                           <label htmlFor="address">Address</label>
                           <input type="text" name="address" onChange={handleFieldChange} />
                     </div>
                 </div>
                  
                 <div>
                     <div className={styles.inputGroup}>
                           <label htmlFor="venueAddress">Venue Address</label>
                           <input type="text" name="venueAddress" />
                     </div>
                     <div className={styles.inputGroup}>
                           <label htmlFor="session">Session Type</label>
                           <select name="session" onChange={handleFieldChange}>
                              <option value="none">select session</option>
                              <option value="Wedding">Wedding</option>
                              <option value="Fashion">Fashion</option>
                              <option value="Birthday">Birthday</option>
                              <option value="Real Estate">Real Estate</option>
                              <option value="other">Other</option>
                           </select>
                     </div>
                     <div className={styles.inputGroup}>
                           <label htmlFor="name">Phone</label>
                           <input type="text" />
                     </div>
                     <div className={styles.inputGroup}>
                           <label htmlFor="name">Address</label>
                           <input type="text" />
                     </div>
                 </div>
               </div>
                
            </div>
            <div className={`${styles.slot} ${styles.help}`}>
                    <div>
                        <h5>Need Our Help ?</h5>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa, harum tempore quae asperiores fuga est.</p>
                    </div>
                    <button type="submit"><FontAwesomeIcon icon={faPhone} /> +256-123-456-789</button>
                 </div>
           <button type="submit">SUBMIT REQUEST <FontAwesomeIcon icon={faSpinner} spin/></button>
         </form>
       </div>)}
       
    </section>
 )
}