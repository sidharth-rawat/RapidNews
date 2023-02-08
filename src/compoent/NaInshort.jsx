import React from 'react'
import HamburgerDrawer from './HamburgerDrawer'
import './Nvinshort.css'
const NaInshort=({setcategories})=> {

  return (
    <div className='nav'>
        <div className="menu">
          
        </div>
        <div className="icon">  <HamburgerDrawer setcategories={setcategories}/></div>
        <img  style={{ cursor: "pointer" }}
        src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png"
        height="80%"       
        alt="" srcSet="" />
    </div>
  )
}

export default NaInshort