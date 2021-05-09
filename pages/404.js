import Link from 'next/link'
import {useEffect} from 'react'
import {useRouter} from 'next/router'
let NotFound = () =>{
    var router = useRouter()
    useEffect(()=>{
        setTimeout(()=>{
            router.push('/')
        },3000)
    },[])
    return (
        <div>
        <h1>Not Found</h1>
        <Link href = '/'>Go To Home</Link>
        </div>
    )
}
export default NotFound