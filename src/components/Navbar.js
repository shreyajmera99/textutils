import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      
      <span className="navbar-toggler-icon"></span>
    </button>
  
    
    <div className={`form-check form-switch text-${props.mode=='light'?'black':'white'} `}>
  <input className="form-check-input" type="checkbox" role="switch" onClick = {props.togglemode}id="flexSwitchCheckDefault"/>
  <label className="form-check-label" for="flexSwitchCheckDefault">Enable Darkmode</label>
</div>
  </nav>
   
  )
    
  }

Navbar.propTypes = {
    title : PropTypes.string.isRequired
}

// Navbar.defaultProps ={
//     title:"Set title here"
// }
