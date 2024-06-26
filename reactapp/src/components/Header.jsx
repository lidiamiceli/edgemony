function Header() {

    return (
      <header>
        <div className="container">
          <div className="wrapper">
            <div className="logo">Logo</div>
            <Menu />
          </div>
        </div>
      </header>
    );
  }
  
  function Menu() {
    const items = [
        { label: "about us"},
        { label: "blog" , href: "https://google.it"},
        { label: "contact us" , href: "https://google.it"},
    ];
    return (
        <nav className="nav">
      <ul className="list">
        {items.map((item, index, array) => (
          <MenuItem
            key={`${item.label}-${index}`}
            label={item.label}
            href={item.href}
          />
        ))}
      </ul>
    </nav>
    )
}

  function MenuItem(props) {
    const { label, href = "#" } = props;
    return (
      <li className="item">
        <a href="#">{label}</a>
      </li>
    );
  }
  
  export { Header };