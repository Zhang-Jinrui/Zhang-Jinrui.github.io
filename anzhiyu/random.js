var posts=["2024/12/21/hello-world/","2024/12/01/这是第一篇文章/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };