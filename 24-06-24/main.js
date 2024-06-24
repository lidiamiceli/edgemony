async function getMainHTML() {
    try {
      const postsResponse = await fetch('https://jsonplaceholder.typicode.com/posts');
      const posts = await postsResponse.json();
      const usersResponse = await fetch('https://jsonplaceholder.typicode.com/users');
      const users = await usersResponse.json();
  
      const userMap = users.reduce((map, user) => {
        map[user.id] = user.name;
        return map;
      }, {});
  
      const articlesHTML = posts.map(post => {
        return `
          <article class="article">
            <h2>${post.title}</h2>
            <p>${post.body}</p>
            <p><strong>Author:</strong> ${userMap[post.userId]}</p>
          </article>
        `;
      }).join("");
  
      return `
        <main class="main">
            <div class="articles">
                ${articlesHTML}
            </div>
        </main>
      `;
    } catch (error) {
      console.error('Error fetching data:', error);
      return `<main class="main"><p>Error loading articles.</p></main>`;
    }
  }
  
  export { getMainHTML };
  