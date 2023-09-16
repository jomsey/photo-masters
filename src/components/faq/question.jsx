"use client";
import { faPlus,faMinus } from "@fortawesome/free-solid-svg-icons";
import styles from "./faq.module.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function  Quetion({question,answer}){
    const [answerVisible,setAnswerVisible] = React.useState(false);

    return (
        <div className={styles.questionContainer}>
            <div className={styles.top} onClick={()=>answerVisible?setAnswerVisible(false):setAnswerVisible(true)}> 
                <FontAwesomeIcon icon={answerVisible?faMinus:faPlus}/>
                <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, incidunt explicabo ?</h3>
           </div>
            {
                answerVisible &&
                <div className={styles.answerContainer}>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur neque fuga, quibusdam, earum beatae cupiditate animi cumque magni blanditiis fugiat amet consequuntur quidem, ex illum nihil nobis impedit fugit delectus harum similique obcaecati. Non, eligendi!</p>
               </div>
            }
        </div>
    )
}