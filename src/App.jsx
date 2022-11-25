import React from 'react';
import NavBar from './components/NavBar';
import Logo from './assets/nba-heat-logo.png';
import CartLogo from './assets/bag.svg';
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    <div>
      <NavBar
      logo={Logo}
      carrito={CartLogo}/>
  
      <ItemListContainer
      greeting={"BIENVENIDOS A NBA REBOUND STORE"}/>

    </div>
    );
}

export default App;
