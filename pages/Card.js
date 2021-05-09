import styles from '../styles/Pictures/Card.module.css'
let Card = (props) =>{
    return (
        <div id = {styles.Card}>
        <img src = {props.src} alt = 'nothing'/>
        </div>
    )
}
export default Card