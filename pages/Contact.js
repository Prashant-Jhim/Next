import styles from '../styles/Contact/Contact.module.css'

let Contact = () =>{
    var Inst = 'https://www.instagram.com/prashant_jhim/'
    var Face = 'https://www.facebook.com/prashant.jhim.5'
    var Git = 'https://github.com/Prashant-Jhim'
    return (
        <div id = {styles.Container}>
        <div id = {styles.Details}>
        <h1>Ways to Contact Me </h1>
        <h3>1-<a href ={Inst}><button>Instagram</button></a></h3>
        <h3>2-<a href = {Face}><button>Facebook</button></a></h3>
        <h3>3-<a href = {Git}><button>Github</button></a></h3>
        </div>
        <img id = {styles.img} src = '/character 23.svg'/>
        
        </div>
    )
}
export default Contact