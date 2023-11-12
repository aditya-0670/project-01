
const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

function firstPageAnim()
{
  let tl = gsap.timeline();

  tl.from(".nav" , {
    y: '-10',
    opacity : 0,
    duration : 1.5,
    ease : "expo.inOut" 
  })

  .to(".boundingelm" , {
    y : 0,
    duration : 2,
    delay : -1,
    ease : "expo.inOut" 
  })

  .from("#herofooter" , {
    y: '-10',
    opacity : 0,
    delay: -1.5,
    duration : 2,
    ease : "expo.inOut" 
  })
}

function circleMouseFollower()
{
  window.addEventListener('mousemove' , function(event)
  {
      this.document.querySelector("#minicircle").style.transform = `translate(${event.clientX}px , ${event.clientY}px)`;
  })
}

document.querySelectorAll(".elements").forEach(function (elem) {
  var rotate = 0;
  var diffrot = 0;

  elem.addEventListener("mouseleave", function (dets) {
    gsap.to(elem.querySelector("img"), {
      opacity: 0,
      ease: Power3,
      duration: 0.5,
    });
  });

  elem.addEventListener("mousemove", function (dets) {
    var diff = dets.clientY - elem.getBoundingClientRect().top;
    diffrot = dets.clientX - rotate;
    rotate = dets.clientX;
    gsap.to(elem.querySelector("img"), {
      opacity: 1,
      ease: Power3,
      top: diff,
      left: dets.clientX,
      rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
    });
  });
});

circleMouseFollower();
firstPageAnim();