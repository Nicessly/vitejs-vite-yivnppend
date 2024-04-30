import React from 'react';
import './comp.css';
import Avatar from '@mui/material/Avatar';
import perfil from './perfil.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons';

function PostBox() {
  return (
    <div className="post-container">
      <div className="profile-picture">
        <Avatar alt="Avatar" src={perfil} />
      </div>
      <div className="input-container">
  <input
    type="text"
    className="custom-textfield"
    placeholder="What do you think?."
  />
</div>
      <hr className="line" />
      <div class="add-image">
      <FontAwesomeIcon icon={faImage} />
    <span>Add Image</span>
</div>
<button class="post-button">Post</button>
    </div>
  );
}

export default PostBox;
