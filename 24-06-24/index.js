import { getHeaderHTML } from "./header.js";
import { getMainHTML } from './main.js';
import { getFooterHTML } from "./footer.js";
import { getSidebarHTML } from "./sidebar.js";

window.addEventListener("DOMContentLoaded", async () => {
  const appEl = document.querySelector("#app");

  if (appEl) {
    try {
      const header = getHeaderHTML();
      const sidebar = getSidebarHTML();
      const footer = getFooterHTML();

      
      const mainHTML = await getMainHTML();

      
      const html = header + sidebar + mainHTML + footer;

      
      appEl.innerHTML = html;
    } catch (error) {
      console.error('Error rendering page:', error);
      appEl.innerHTML = '<p>Error rendering page.</p>';
    }
  }
});
