import React from "react";
import s from './Profile.module.css';
import MyPosts from "./Post";
const Profile = () => {
    return(
        <div className={s.content}>
        <div>
        <img src='https://imgs.search.brave.com/PdkI_aJ5jNea1AiIas6uy7LMm_H-szZFY9fbTVjNaS4/rs:fit:1200:1080:1/g:ce/aHR0cHM6Ly9tYXJr/ZXRpbmdhY2Nlc3Nw/YXNzLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAxNS8xMC9Q/b2RjYXN0LVdlYnNp/dGUtRGVzaWduLUJh/Y2tncm91bmQtSW1h/Z2UuanBn'></img>
        </div>
        <div>
          ava + description
        </div>
        <MyPosts/>
      </div>
    )

}
export default Profile;