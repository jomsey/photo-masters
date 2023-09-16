import styles from "./faq.module.css"
import Question from "./question"
export default function AskedQuestions(){
    return (<section className={styles.container}>
       <div className={styles.subContainer}>
       <h2>Frequent Quetions</h2>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse itaque eius enim consequatur deserunt non voluptatum assumenda numquam quia mollitia nemo nihil tempore sunt veniam vero cum nobis, accusantium pariatur?</p>
        <div className={styles.questions}>
            <Question
             question=" How can I book a photography session with your team?"
             answer="Booking a session with us is easy. Simply contact us through our website, email, or phone, and we'll guide you through the process, discuss your requirements, and schedule a date that works for you."
            />
            <Question
               question="Can I request specific editing or retouching for my photographs?"
               answer="Absolutely! We provide professional photo editing and retouching services to enhance the quality of your images. Feel free to discuss your specific preferences with our team.
            "
            />
            <Question
              question=" How long does it take to receive the edited photographs?"
              answer=" How long does it take to receive the edited photographs?

              The turnaround time for edited photographs varies depending on the scope of the project. We strive to deliver your beautifully edited images as promptly as possible, usually within a few weeks."
            />
    
        </div>
       </div>
    </section>);
}