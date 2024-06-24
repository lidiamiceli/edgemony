function getFooterHTML() {
    const menuHTML = getMenuHTML();
    
    return `<footer class="footer">
          <div class="container">
              <div class="wrapper">
                  <div class="logo">Logo</div>
                  <nav class="nav">
                      ${menuHTML}
                  </nav>
              </div>
          </div>
      </footer>`;
  }
  
  function getMenuHTML() {
    const menuItems = [
      {
        label: "About us",
        children: [
          { label: "Company info" },
          { label: "Careers" },
          { label: "Altre cose" },
        ],
      },
      {
        label: "Services",
        children: [
          { label: "Consulting" },
          { label: "Support" },
          { label: "Custom Solutions" },
        ],
      },
      {
        label: "Contact",
        children: [
          { label: "Email Us" },
          { label: "Find a Store" },
          { label: "Customer Support" },
        ],
      }
    ];
  
    return `
      <ul class="menu">
          ${menuItems.map((item) => getMenuItemHTML(item)).join("")}
      </ul>
      `;
  }
  
  function getMenuItemHTML(options) {
    const { label, href = "#", children = [] } = options;
  
    const subitemsHTML = children
      .map((item) => `<li class="item subitem">${item.label}</li>`)
      .join("");
    const subMenuHTML = "<ul class='submenu'>" + subitemsHTML + "</ul>";
  
    return `<li class="item">
      <a href="${href}">${label}</a>
      ${children.length > 0 ? subMenuHTML : ""}
    </li>`;
  }
  
  function getSidebarHTML() {
    return `
      <aside class="sidebar">
          <ul class="sidebar-list">
              <li>Sidebar</li>
              <li>Sidebar 2</li>
              <li>Sidebar 3</li>
          </ul>
      </aside>
    `;
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');
    const footerHTML = getFooterHTML();
    const sidebarHTML = getSidebarHTML();
    
    app.innerHTML = `
      <div class="content-wrapper">
        ${sidebarHTML}
      </div>
      ${footerHTML}
    `;
  });
  
  export { getFooterHTML, getSidebarHTML };
  