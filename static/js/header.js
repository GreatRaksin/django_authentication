let yslygi = document.querySelector(".yslygi");
let header = document.querySelector("header");
let vidviznoeMenu = 0;

document.addEventListener("click", (event) => {
  if (vidviznoeMenu && !yslygi.contains(event.target)) {
    vidviznoeMenu.remove();
    vidviznoeMenu = 0;
  }
});

yslygi.addEventListener("click", (event) => {
  event.preventDefault();
  if (vidviznoeMenu == 0) {
    // Если меню еще не создано, создаем его
    header.insertAdjacentHTML(
      "afterEnd",
      `<div class='vidviznoe_menu'>
        <div class="vidviznoe_menu_dop_div">
          <div class="tg_menu">
            <img src="/vidviznoe_menu_img/Shape (2).png" alt="" width="220%">
            <ul>
              <a href=""><li>ПОДПИСЧИКИ</li></a>
              <a href=""><li>ПРОСМОТРЫ</li></a>
              <a href=""><li>РЕАКЦИИ</li></a>
              <a href=""><li>ГОЛОСОВАНИЕ</li></a>
              <a href=""><li>СТАРТ БОТА</li></a>
              
              <a href=""><li>РЕПОСТЫ</li></a>
              <a href=""><li>КОММЕНТАРИИ</li></a>
              <a href=""><li>ИСТОРИИ</li></a>
              <a href=""><li>БУСТЫ</li></a>
            </ul>
          </div>
        </div>
        <img src="/vidviznoe_menu_img/Vector (1).png" alt="" width="2%">
        <img src="/vidviznoe_menu_img/Shape (3).png" alt="" width="2%">
        <img src="/vidviznoe_menu_img/Youtube (2).png" alt="" width="2%">
        <img src="/vidviznoe_menu_img/Facebook (2).png" alt="" width="2%">
        <img src="/vidviznoe_menu_img/Twitter (2).png" alt="" width="2%">
      </div>`
    );

    // Сохраняем ссылку на созданное меню
    vidviznoeMenu = document.querySelector(".vidviznoe_menu");
  } else {
    // Если меню уже создано, удаляем его
    vidviznoeMenu.remove();
    vidviznoeMenu = 0; // Обнуляем ссылку
  }
});

function hidePolz(event) {
  if (!event.target.matches("#login") && !event.target.matches(".polz_login")
  && !event.target.matches(".polz_ak") && !event.target.matches(".back_redact")) {
    event.target.closest(".polz_login").classList.add('hidden');
    log_in = null;
  }
}
let login = document.querySelector("#login");
let log_in = null;
let polz = document.querySelector(".polz_login");
polz.classList.add("hidden");

document.addEventListener("click", hidePolz)


login.addEventListener("click", (event) => {
  event.preventDefault();
  if (!log_in) {
    polz.classList.remove("hidden");
    log_in = document.querySelector(".polz_login");
  } else {
    polz.classList.add("hidden");
    log_in = null;
  }
});

let button_ak = document.querySelector(".ob_ak_button");
let polz_ak = document.querySelector(".ob_ak");
let back = document.querySelector(".back");
polz_ak.classList.add("hidden");
let akkaynt = null;

button_ak.addEventListener("click", (event) => {
  event.preventDefault();
  if (!akkaynt) {
    polz.classList.add("hidden");
    polz_ak.classList.remove("hidden");
    akkaynt = 1;
  }
});

back.addEventListener("click", (event) => {
  event.preventDefault();
  if (akkaynt) {
    polz.classList.remove("hidden");
    polz_ak.classList.add("hidden");
    akkaynt = null;
  }
});

document.addEventListener("click", (event) => {
  if (
    !polz.contains(event.target) &&
    !polz_ak.contains(event.target) &&
    !button_ak.contains(event.target)
  ) {
    polz_ak.classList.add("hidden");
    akkaynt = null;
  }
});

let redakt_polz = document.querySelector(".redakt_polz");
redakt_polz.classList.add("hidden");
let redaktrr = document.querySelector(".redakrrrt");
let back_redakt = document.querySelector(".back_redakt");
let red = null;

redaktrr.addEventListener("click", (event) => {
  event.preventDefault();
  if (!red) {
    polz.classList.add("hidden");
    redakt_polz.classList.remove("hidden");
    red = 1;
  }
});

back_redakt.addEventListener("click", (event) => {
  event.preventDefault();
  if (red) {
    polz.classList.remove("hidden");
    redakt_polz.classList.add("hidden");
    red = null;
  }
});

document.addEventListener("click", (event) => {
  if (
    !polz.contains(event.target) &&
    !redakt_polz.contains(event.target) &&
    !back_redakt.contains(event.target)
  ) {
    redakt_polz.classList.add("hidden");
    red = null;
  }
});

let main_reviews = document.querySelector(".main_reviews");
let reviews = document.querySelector(".reviews");
main_reviews.classList.add("hidden");
rev = null;

function reviewsclick(event) {
  event.preventDefault();
  if (!rev) {
    main_reviews.classList.remove("hidden");
    rev = 1;
  } else {
    main_reviews.classList.add("hidden");
    rev = null;
  }
}

reviews.addEventListener("click", (event) => {
  reviewsclick(event);
});

const dialog = document.querySelector("dialog");
const showButton = document.querySelector(".sssss");
const closeButton = document.querySelector("#button_close");

// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
  dialog.showModal();
});

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
  dialog.close();
});
