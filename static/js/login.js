let login = document.querySelector(".sign_up ");
let form = document.querySelector("form");
let block_form = document.querySelector(".block_form");

login.addEventListener("click", (event) => {
  login.style.display = login.style.display === "block" ? "none" : "block";
  event.preventDefault();
  if (block_form) {
    form.insertAdjacentHTML(
      "afterEnd",

      `   
      <form>
      <a href="" class="sign_up">Войти</a>
      <div class="user-box">
            <input type="text" name="" required="" />
            <label>Имя</label><div class="user-box">
            <input type="text" name="" required="" />
            <label>Фамилия</label><div class="user-box">
            <input type="text" name="" required="" />
            <label>Логин</label><div class="user-box">
            <input type="text" name="" required="" />
            <label>Почта</label>
          </div>
          <div class="user-box">
            <input type="password" name="" required="" />
            <label>Пароль</label>
        
            
            </div>
            <div class="user-box">
            <input type="password" name="" required="" />
            <label>Повтор Пароля</label>
        
            
            </div>
            </div>
            <center>
              <a href="#" class="send">
                Зарегестрироваться
                <span></span>
              </a>
            </center>
          </div></form>`
    );
    block_form.remove();
  }
});