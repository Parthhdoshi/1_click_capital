import React from 'react'
import './index.scss'
import { Link } from 'react-router-dom'
import LogoS from "../../assets/images/logo-s.png" 
import LogoSubtitle from "../../assets/images/logo_sub.png" 

const Sidebar = () => (

    <div className='nav-bar'>
       <Link className='logo' to="/">
         <img scr={LogoS} alt="logo"/>
         <img scr={LogoSubtitle} alt="logo"/>
       </Link>
    </div>
)


export default Sidebar