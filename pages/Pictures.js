import Card from '../pages/Card'
import styles from '../styles/Pictures/Pictures.module.css'
let Pictures = () =>{
    let Images = [
        {src:'/Simp (2).jpg'},
        {src:'/Simp (3).jpg'},
        {src:'/Simp (4).jpg'},
        {src:'/Simp (5).jpg'},
        {src:'/Simp (6).jpg'},
        {src:'/Simp (7).jpg'}
    ]
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