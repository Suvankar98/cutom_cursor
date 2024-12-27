let main = document.querySelector("#main");
let crsr = document.querySelector(".cursor");

main.addEventListener("mousemove", function (mouse) {
  //   console.log(mouse.y);
  crsr.style.left = mouse.x + "px";
  crsr.style.top = mouse.y + "px";
});
