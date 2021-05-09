import styles from '../styles/About/About.module.css'
let About = () =>{
    return (
        <div id = {styles.Container}>
        <img src = '/Simp (2).jpg'/>
        <div id = {styles.Details}>
        <h1>About Me</h1>
        <p>1. I am Self-Taught Developer(Front-End)</p>
        <p>2. Currently Learning Next.js(React-Framework)</p>
        <p>3. Have Huge Interest In Making Interesting Web Apps</p>
        <p>4. Self-Confident That I Will Master All Web Framework</p>
        </div>
        </div>
    )
}
export default About