import React from 'react';
import './nav.css'; 
import logo from './logoz.png'
import perfil from './perfil.png'
import logo2 from './logoy.png'

function Nav() {
  return (
    <nav className="nav">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
        <span className="logo-text">ZYPHY</span>
      </div>
      <div className="right-section">
      <i class="uil uil-setting"></i>
        <img src={perfil} alt="Foto de Perfil" className="profile-picture" />
      </div>
    </nav>
  );
}

export default Nav;
