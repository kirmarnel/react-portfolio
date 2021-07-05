import React from 'react';
import 'bulma/css/bulma.min.css';

export function Navbar() {
return (
<div className="navbar-menu">
  <div className="navbar-start">
   <h1 className="is-size-2">Kirsten Nelson</h1>
  </div>

  <div className="navbar-end">
  <a className="navbar-item">
  Home
</a>
<a className="navbar-item">
  About Me
</a>
<a className="navbar-item">
  Projects
</a>
  </div>
</div>

)};
