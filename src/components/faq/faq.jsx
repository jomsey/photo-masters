import styles from "./faq.module.css"
import Question from "./question"
export default function AskedQuestions(){
    return (<section className={styles.container}>
       <div className={styles.subContainer}>
       <h2>Frequent Quetions</h2>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse itaque eius enim consequatur deserunt non voluptatum assumenda numquam quia mollitia nemo nihil tempore sunt veniam vero cum nobis, accusantium pariatur?</p>
        <div className={styles.questions}>
            <Question/>
            <Question/>
            <Question/>
            <Question/>
            <Question/>
            <Question/>
        </div>
       </div>
    </section>);
}