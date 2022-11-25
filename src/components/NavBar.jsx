import '../styles.css';

const NavBar = ({logo, carrito}) => {
    return(
<header className="header-special">
    <div>
        <a href="#">
            <div className="header-logo">
                <img src={logo} alt="logo" height="90px"/>
            </div>
        </a>
        <span className="title-brand">NBA Rebound</span>
    </div>

      <nav className="nav-special">
          <ul className="nav-ul">
              <a href="#">INICIO</a>
              <a href="#">SOBRE NOSOTROS</a>
              <a href="#">CENTRO DE AYUDA</a>
              <a href="#">PRODUCTOS</a>
          </ul>
      </nav>
      <ul className="nav__list">
        <div className="carrito__icon">
        <img src={carrito} alt="Logo-Carrito"/>1
        </div>
      </ul>
  </header>
    )
}

export default NavBar;