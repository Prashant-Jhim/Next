import Link from "next/link"
import styles from '../styles/Menu/Submenu.module.css'
let Submenu = () =>{
    return (
        <div className = {styles.container}>
        <div className = {styles.Submenu} id = 'Contain' >
        <Link  href = '/'><button id = {styles.Link}>Home</button></Link>
        <Link href = '/Pictures'><button id = {styles.Link}>Pictures</button></Link>
        <Link href = '/Contact'><button id = {styles.Link}>Contact</button></Link>
        <Link href = '/About'><button id = {styles.Link}>About</button></Link>
        </div>
        </div>
    )
}
export default Submenu