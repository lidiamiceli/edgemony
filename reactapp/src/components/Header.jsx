function Header(){
    return (
    <header>
        <div className="container">
             <div className="wrapper">
                <Menu />
             </div>
        </div>
    </header>
    );
}

function Menu(){
   
    return (
        <nav className="nav">
                <ul className="list">
                  <MenuItem />
                  <MenuItem />
                </ul>
                </nav>
    );
}

function MenuItem(){
    return(
        <li className="item">
        <a href="">Home</a>
        </li>
    );

}

export {Header, Menu, MenuItem};