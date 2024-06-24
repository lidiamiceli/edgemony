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

      // Attendere il completamento di getMainHTML() per ottenere il markup HTML degli articoli
      const mainHTML = await getMainHTML();

      // Concatenare il markup HTML in un'unica stringa
      const html = header + sidebar + mainHTML + footer;

      // Inserire il markup HTML nella pagina
      appEl.innerHTML = html;
    } catch (error) {
      console.error('Error rendering page:', error);
      appEl.innerHTML = '<p>Error rendering page.</p>';
    }
  }
});
