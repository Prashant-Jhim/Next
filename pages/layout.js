import Menu from '../pages/Menu'
import Footer from '../pages/Footer'
let Layout  = ({children}) =>{
    return (
        <div id = 'Main'>
        <title>Prashant Jhim</title>
        <Menu/>
        {children}
        <Footer/>
        </div>
    )
}
export default Layout