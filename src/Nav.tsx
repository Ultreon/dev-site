import './Nav.css';
import BrandIcon from './data/img/ultreon-circle.png'

function NavMenu() {
  return <div className="NavMenuWrap">
    <nav role="navigation" className="NavMenu w-nav">
      <a href="/" className="NavLink">
        Home
      </a>
      <a href="/project?id=ultracraft" className="NavLink" rel="noreferrer">
        Ultracraft
      </a>
    </nav>
    <div className="menu-button NavButton">
      <div className="menu-icon w-icon-nav-menu">

      </div>
    </div>
  </div>;
}

function Brand() {
  return <a href="/" className="Brand">
    <div className="BrandBlock">
      <img src={BrandIcon} alt="Brand Icon" loading="eager" height="48" width="48" style={{ marginRight: '20px', borderRadius: '25%' }} className="BrandIcon" />
      <div className="BrandText">
        Ultreon
      </div>
    </div>
  </a>;
}

export function NavBar() {
  return (
    <div className="NavMain">
      <div data-collapse="small" data-animation="default" data-duration="400" data-doc-height="1" role="banner" className="Nav">
        <div className="NavInner">
          <Brand />
          <NavMenu />
        </div>
      </div>
    </div>
  );
}
