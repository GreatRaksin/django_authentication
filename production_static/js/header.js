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
              <a href=""><li>TG ПРОСМОТРЫ</li></a>
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

let login = document.querySelector("#login");
let log_in = null;
let polz = document.querySelector(".polz_login");

document.addEventListener("click", (event) => {
  if (log_in && !login.contains(event.target)) {
    polz.classList.remove("hidden");
    log_in = null;
  }
});

login.addEventListener("click", (event) => {
  event.preventDefault();
  if (!log_in) {
    polz.classList.add("hidden");
    log_in = document.querySelector(".polz");
  } else {
    polz.classList.remove("hidden");
    log_in = null;
  }
});