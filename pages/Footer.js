import styles from '../styles/Footer/Footer.module.css'
let Footer = () =>{
    var Inst = 'https://www.instagram.com/prashant_jhim/'
    var Face = 'https://www.facebook.com/prashant.jhim.5'
    var Twit = 'https://prashant-jhim.github.io/To-Do-App/'
    return (
        <div id = {styles.Container}>
        <h2>Follow Us</h2>
        <a id = {styles.first} href = {Inst}>Instagram</a>
        <a id = {styles.second} href = {Face}>Facebook</a>
        <a id = {styles.third} href = {Twit}>Twitter</a>
        </div>
    )
}
export default Footer