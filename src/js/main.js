var headerBackground = document.querySelector(".l-header-background");
var headerTitle = document.querySelector(".header-title");
var firstArticleChange = document.querySelector(".article-one");
var secondArticleChange = document.querySelector(".article-two");
var thirdArticleChange = document.querySelector(".article-three");

function changeColorHeader() {
  headerBackground.classList.toggle("is-active");
  headerTitle.classList.toggle("is-active");
  headerBackground.style.transition = ".5s";
  headerTitle.style.transition = ".5s";
}
headerBackground.addEventListener("click", changeColorHeader);

function changeAppearanceFirstArticle() {
  firstArticleChange.classList.toggle("become-pink");
  firstArticleChange.style.transition = ".5s";
}
firstArticleChange.addEventListener("click", changeAppearanceFirstArticle);

function changeTexteSecondArticle() {
  secondArticleChange.classList.toggle("add-text");
}
secondArticleChange.addEventListener("click", changeTexteSecondArticle);

function changeColorThirdArticle() {
  thirdArticleChange.classList.toggle("become-blue");
  thirdArticleChange.style.transition = ".5s";
}
thirdArticleChange.addEventListener("click", changeColorThirdArticle);
