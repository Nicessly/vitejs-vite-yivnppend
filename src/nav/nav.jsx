
import React, { useState } from 'react';
import './nav.css'; 
import logo from './logoz.png';
import perfil from './perfil.png';
import logo2 from './logoy.png';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import Tooltip from '@mui/material/Tooltip';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';

function Nav() {
  const [openLogoutDialog, setOpenLogoutDialog] = useState(false);

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
          <button className='i' onClick={handleOpenLogoutDialog}>
            <LogoutIcon />
          </button>
        </Tooltip>
      </div>

      {/* Diálogo para confirmar logout */}
      <Dialog open={openLogoutDialog} onClose={handleCloseLogoutDialog}>

        <DialogContent>
          ¿Estás seguro de que quieres cerrar sesión?
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseLogoutDialog} color="primary">
            No
          </Button>
          <Button onClick={handleLogout} color="secondary">
            Sí
          </Button>
        </DialogActions>
      </Dialog>
    </nav>
  );
}

export default Nav;
