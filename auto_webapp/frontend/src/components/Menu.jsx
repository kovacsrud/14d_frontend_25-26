import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="navbar bg-indigo-200 shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Főoldal</Link>
          </li>
          <li>
            <details>
              <summary>Autók</summary>
              <ul className="bg-indigo-200 rounded-t-none p-2">
                <li>
                  <Link to="/autok">Eladó autóink</Link>
                </li>
                <li>
                  <Link to="/ujauto">Új autó felvitele</Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
