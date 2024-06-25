function Footer(){
return (
<footer>
<div class="container">
              <div class="wrapper">
                  <Menu />
              </div>
          </div>
</footer>
);
}

function Menu() {
    return(
    <nav className="nav">
    <ul className="list">
      <MenuItem />
      <MenuItem />
    </ul>
    </nav>
);
}

function MenuItem() {
    return(
        <li className="item">
        <a href="">Home</a>
    </li>
    );
}

export {Footer, Menu, MenuItem}