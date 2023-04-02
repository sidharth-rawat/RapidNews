import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <div className="footer">
    <span className="name">
      RapidNews  made by -{" "}
      <a href="https://github.com/sidharth-rawat" target="__blank">
        Sidharth Rawat ♥
      </a>
    </span>
    <hr style={{ width: "90%" }} />
  </div>
  )
}

export default Footer