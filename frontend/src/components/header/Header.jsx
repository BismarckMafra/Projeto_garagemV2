import './header.css'
import Nav from '../nav/Nav';

const Header = () => {
  return (
    <header class="cssHeader">
      <div>
        <div class="containerHeader">
          {/* Logo Area */}
          <div>
            <span class="logoHeader">
              HOT<span class="textHeader">WHEELS</span>
              <span class="textHeader">LAB</span>
            </span>
          </div>

          <Nav />

        </div>
       
      </div>
    </header>
  );
};

export default Header;