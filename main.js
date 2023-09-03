let popUp = document.getElementById("callMe");
let submit = document.getElementById("submit");
let modalPopUp = document.getElementById("modalPopUp");
let sliderLine = document.querySelector(".slider_line");
let slidernum = 0;
let commentnext = document.getElementById("commentnext")
let commentprev = document.getElementById("commentprev")
let modalwindow = document.getElementsByClassName("modal_window")[0]

popUp.onclick = function (event) {
  event.preventDefault();
  //   переменная.метод замены стиля.стиль который будет заменяться = значение на которое будет заменено
  modalPopUp.style.transform = "translateY(0)";
};
modalPopUp.onclick = function () {
  modalPopUp.style.transform = "translateY(-100%)";
};
modalwindow.onclick = function(event) {
  event.stopPropagation();
}

submit.onclick = function (event) {
  event.preventDefault();
};

// Если закоментировать форму call me то кнопки работать не будут

document.querySelector(".slider_next").addEventListener("click", function () {
  slidernum = slidernum - 100;
  // количество слайдеров = родитель.дети.длинна(в данном случае 3 так как у нас 3 блока slide) * 100%
  if (slidernum == sliderLine.children.length * -100) {
    slidernum = 0;
  }
  sliderLine.style.transform = "translateX(" + slidernum + "%)";
});

document.querySelector(".slider_prev").addEventListener("click", function () {
  slidernum = slidernum + 100;
  // количество слайдеров = родитель.дети.длинна(в данном случае 3 так как у нас 3 блока slide) * 100%
  if (slidernum == 100) {
    slidernum = (sliderLine.children.length -1) * -100;
  }
  sliderLine.style.transform = "translateX(" + slidernum + "%)";
});

commentnext.onclick = function() {
  let allslides = document.getElementsByClassName("commentsslide")
  let activeslide = document.getElementsByClassName("active")[0];
  // nextElementSibling - След. брат тега
  let nextslide = activeslide.nextElementSibling
  activeslide.classList.remove("active")
  if(nextslide.classList[0] == "slider_button") {
    nextslide = allslides[0]
}
  setTimeout(() => {
      nextslide.classList.add("active")
  }, 500);
}


commentprev.onclick = function() {
  let allslides = document.getElementsByClassName("commentsslide")
  let activeslide = document.getElementsByClassName("active")[0];
  // nextElementSibling - Пред. брат тега
  let prevslide = activeslide.previousElementSibling
  activeslide.classList.remove("active")
  if(!prevslide) {
    prevslide = allslides[allslides.length - 1]
}
  setTimeout(() => {
      prevslide.classList.add("active")
  }, 500);
}


