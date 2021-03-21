console.log("JavaScript - AJAX");

const articleListHtml = document.querySelector(".article-list");

document.getElementById("get-data").addEventListener("click", function () {
  fetch("https://simple-json-server-scit.herokuapp.com/posts")
    .then(handleFetchResponse)
    .then(useJSONResponse);
});

function handleFetchResponse(response) {
  console.log("handleFetchResponse response is", response);
  return response.json();
}

function useJSONResponse(json) {
  console.log("useJSONResponse is:", json);
  renderArticles(json);
}

function renderArticles(articleList) {
  articleListHtml.innerText = "";
  for (const articleData of articleList) {
    console.log("article list is:", articleList);
    console.log("articleData is:", articleData);
    renderArticle(articleData);
  }
}

function renderArticle(articleData) {
  const article = document.createElement("div");
  const articleTitle = document.createElement("h3");
  const articleContent = document.createElement("p");

  articleListHtml.appendChild(article);

  article.appendChild(articleTitle);
  article.appendChild(articleContent);

  articleTitle.innerText = articleData.title;
  articleContent.innerText = articleData.content;

  postId = articleData.id;
  console.log("post ID is:", postId);
  const url = "https://simple-json-server-scit.herokuapp.com/comments?postId=" + postId;
  fetch(url)
      .then(handleFetchResponseComments)
      .then(useJSONResponseComments);
      console.log("url data is",url);

  function handleFetchResponseComments(response) {
      console.log("handleFetchResponseComments is:", response);
      return response.json();
  }        

  function useJSONResponseComments(json) {
      console.log("useJSONResponseComments is:", json);
      renderComments(json);
  }    

  function renderComments(commentsList) {
      for (const commentsData of commentsList) {
          console.log("comment data is:", commentsData);
          console.log("comment list is:", commentsList);
          renderComment(commentsData);
      }
  }
  const commentsList = document.createElement("div");   

  function  renderComment(commentsData) {
   
  const comments = document.createElement("div");
  const commentUser = document.createElement("h4");
  const commentContent = document.createElement("p");

  comments.appendChild(commentUser);
  comments.appendChild(commentContent);
  commentsList.appendChild(comments);
  article.appendChild(commentsList);
  commentsList.className = "comments-list";
  comments.className = "comment";
  comments.style.paddingLeft = "20px";
  commentUser.className = "comment-user";
  commentContent.className = "comment-content";

  commentUser.innerText = commentsData.username;
  commentContent.innerText = commentsData.content;
  } 
}
