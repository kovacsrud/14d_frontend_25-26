import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="navbar bg-lime-200 shadow-sm">
      <div className="flex-1">
        <Link to='/' className="btn btn-ghost text-xl">Rendelő</Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Link</a>
          </li>
          <li>
            <details>
              <summary>Kutyanevek</summary>
              <ul className="bg-lime-100 rounded-t-none p-2">
                <li>
                  <a>Új kutyanév rögzítése</a>
                </li>
                <li>
                  <Link to='/kutyanevek'>Kutyanevek listája</Link>
                </li>
              </ul>
            </details>
          </li>
           <li>
            <details>
              <summary>Kutyafajták</summary>
              <ul className="bg-lime-100 rounded-t-none p-2">
                <li>
                  <a>Új kutyafajta rögzítése</a>
                </li>
                <li>
                  <Link to='/kutyafajtak'>Kutyafajták listája</Link>
                </li>
              </ul>
            </details>
          </li>
           <li>
            <details>
              <summary>Rendelési adatok</summary>
              <ul className="bg-lime-100 rounded-t-none p-2">
                <li>
                  <a>Új rendelési adat rögzítése</a>
                </li>
                <li>
                  <Link to='/kutyak'>Rendelési adatok listája</Link>
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
