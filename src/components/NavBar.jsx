import { Link } from 'react-router-dom';
import '../styles.css';
import CartWidget from './CartWidget';

const NavBar = ({ logo }) => {
    return (
        <header className="header-special">
            <div>
                <Link to="/">
                    <div className="header-logo">
                        <img src={logo} alt="logo" height="90px" />
                    </div>
                </Link>
                <span className="title-brand">NBA Rebound</span>
            </div>

            <nav className="nav-special">
                <ul className="nav-ul">
                    <Link to='/'>INCIO</Link>
                    <Link to='/category/zapatillas'>ZAPATILLAS</Link>
                    <Link to='/category/camisetas'>CAMISETAS</Link>
                </ul>
            </nav>
            <CartWidget />
        </header>
    )
}

export default NavBar;