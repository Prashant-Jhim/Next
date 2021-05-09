import Images from '../pages/Pictures/Data'
import Card from '../pages/Card'
import styles from '../styles/Pictures/Pictures.module.css'
let Pictures = () =>{
    let Print = (arr) =>{
        console.log(arr)
        return(
            <Card src = {arr.src} />
        )
    }
    return (
        <div id = {styles.Container}>
        {Images.map(Print)}
        </div>
    )
}
export default Pictures