let tg = window.Telegram.WebApp;

tg.expand();
window.addEventListener("DOMContentLoaded", event => {
    console.log("DOM fully loaded and parsed")
    const themeButton = document.querySelector(".btn")
    const val = document.querySelector(".count")
    newval = 0
    const handleClick = () => {
        newval++
        document.getElementsByClassName('count')[0].textContent = newval;
    }
    themeButton.addEventListener("click", handleClick)
  })
