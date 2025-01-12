const btn = document.querySelector(".MenuBtn");
const nav = document.querySelector(".main-nav");
const linkBtns = document.querySelectorAll(".link-in-page"); // 修正: querySelectorAllでリンクを取得

btn.addEventListener("click", () => {
  nav.classList.toggle("open-menu");
  btn.classList.toggle("open-menu");
});

// メニュー内のリンクをクリックした際にメニューを閉じる
linkBtns.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open-menu");
    btn.classList.remove("open-menu");
  });
});
