import React from 'react';
import s from './Navbar.module.css';
console.log(s)
let c1 = 'item';
let c2 = 'active';
// item active
let c = c1 + ' ' + c2;
let cnew = `${s.item} ${s.c2}`
const Navbar = () => {
    return(
<nav className={s.nav}>
        <div className={`${s.item} ${s.active}`}>
          <a href='#'>Profile</a>
        </div>
        <div className={s.item}>
          <a href='#'>Messages</a>
        </div>
        <div className={s.item}>
          <a href='#'>News</a>
        </div>
        <div className={s.item}>
          <a href='#'>Music</a>
        </div>
        <div className={s.item}>
          <a href='#'>Settings</a>
        </div>
      </nav>
    )
}
export default Navbar;