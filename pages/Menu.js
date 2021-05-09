import Submenu from '../pages/Submenu'
import Link from 'next/link'
import styles from '../styles/Menu/Menu.module.css'
let Menu = () =>{
    var inst = 'https://www.instagram.com/prashant_jhim/'
    let Show = (id) =>{
    document.querySelector('.'+id).style.display ='flex'
    }
    let Close = (id) =>{
    document.querySelector('.'+id).style.display ='none'
    }
    return (
        <div id = {styles.Container}>
        <a id = {styles.Title} href = {inst}>Prashant Jhim</a>
        <Submenu/>
        <button id = {styles.button}  onClick = {()=>{Show(styles.Submenu2)}}>Menu</button>
        <div className = {styles.Submenu2} id = 'Contain' >
        <button id = {styles.close} onClick = {()=>{Close(styles.Submenu2)}}>X</button>
        <Link  href = '/'><button id = {styles.Link2}  onClick = {()=>{Close(styles.Submenu2)}}>Home</button></Link>
        <Link href = '/Pictures'><button id = {styles.Link2}  onClick = {()=>{Close(styles.Submenu2)}}>Pictures</button></Link>
        <Link href = '/Contact'><button id = {styles.Link2}  onClick = {()=>{Close(styles.Submenu2)}}>Contact</button></Link>
        <Link href = '/About'><button id = {styles.Link2}  onClick = {()=>{Close(styles.Submenu2)}}>About</button></Link>
        </div>
        </div>
    )
}
export default Menu