import React from 'react';
import './share.css';
import perfil from './perfil.png';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AddPhotoAlternateRoundedIcon from '@mui/icons-material/AddPhotoAlternateRounded';



function Share() {
  return (
    <div>
      <form className="create-post">
        <div className="profile-pic">
          <img src={perfil} alt="Profile" className="per" />
        </div>
        <input type="text" className='in' placeholder='what do you think?'/>
      <AddPhotoAlternateRoundedIcon className='ba' sx={{ 
        color: "#fff",
        backgroundColor: "rgb(24, 23, 23)",
        cursor: "pointer",
        margin: "10px" }}/>

      <button className='bo'>Post</button>
      </form>
    </div>
  );
}

export default Share;
