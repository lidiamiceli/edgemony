function getHeaderHTML() {
    const menuHTML = getMenuHTML();
  
    return `
      <header>
          <div class="container">
              <div class="wrapper">
                  <div class="logo">Logo</div>
                  ${menuHTML}
              </div>
          </div>
      </header>
      `;
  }
  
  
  function getMenuHTML() {
    const menuItems = [
      { label: "Home" },
      { label: "Blog", href: "https://google.it" },
      { label: "Contacts" },
      { label: "About Me", href: "https://www.linkedin.com/in/lidia-miceli-a586521bb/"},
    ];
  
  
    return `
      <nav class="nav">
          <ul class="list">
              ${menuItems.map((item) => getMenuItemHTML(item)).join("")}
          </ul>
      </nav>
      `;
  }
  
  function getMenuItemHTML(options = {}) {
    const { label, href = "#" } = options;
  
    return `
      <li class="item">
          <a href="${href}">${label}</a>
      </li>
      `;
  }
  
  export { getHeaderHTML };