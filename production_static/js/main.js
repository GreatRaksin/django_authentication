function showSelectedSocialNetwork() {
  const selectedLabel = "Telegram"; // Здесь можно вставить логику получения выбранной соцсети

  const div = document.querySelector(".services");
  const spin = document.querySelector(".spin_option");
  const Type_of_tipping = document.querySelector(".Type_of_tipping");
  const inputElements = document.querySelector(".input_int");
  const p_prays = document.querySelector(".prays_p");

  if (selectedLabel === "Telegram") {
    div.innerHTML = '<p class="services_tetx">Тип услуг</p>';
    div.insertAdjacentHTML(
      "beforeend",
      ` <div class="buttons">
        <button  class="bts  focus_button ">Подписчики</button>
        <button class="bts ">Просмотры</button>
        <button class="bts">Реакции</button>
      </div>`
    );

    const buttons = div.querySelectorAll(".bts");
    buttons.forEach(function (button) {
      button.addEventListener("focus", function () {
        buttons.forEach(function (button) {
          button.classList.remove("focus_button");
        });
        button.classList.add("focus_button");
      });
    });

    spin.innerHTML = ' <p class="services_text">Варианты накрутки</p>';
    spin.insertAdjacentHTML(
      "beforeend",
      `<div class="options">
      <button class="bts-second-group  focus_button" >Стандарт <img src="/img_kalkylytor/Group 22 (1).png" alt="">  <p>2₽</p> </button>
      <button class="bts-second-group">Базовые <img src="/img_kalkylytor/Group 22 (1).png" alt=""> <p>3₽</p></button>
      <button class="bts-second-group">Премикм <img src="/img_kalkylytor/Group 22 (1).png" alt=""> <p>3₽</p></button>
      <button class="bts-second-group">США  <img src="/img_kalkylytor/Group 22 (2).png" alt=""><p>4₽</p></button>
      <button class="bts-second-group">Микс  <img src="/img_kalkylytor/Group 22 (3).png" alt=""><p>5₽</p></button>
      <button class="bts-second-group">СНГ  <img src="/img_kalkylytor/Group 22 (3).png" alt=""> <p>6₽</p></button>
        
      </div>`
    );

    const secondButtons = spin.querySelectorAll(".bts-second-group");
    secondButtons.forEach(function (secondButton) {
      secondButton.addEventListener("click", function () {
        secondButtons.forEach(function (btn) {
          btn.classList.remove("focus_button");
        });
        secondButton.classList.add("focus_button");
      });
    });

    buttons.forEach(function (button) {
      button.addEventListener("click", function () {
        const focus_button = button.textContent;
        if (focus_button === "Подписчики") {
          inputElements.value = "";
          p_prays.textContent = "-";
          spin.innerHTML = ' <p class="services_text">Варианты накрутки</p>';
          Type_of_tipping.innerHTML = "";
          spin.insertAdjacentHTML(
            "beforeend",
            `<div class="options">
            <button class="bts-second-group  focus_button" >Стандарт <img src="/img_kalkylytor/Group 22 (1).png" alt="">  <p>2₽</p> </button>
            <button class="bts-second-group">Базовые <img src="/img_kalkylytor/Group 22 (1).png" alt=""> <p>3₽</p></button>
            <button class="bts-second-group">Премикм <img src="/img_kalkylytor/Group 22 (1).png" alt=""> <p>3₽</p></button>
            <button class="bts-second-group">США  <img src="/img_kalkylytor/Group 22 (2).png" alt=""><p>4₽</p></button>
            <button class="bts-second-group">Микс  <img src="/img_kalkylytor/Group 22 (3).png" alt=""><p>5₽</p></button>
            <button class="bts-second-group">СНГ  <img src="/img_kalkylytor/Group 22 (3).png" alt=""> <p>6₽</p></button>
             
            </div>`
          );
          const secondButtons = spin.querySelectorAll(".bts-second-group");
          secondButtons.forEach(function (secondButton) {
            secondButton.addEventListener("click", function () {
              secondButtons.forEach(function (btn) {
                btn.classList.remove("focus_button");
              });
              secondButton.classList.add("focus_button");
            });
          });
        } else if (focus_button === "Просмотры") {
          inputElements.value = "";
          p_prays.textContent = "-";
          Type_of_tipping.innerHTML = "";
          Type_of_tipping.insertAdjacentHTML(
            "beforeend",
            `<p class="services_text" >Тип накрутки</p>
            <div class="options">
              <button class="bts-second-group  focus_button">Разозые</button>
              <!-- Добавьте другие варианты с изображениями по аналогии -->
            </div>`
          );
          spin.innerHTML = ' <p class="services_text">Варианты накрутки</p>';
          spin.insertAdjacentHTML(
            "beforeend",
            `<div class="options">
              <button class="bts-second-group  focus_button" >Рекомендуем  <img src="/img_kalkylytor/Group 22 (1).png" alt=""><p>2₽</p> </button>
              <!-- Добавьте другие варианты с изображениями по аналогии -->
            </div>`
          );
          const thirdButtons =
            Type_of_tipping.querySelectorAll(".bts-second-group");
          thirdButtons.forEach(function (thirdButton) {
            thirdButton.addEventListener("click", function () {
              thirdButtons.forEach(function (button) {
                button.classList.remove("focus_button");
              });
              thirdButton.classList.add("focus_button");
            });
          });
        } else if (focus_button === "Реакции") {
          inputElements.value = "";
          p_prays.textContent = "-";
          Type_of_tipping.innerHTML = "";
          spin.innerHTML = ' <p class="services_text">Варианты накрутки</p>';
          Type_of_tipping.insertAdjacentHTML(
            "beforeend",
            `<p class="services_text" >Тип накрутки</p>
            <div class="options">
              <button class="bts-second-group  focus_button">Разозые <p>0.1₽</p></button>
              <!-- Добавьте другие варианты с изображениями по аналогии -->
            </div>`
          );
          spin.insertAdjacentHTML(
            "beforeend",
            `<div class="options">
            <button class = "button_img"><img src="/img_kalkylytor/01@3x.webp" alt=""></button>
            <button  class = "button_img"> <img src="/img_kalkylytor/02@3x.webp" alt=""></button>
            <button  class = "button_img "><img src="/img_kalkylytor/03@3x.webp" alt=""></button>
            <button  class = "button_img"><img src="/img_kalkylytor/04@3x.webp" alt=""> </button>
            <button  class = "button_img"><img src="/img_kalkylytor/05@3x.webp" alt=""></button>
            <button  class = "button_img"><img src="/img_kalkylytor/06@3x.webp" alt=""></button>
            <button  class = "button_img"><img src="/img_kalkylytor/07@3x.webp" alt=""></button>
            <button  class = "button_img"> <img src="/img_kalkylytor/08@3x.webp" alt=""></button>
            <button  class = "button_img"><img src="/img_kalkylytor/09@3x.webp" alt=""></button>
            <button  class = "button_img"><img src="/img_kalkylytor/10@3x.webp" alt=""></button>
            <button  class = "button_img hidenn"><img src="/img_kalkylytor/11@3x.webp" alt=""></button>
            <button  class = "button_img hidenn"><img src="/img_kalkylytor/12@3x.webp" alt=""></button>
            <button  class = "button_img hidenn"> <img src="/img_kalkylytor/13@3x.webp" alt=""></button>
            <button  class = "button_img hidenn"><img src="/img_kalkylytor/14@3x.webp" alt=""></button>
            <button  class = "button_img hidenn">  <img src="/img_kalkylytor/15@3x.webp" alt=""></button>
            <button  class = "button_img hidenn"><img src="/img_kalkylytor/16@3x.webp" alt=""></button>
            <button  class = "button_img hidenn"><img src="/img_kalkylytor/17@3x.webp" alt=""></button>
            <button  class = "button_img hidenn"><img src="/img_kalkylytor/18_prem@3x.webp" alt=""></button>
            <button  class = "button_img hidenn"><img src="/img_kalkylytor/19_prem@3x.webp" alt=""></button>
            <button  class = "button_img hidenn"><img src="/img_kalkylytor/20_prem@3x.webp" alt=""></button>
            <button  class = "button_img hidenn"><img src="/img_kalkylytor/21_prem@3x.webp" alt=""></button>
            <button  class = "button_img hidenn"><img src="/img_kalkylytor/22_prem@3x.webp" alt=""></button>
          <button  class = "button_img hidenn"><img src="/img_kalkylytor/23_prem@3x.webp" alt=""></button>
          <button  class = "button_img hidenn"><img src="/img_kalkylytor/24_prem@3x.webp" alt=""></button>
          <button  class = "button_img hidenn"><img src="/img_kalkylytor/25_prem@3x.webp" alt=""></button>
          <button  class = "button_img hidenn"><img src="/img_kalkylytor/26_prem@3x.webp" alt=""></button>
          <button  class = "button_img hidenn"><img src="/img_kalkylytor/27_prem@3x.webp" alt=""></button>
          <button  class = "button_img hidenn"><img src="/img_kalkylytor/28_prem@3x.webp" alt=""></button>
          <button  class = "button_img hidenn"><img src="/img_kalkylytor/29_prem@3x.webp" alt=""></button>
          <button  class = "button_img hidenn"><img src="/img_kalkylytor/30_prem@3x.webp" alt=""></button>
          <button  class = "button_img hidenn"><img src="/img_kalkylytor/33_prem@3x.webp" alt=""></button>
          <button  class = "button_img hidenn"><img src="/img_kalkylytor/34_prem@3x.webp" alt=""></button>
          <button  class = "button_img hidenn"><img src="/img_kalkylytor/35_prem@3x.webp" alt=""></button>
          <button  class = "button_img hidenn"><img src="/img_kalkylytor/36_prem@3x.webp" alt=""></button>
          <button  class = "button_img hidenn"><img src="/img_kalkylytor/37_prem@3x.webp" alt=""></button>
          <button  class = "button_img hidenn"><img src="/img_kalkylytor/38_prem@3x.webp" alt=""></button>
          <button  class = "button_img hidenn"> <img src="/img_kalkylytor/39_prem@3x.webp" alt=""></button>
          <button  class = "button_img hidenn"><img src="/img_kalkylytor/40_prem@3x.webp" alt=""></button>
          <button  class = "button_img hidenn"><img src="/img_kalkylytor/41_prem@3x.webp" alt=""></button>
          <button  class = "button_img hidenn"><img src="/img_kalkylytor/42_prem@3x.webp" alt=""></button>
          <button  class = "button_img hidenn"><img src="/img_kalkylytor/43_prem@3x.webp" alt=""></button>
          <button  class = "button_img hidenn"><img src="/img_kalkylytor/44_prem@3x.webp" alt=""></button>
          <button  class = "button_img hidenn"><img src="/img_kalkylytor/45_prem@3x.webp" alt=""></button>
          <button  class = "button_img hidenn"><img src="/img_kalkylytor/46_prem@3x.webp" alt=""></button>
          <button  class = "button_img hidenn"><img src="/img_kalkylytor/47_prem@3x.webp" alt=""></button>
          <button  class = "button_img hidenn"><img src="/img_kalkylytor/48_prem@3x.webp" alt=""></button>
          <button  class = "button_img hidenn"> <img src="/img_kalkylytor/50_prem@3x.webp" alt=""></button>
          <button  class = "button_img hidenn"><img src="/img_kalkylytor/51_prem@3x.webp" alt=""></button>
          <button  class = "button_img hidenn"><img src="/img_kalkylytor/52_prem@3x.webp" alt=""></button>
          <button  class = "button_img hidenn"><img src="/img_kalkylytor/53_prem@3x.webp" alt=""></button>
          <button  class = "button_img hidenn"><img src="/img_kalkylytor/54_prem@3x.webp" alt=""></button>
          <button  class = "button_img hidenn"><img src="/img_kalkylytor/55_prem@3x.webp" alt=""></button>
          <button  class = "button_img hidenn"><img src="/img_kalkylytor/56_prem@3x.webp" alt=""></button>
          <button  class = "button_img hidenn"><img src="/img_kalkylytor/57_prem@3x.webp" alt=""></button>
          <button  class = "button_img hidenn"><img src="/img_kalkylytor/59_prem@3x.webp" alt=""></button>
          <button  class = "button_img hidenn"><img src="/img_kalkylytor/60_prem@3x.webp" alt=""></button>
          <button  class = "button_img hidenn"><img src="/img_kalkylytor/61_prem@3x.webp" alt=""></button>
          <button  class = "button_img hidenn"><img src="/img_kalkylytor/62_prem@3x.webp" alt=""></button>
          <button  class = "button_img hidenn"><img src="/img_kalkylytor/65_prem@3x.webp" alt=""></button>
          
            </div>
            <button class="hideButton">Показывать эмодзи</button>`
          );
        }

        const imageButtons = spin.querySelectorAll(".button_img.hidenn img");
        imageButtons.forEach(function (imgButton) {
          imgButton.parentElement.style.display = "none";
        });

        const hideButton = document.querySelector(".hideButton");
        let isHidden = true;

        hideButton.addEventListener("click", function () {
          const imageButtons = spin.querySelectorAll(".button_img.hidenn img");
          imageButtons.forEach(function (imgButton) {
            if (isHidden) {
              imgButton.parentElement.style.display = "";
              hideButton.textContent = "Скрыть эмодзи";
            } else {
              imgButton.parentElement.style.display = "none";
              hideButton.textContent = "Показать эмодзи";
            }
          });

          isHidden = !isHidden;
        });

        const regularButtons = spin.querySelectorAll(".button_img");
        regularButtons.forEach(function (regularButton) {
          regularButton.addEventListener("click", function () {
            const buttonParent = regularButton;
            if (buttonParent.classList.contains("focus_button")) {
              buttonParent.classList.remove("focus_button");
            } else {
              buttonParent.classList.add("focus_button");
            }
          });
        });

        const thirdButtons =
          Type_of_tipping.querySelectorAll(".bts-second-group");
        thirdButtons.forEach(function (thirdButton) {
          thirdButton.addEventListener("click", function () {
            thirdButtons.forEach(function (button) {
              button.classList.remove("focus_button");
            });
            thirdButton.classList.add("focus_button");
          });
        });
      });
    });
  } else {
    const buttonsToRemove = div.querySelectorAll(".buttons");
    buttonsToRemove.forEach(function (buttons) {
      buttons.remove();
    });
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const inputElements = document.querySelector(".input_int");

  inputElements.addEventListener("blur", function (event) {
    const payse = parseFloat(
      document.querySelector(".focus_button p").textContent
    );
    const value_input = parseFloat(inputElements.value);
    const p_prays = document.querySelector(".prays p");

    if (value_input !== "" && !isNaN(value_input)) {
      p_prays.textContent = value_input * payse;
    } else {
      p_prays.textContent = "-";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  showSelectedSocialNetwork(); // Вызываете функцию сразу после загрузки документа

  // Добавляете обработчик события на ваш .select элемент (если это необходимо)
  document
    .querySelector(".select")
    .addEventListener("click", showSelectedSocialNetwork);

  // Добавьте другие обработчики событий, если это необходимо
});

document.querySelector(".telegram").addEventListener("click", function () {
  window.location.href = "http://127.0.0.1:5501/nakrytka_tg/nakrytka_tg.html";
  localStorage.setItem("button", JSON.stringify("clikc_kalculztor"));
});

document.querySelector(".div1").addEventListener("click", function () {
  window.location.href = "http://127.0.0.1:5501/nakrytka_tg/nakrytka_tg.html";
  localStorage.setItem("button", JSON.stringify("clikc_kalculztor"));
});

document.querySelector(".button_reg").addEventListener("click", function () {
  window.location.href = "http://127.0.0.1:5501/кабинет/privateoffice.html";
  localStorage.setItem("button", JSON.stringify("clikc_kalculztor"));
});

var selectElement = document.querySelector(".calculator select");
selectElement.addEventListener("change", showSelectedSocialNetwork);
showSelectedSocialNetwork();
