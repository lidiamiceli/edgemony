import posts from "../assets/posts.json";

function Sidebar() {
  const menuItems = [
    { label: "Politics", href: "#" },
    { label: "Science", href: "#"},
    { label: "News", href: "#" },
    { label: "Economy", href: "#"},
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-content">
        <ul className="space-y-1">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className={`sidebar-item ${item.count ? "general" : ""}`}
              >
                <span className="sidebar-text">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

function PostItem({ title, content, userId }) {
  return (
    <div className="post-item">
      <div className="background-article">
        <h2>{title}</h2>
        <p>{content}</p>
        <h3>User ID: {userId}</h3>
      </div>
    </div>
  );
}

function Main() {
  return (
    <main>
      <Sidebar />
      <section id="post-list" className="post-list">
        {posts.map((post) => (
          <PostItem
            key={post.id}
            title={post.title}
            content={post.body}
            userId={post.userId}
          />
        ))}
      </section>
    </main>
  );
}

export { Main };