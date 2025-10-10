function Menu() {
  return (
    <div className="navbar bg-indigo-200 shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Főoldal</a>
          </li>
          <li>
            <details>
              <summary>Autók</summary>
              <ul className="bg-indigo-200 rounded-t-none p-2">
                <li>
                  <a>Eladó autóink</a>
                </li>
                <li>
                  <a>Új autó felvitele</a>
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
