const themeBtn = document.querySelector("#themeBtn");
const likeBtn = document.querySelector("#likeBtn");
const likesText = document.querySelector("#likes");
const helloBtn = document.querySelector("#helloBtn");
const nameInput = document.querySelector("#nameInput");
const greeting = document.querySelector("#greeting");
 
// 1. Перемикання теми
themeBtn.addEventListener("click", function() {
  document.body.classList.toggle("dark");
});
 
// 2. Лічильник лайків
let likes = 0;
likeBtn.addEventListener("click", function() {
  likes = likes + 1;
  likesText.textContent = likes;
});
 
// 3. Привітання користувача
helloBtn.addEventListener("click", function() {
  const name = nameInput.value.trim();
  if (name !== "") {
    greeting.textContent = "Привіт, " + name + "!";
  } else {
    alert("Будь ласка, введіть ім’я!");
  }
});
