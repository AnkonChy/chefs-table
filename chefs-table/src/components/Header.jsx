const Header = () => {
  return (
    <div>
      <nav className="py-5">
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="flex items-center gap-3">
              <div>
                <img src="./images/logo.webp" alt="" />
              </div>
              <div>
                <h2 className="text-3xl font-bold">Recipe Calories</h2>
              </div>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="text-base menu menu-horizontal px-1 font-medium text-lg">
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Recipes</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Search</a>
              </li>
            </ul>
          </div>
          <div className="navbar-end gap-1">
            <label className="rounded-3xl input input-bordered flex items-center gap-2">
              <input type="text" className="grow" placeholder="Search" />
              <i className="fa-solid fa-magnifying-glass"></i>
            </label>
            <i className="text-3xl fa-regular fa-circle-user"></i>
            <div className="dropdown">
              <div
                tabindex="0"
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <i className="font-3xl fa-solid fa-bars"></i>
              </div>
              <ul
                tabindex="0"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow right-0 gap-5 font-medium"
              >
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>Recipes</a>
                </li>
                <li>
                  <a>About</a>
                </li>
                <li>
                  <a>Search</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
