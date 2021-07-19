import React from 'react';
import { Link } from 'react-router-dom';
import 'bulma/css/bulma.min.css';

export function Navbar() {
return (
<div className="navbar-menu">
  <div className="navbar-start">
   <h1 className="is-size-2">Kirsten Nelson - Full Stack Web Developer</h1>
  </div>

  <div className="navbar-end">
  <Link to="/" className="navbar-item">
  Home
</Link>
<Link to="/aboutMe" className="navbar-item" href="#aboutMe">
  About Me
</Link>
<Link to="/projects" className="navbar-item">
  Projects
</Link>
<Link to="/contact" className="navbar-item">
  Contact
</Link>
  </div>
</div>

)};
