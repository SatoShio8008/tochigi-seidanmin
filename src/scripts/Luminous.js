/* Lightbox Luminous */
new LuminousGallery(
  document.querySelectorAll(".grid-gallery"),
  {},
  {
    caption: function (trigger) {
      return trigger.querySelector("img").getAttribute("alt");
    },
  }
);

/* Fadeup Animation AOS */
AOS.init({
  duration: 1000,
});
