// ルーティング機能を提供するモジュール
const Router = {
  routes: {},
  currentPath: "/",

  // ルーターを初期化
  init() {
    // ブラウザの戻る/進むボタンに対応
    window.addEventListener("popstate", () => {
      this.handleRoute();
    });

    // すべてのリンククリックをインターセプト
    document.addEventListener("click", (e) => {
      const link = e.target.closest("a");
      if (link && link.href && link.href.startsWith(window.location.origin)) {
        e.preventDefault();
        const path = new URL(link.href).pathname;
        this.navigate(path);
      }
    });

    // 初期ページをレンダリング
    this.handleRoute();
  },

  // 指定されたパスに遷移
  navigate(path) {
    window.history.pushState({}, "", path);
    this.currentPath = path;
    this.handleRoute();
  },

  // 現在のURLパスに基づいてページをレンダリング
  handleRoute() {
    const path = window.location.pathname;
    this.currentPath = path;

    // ルートパス
    if (path === "/" || path === "/index.html") {
      this.renderLandingPage();
      return;
    }

    // ブログ記事パス
    const blogMatch = path.match(/^\/blog\/(.+)$/);
    if (blogMatch) {
      const postId = blogMatch[1];
      this.renderBlogPost(postId);
      return;
    }

    // 存在しないパスの場合はランディングページにリダイレクト
    console.warn(`Path not found: ${path}. Redirecting to home.`);
    this.navigate("/");
  },

  // ランディングページをレンダリング
  renderLandingPage() {
    const content = Pages.getLandingPage();
    this.render(content);
  },

  // ブログ記事ページをレンダリング
  renderBlogPost(postId) {
    const post = Pages.getPost(postId);
    if (!post) {
      console.warn(`Blog post not found: ${postId}. Redirecting to home.`);
      this.navigate("/");
      return;
    }
    const content = Pages.getBlogPostPage(post);
    this.render(content);
  },

  // ページコンテンツをDOMに挿入
  render(content) {
    const app = document.getElementById("app");
    if (app) {
      app.innerHTML = content;
      window.scrollTo(0, 0);
    }
  },
};
