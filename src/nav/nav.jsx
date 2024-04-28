import React from 'react';
import './nav.css'; 
import logo from './logoz.png'
import perfil from './perfil.png'
import logo2 from './logoy.png'
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import Tooltip from '@mui/material/Tooltip';

function Nav() {
  return (
    <nav className="nav">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
        <span className="logo-text">ZYPHY</span>
      </div>
      <div className="right-section">
      <Tooltip title="Settings" placement="bottom">
        <button className='i'>
          <SettingsIcon />
        </button>
      </Tooltip>
      <Tooltip title="Logout" placement="bottom">
        <button className='i'>
          <LogoutIcon />
        </button>
      </Tooltip>
      </div>
    </nav>
  );
}

export default Nav;
