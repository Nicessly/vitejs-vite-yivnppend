import React, { useState } from 'react';
import './nav.css'; 
import logo from './logoz.png';
import perfil from './perfil.png';
import logo2 from './logoy.png';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import Tooltip from '@mui/material/Tooltip';
import { Dialog, DialogContent, DialogActions, Button } from '@mui/material';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import NightsStayIcon from '@mui/icons-material/NightsStay';

function Nav() {
  const [openLogoutDialog, setOpenLogoutDialog] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleOpenLogoutDialog = () => {
    setOpenLogoutDialog(true);
  };

  const handleCloseLogoutDialog = () => {
    setOpenLogoutDialog(false);
  };

  const handleLogout = () => {
    // Aquí puedes agregar la lógica para cerrar sesión
    setOpenLogoutDialog(false);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav className={`nav ${darkMode ? 'dark-theme' : 'light-theme'}`}>
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
        <span className="logo-text">ZYPHY</span>
      </div>
      <div className="right-section">
        <Tooltip title="Theme" placement="bottom">
          <button className='i' onClick={toggleDarkMode}>
            {darkMode ? <Brightness7Icon style={{ color: '#fff' }} /> : <NightsStayIcon style={{ color: '#000' }} />}
          </button>
        </Tooltip>
        <Tooltip title="Logout" placement="bottom">
          <button className='i' onClick={handleOpenLogoutDialog}>
            <LogoutOutlinedIcon style={{ color: darkMode ? '#fff' : '#000' }} />
          </button>
        </Tooltip>
      </div>

      {/* Diálogo para confirmar logout */}
      <Dialog open={openLogoutDialog} onClose={handleCloseLogoutDialog} classes={{ paper: 'custom-dialog-paper' }}>
        <DialogContent className="custom-dialog-title">Log Out?</DialogContent>
        <DialogContent className="custom-dialog-content">
          Are you sure you want to log out?
        </DialogContent>
        <DialogActions className="custom-dialog-actions">
          <Button onClick={handleCloseLogoutDialog} sx={{ backgroundColor: "#939393"}}>
            Cancel
          </Button>
          <Button onClick={handleLogout} sx={{ backgroundColor: "#fca94b" }}>
            Log Out
          </Button>
        </DialogActions>
      </Dialog>
    </nav>
  );
}

export default Nav;
