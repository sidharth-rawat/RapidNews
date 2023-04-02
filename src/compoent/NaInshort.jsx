import React from 'react'
import HamburgerDrawer from './HamburgerDrawer'
import './Nvinshort.css'
const NaInshort=({setcategories})=> {

  return (
    <div className='nav'>
        <div className="menu">
          
        </div>
        <div className="icon">  <HamburgerDrawer setcategories={setcategories}/></div>
        <p style={{cursor:'pointer', fontSize:'25px', fontFamily:'-moz-initial'}}>RapidNews</p>
    </div>
  )
}

export default NaInshort