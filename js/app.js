var t1 = new TimelineMax({ paused: true });

t1.to(".one", 0.3, {
  y: 6,
  rotation: 45,
  ease: Expo.easeInOut
});
t1.to(".two", 0.3, {
  y: -6,
  rotation: -45,
  ease: Expo.easeInOut,
  delay: -0.3
});

t1.to(".menu", 0.8, {
  top: "0%",
  ease: Expo.easeInOut,
  delay: -0.6
});

t1.staggerFrom(
  ".menu ul li",
  0.5,
  { x: -200, opacity: 0, ease: Expo.easeOut },
  0.1
);

t1.reverse();

$(document).on("click","a", function() {
  t1.reversed(!t1.reversed());
});


$(document).on("click", ".toggle-btn", function() {
  t1.reversed(!t1.reversed());
});

let mouseCursor = document.querySelector('.cursor');
const links = document.querySelectorAll('a');
const hamburger = document.querySelector('.toggle-btn');
const carousalImg = document.querySelector('.slick-slide');


window.addEventListener('mousemove', cursor);
function cursor(e) {
  mouseCursor.style.top = e.pageY + 'px';
  mouseCursor.style.left = e.pageX + 'px';
}

links.forEach(link => {
  link.addEventListener('mouseover', () => {
    mouseCursor.classList.add('hovered-link');
  });
  link.addEventListener('mouseleave', () => {
    mouseCursor.classList.remove('hovered-link');
  });
});

  hamburger.addEventListener('mouseover', () => {
    mouseCursor.classList.add('hovered-link');
});
  hamburger.addEventListener('mouseleave', () => {
    mouseCursor.classList.remove('hovered-link');
  });

arrow.addEventListener('mouseover', () => {
  mouseCursor.classList.add('hovered-link');
  console.log("jhd")
});
  arrow.addEventListener('mouseleave', () => {
    mouseCursor.classList.remove('hovered-link');
  });
