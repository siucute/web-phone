/*
=============
Navigation
=============
 */
const navOpen = document.querySelector(".nav__hamburger");
const navClose = document.querySelector(".close__toggle");
const menu = document.querySelector(".nav__menu");
const scrollLink = document.querySelectorAll(".scroll-link");
const navContainer = document.querySelector(".nav__menu");

navOpen.addEventListener("click", () => {
  menu.classList.add("open");
  document.body.classList.add("active");
  navContainer.style.left = "0";
  navContainer.style.width = "30rem";
});

navClose.addEventListener("click", () => {
  menu.classList.remove("open");
  document.body.classList.remove("active");
  navContainer.style.left = "-30rem";
  navContainer.style.width = "0";
});

/*
=============
PopUp
=============
 */
const popup = document.querySelector(".popup");
const closePopup = document.querySelector(".popup__close");

if (popup) {
  closePopup.addEventListener("click", () => {
    popup.classList.add("hide__popup");
  });

  window.addEventListener("load", () => {
    setTimeout(() => {
      popup.classList.remove("hide__popup");
    }, 500);
  });
}

/*
=============
Fixed Navigation
=============
 */

const navBar = document.querySelector(".navigation");
const gotoTop = document.querySelector(".goto-top");

// Smooth Scroll
Array.from(scrollLink).map(link => {
  link.addEventListener("click", e => {
    // Prevent Default
    e.preventDefault();

    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    const navHeight = navBar.getBoundingClientRect().height;
    const fixNav = navBar.classList.contains("fix__nav");
    let position = element.offsetTop - navHeight;

    if (!fixNav) {
      position = position - navHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });
    navContainer.style.left = "-30rem";
    document.body.classList.remove("active");
  });
});

// Fix NavBar

window.addEventListener("scroll", e => {
  const scrollHeight = window.pageYOffset;
  const navHeight = navBar.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navBar.classList.add("fix__nav");
  } else {
    navBar.classList.remove("fix__nav");
  }

  if (scrollHeight > 300) {
    gotoTop.classList.add("show-top");
  } else {
    gotoTop.classList.remove("show-top");
  }
});






window.addEventListener("load", event => {

  // Expand Left Side
  var icon = document.querySelector('.left__icon'),
      left = document.querySelector('.left');

  icon.addEventListener('click', expand);

  function expand() {
      if (left.classList.contains('show')) {
          left.classList.remove('show')
      } else {
          left.classList.add('show')
      }
  }

  var menuItem = document.querySelectorAll('.left__menuItem');

  menuItem.forEach(function (el) {
      el.addEventListener("click", openMenu);
  });

  function openMenu(event) {
      var currentmenuItem = event.currentTarget;

      if (currentmenuItem.classList.contains('open')) {
          currentmenuItem.classList.remove('open');
      } else {
          currentmenuItem.classList.add('open');
      }
  };
})









// Qua login.html
// thêm id:

// <input type="text" placeholder="Username" id="t1">

// <input type="password" placeholder="Password" id="t2">

// <input type="submit" value="Login" class="btn solid" onclick="checklogin()">

//  <input type="text" placeholder="Username" id="t3">

// <input type="email" placeholder="Email" id="t4">

// <input type="password" placeholder="Password" id="t5">

// <input type="submit" value="Sign up" class="btn solid" onclick="return checkform2()"></input>

