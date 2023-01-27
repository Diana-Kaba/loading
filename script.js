window.onload = function () {
  let menu = document.getElementById("menu");
  let menuBottom = 100; // пограничное значения отступа от верхнего края при прокрутке
  let arrow = document.getElementById("up");
  window.onscroll = function () {
    if (document.documentElement.scrollTop < menuBottom) {
      // или document.body.scrollTop > menuBottom
      menu.classList.remove("fixed"); // удаляем класс 'fixed'
    } else {
      menu.classList.add("fixed"); // добавляем класс 'fixed'
    }

    if (document.documentElement.scrollTop < menuBottom) {
      arrow.classList.add("fade");
    } else {
      arrow.classList.remove("fade");
    }
  };

  let state = document.readyState;    document.getElementById("load").style.visibility = "hidden";
  if (state == "interactive") {
    document.getElementById("contents").style.visibility = "hidden";

  } else if (state == "complete") {
    setTimeout(function () {
      document.getElementById("load").style.visibility = "hidden";
      document.getElementById("contents").style.visibility = "visible";
    }, 2000);
  }
};
