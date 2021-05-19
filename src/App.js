import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './Components/MenuComponent';

function App() {
  return (
    <div>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">SPICYO</NavbarBrand>
        </div>
      </Navbar>
      <Menu/>
    </div>  
  );
}

export default App;
