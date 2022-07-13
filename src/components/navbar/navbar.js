import "./navbar.css";

import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo"><Link to='/'>BookOcean</Link></div>
      <Link to='/add'><button>+</button></Link>
    </div>
  );
};

export default Navbar;
