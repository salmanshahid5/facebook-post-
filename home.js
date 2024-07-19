// Check if a user is logged in
const currentUser = JSON.parse(localStorage.getItem("currentUser"));

if (!currentUser) {
  window.location.href = "./login.html";
}

document.getElementById('logoutbtn')
  .addEventListener('click',function(){
    localStorage.removeItem('currentUser');
    alert('LogOut Sucessfully!');

    setInterval(() => {
      window.location.href = 'login.html'
    }, 1000);
  })

// Function to display posts
function displayPosts() {
  const postsSection = document.getElementById("posts");
  postsSection.innerHTML = "";

  if (currentUser && currentUser.posts) {
    currentUser.posts.forEach((post) => {
      const postElement = document.createElement("div");
      postElement.classList.add("post");
      postElement.innerHTML = `
                 <div class="postimage">
            <img src="" alt="">
            <div class="welcome">
                <h2 id="userNameDisplay">${post.author}</h2>
                <p>${post.createdAt}</p>
            </div>
        </div>
        <div class="userhead">
            <h3>${post.content}</h3>
            <img src="" alt="">
        </div>
        <div class="insight">
            <h4>See Insight</h4>
            <button>Boast Post</button>
        </div>
    </div>
    <div class="facebook-icons">
        <div class="image-icon">
            <span>15</span>
        </div>
        <div class="share">
            <p>5 share</p>
        </div>
    </div>
    <div class="like">
        <div class="love-icon">
            <i class="fa-regular fa-heart"></i><span>like</span>
        </div>
        <div class="comment">
            <i class="fa-regular fa-comment"></i> <span>comment</span>
        </div>
        <div class="share">
            <i class="fa-regular fa-share-from-square"></i><span>share</span>
        </div>
            `;
      postsSection.appendChild(postElement);
    });
  }
}

// Function to handle post creation
document.getElementById("postBtn")?.addEventListener("click", function () {
  const content = document.getElementById("postContent").value.trim();

  if (!content) {
    alert("Please enter some content for your post.");
    return;
  }

  setTimeout(() => {
    const post = {
      author: currentUser.username,
      content: content,
      createdAt: new Date().toLocaleString(),
    };

    currentUser.posts.unshift(post);
    localStorage.setItem("currentUser", JSON.stringify(currentUser));

    document.getElementById("postContent").value = "";
    displayPosts();
  }, 1000);
});

// Function to handle post editing
// function editPost(index) {
//   const newContent = prompt(
//     "Edit your post:",
//     currentUser.posts[index].content
//   );
//   if (newContent !== null) {
//     currentUser.posts[index].content = newContent;
//     localStorage.setItem("currentUser", JSON.stringify(currentUser));
//     displayPosts();
//   }
// }

// Function to handle post deletion
// function deletePost(index) {
//   if (confirm("Are you sure you want to delete this post?")) {
//     currentUser.posts.splice(index, 1);
//     localStorage.setItem("currentUser", JSON.stringify(currentUser));
//     displayPosts();
//   }
// }

// On home page load, display posts and username
if (document.getElementById("homePage")) {
  document.getElementById("homePage").classList.remove("hidden");
  document.getElementById("usernameDisplay").textContent = currentUser.username;
  displayPosts();
}
