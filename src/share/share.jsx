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
          <img src={perfil} alt="Profile" className="logo" />
        </div>
        <TextField
        placeholder="What's on your mind?"
        variant="standard"
        color="warning"
        focused
        sx={{ flex: 1, mr: 1 }}
      />
      <AddPhotoAlternateRoundedIcon className='ba' sx={{ 
        color: "#fca94b",
        cursor: "pointer",
        margin: "10px" }}/>

      <Button variant="contained" disableElevation className='bo'
      sx={{ 
        backgroundColor: "#fca94b",
        textTransform: "capitalize",
        borderRadius: '25px' }}>
      Post
    </Button>
      </form>
    </div>
  );
}

export default Share;
