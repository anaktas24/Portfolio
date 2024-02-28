import '../assets/nav.css'

function NavBar(){
  return(
    <div className='navbar-container'>
      <header>
        <nav className='navbar'>
          <ul className='nav-menu'>
            <li className='nav-item'>
              <a href="#" className='nav-link'>Home</a>
            </li>
            <li>
              <a href="#" className='nav-link'>Projects</a>
            </li>
            <li>
              <a href="#" className='nav-link'>Contact</a>
            </li>
            <li>
              <a href="#" className='nav-link'>Other</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default NavBar
