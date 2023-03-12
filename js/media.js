// lightbox///
let Images = document.querySelectorAll(".gallery .img img");
Images.forEach((image) => {
  image.addEventListener("click", LightBox);
});
function LightBox() {
  let ImageSrc = this.getAttribute("src");
  document.querySelector(".lightbox").classList.add("active");
  document.querySelector("#LightBoxImg").setAttribute("src", ImageSrc);

  document.addEventListener("click", (e) => {
    if (e.target.id == "Light_Box") {
      document.querySelector(".lightbox").classList.remove("active");
    }
  });
}

document.querySelector(".close").addEventListener("click", () => {
  document.querySelector(".lightbox").classList.remove("active");
});
// lightbox///
