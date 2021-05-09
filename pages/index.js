import Link from 'next/link'
import Image from 'next/image'
import SubHome1 from './SubHome1'
import styles from '../styles/Home/Home.module.css'
export default function Home() {
  var img = 'https://image.freepik.com/free-vector/visual-data-concept-illustration_114360-1713.jpg'
  return (
    <div id = {styles.Main}>
    <SubHome1/>
    <img src = {img} id = {styles.img}></img>
    </div>
    
  )
}
