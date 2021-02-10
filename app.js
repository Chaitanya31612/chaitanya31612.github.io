
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

//dark mode toggle
$(function(){
  
  $(".toggle--dark").on("click", function(){
    document.documentElement.classList.add('dark-mode')
    
    document.querySelectorAll('.t-btn').forEach((result) => {
      result.classList.add('same')
    })

    document.querySelectorAll('.inverted').forEach((result) => {
      result.classList.toggle('invert')
    })
  });

});

$(function(){
  
  $(".toggle--light").on("click", function(){
    document.documentElement.classList.remove('dark-mode')
    document.querySelectorAll('.t-btn').forEach((result) => {
      result.classList.remove('same')
    })
  });

});

