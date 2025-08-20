import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/people') {
      return location.pathname.startsWith('/people')
        ? 'has-background-grey-lighter'
        : '';
    }

    return location.pathname === path ? 'has-background-grey-lighter' : '';
  };

  return (
    <nav className="navbar is-light" data-cy="nav">
      <div className="container">
        <div className="navbar-brand">
          <Link className={`navbar-item ${isActive('/')}`} to="/">
            Home
          </Link>
        </div>
        <div className="navbar-menu">
          <div className="navbar-start">
            <Link className={`navbar-item ${isActive('/people')}`} to="/people">
              People
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
