import {Link} from 'react-router-dom';

function Menu() {
  return (
    <div className="navbar bg-sky-200 text-sky-800 shadow-sm">
      <div className="flex-1">
        <Link to='/' className="btn btn-ghost text-xl">Főoldal</Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to={'/users'}>Users</Link>
          </li>
          <li>
            <Link to={'/posts'}>Posts</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
