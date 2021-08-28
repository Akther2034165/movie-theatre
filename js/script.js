fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json())
  .then((data) => setPosts(data));

const setPosts = (posts) => {
  const postContainer = document.getElementById("post-container");
  for (const post of posts) {
    const postDiv = document.createElement("div");
    postDiv.innerHTML = `
    <div class="post p-5 bg-light border border-primary border-2 rounded-3 m-5">
     <h3>Post No : ${post.id}</h3>
      <h4>Title : ${post.title}</h4>
      <p>Body : ${post.body}</p></p>
    </div>
    `;
    postContainer.appendChild(postDiv);
  }
};
