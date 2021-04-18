
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    document.querySelector(".nav").style.top = "0";
  } else {
    document.querySelector(".nav").style.top = "-70px";
  }
}

let loader = document.querySelector('.loader');

window.addEventListener("load", vanish);
function vanish() {
    loader.classList.add("disappear")
}


// function for toggling hamburger is-active class
$(function(){
  
  $("#js-hamburger").on("click", function(){
    $(this).toggleClass('is-active');
    $(".nav__links").toggleClass('visible');
    $(".nav__title").toggleClass('not-active');
  });

});

if (!localStorage.getItem("theme")) {
  localStorage.setItem("theme", "light");  
}


const checkTheme = () => {
  if (localStorage.getItem("theme") == "dark") {
    DarkReader.enable({
      brightness: 100,
      contrast: 90,
      sepia: 10
    });

    document.getElementById("white").setAttribute('style', 'background:white !important');
  } else if (localStorage.getItem("theme") == "light") {
    document.getElementById("black").setAttribute('style', 'background:black !important');
    DarkReader.disable();
  }
}

// window.addEventListener("load", checkTheme)

$(function(){

  $(".toggle--dark").on("click", function () {
    DarkReader.enable({
        brightness: 100,
        contrast: 90,
        sepia: 10
    });

    document.getElementById("white").setAttribute('style', 'background:white !important');
    // const icons = document.getElementsByClassName("social-icon")
    // console.log(icons);
    // for (let i = 0; i < icons.length; i++) {
    //   console.log("here");
    //   console.log(icons[i]);
    // }

    localStorage.setItem("theme", "dark");
  });

});

$(function(){
  
  $(".toggle--light").on("click", function(){
    DarkReader.disable();
    localStorage.setItem("theme", "light");
  });

});

//dark mode toggle
// $(function(){
  
//   $(".toggle--dark").on("click", function(){
//     document.documentElement.classList.add('dark-mode')
    
//     document.querySelectorAll('.t-btn').forEach((result) => {
//       result.classList.add('same')
//     })

//     document.querySelectorAll('.inverted').forEach((result) => {
//       result.classList.toggle('invert')
//     })
//   });

// });

// $(function(){
  
//   $(".toggle--light").on("click", function(){
//     document.documentElement.classList.remove('dark-mode')
//     document.querySelectorAll('.t-btn').forEach((result) => {
//       result.classList.remove('same')
//     })
//   });

// });

