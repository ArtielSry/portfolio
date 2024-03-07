const stickySections = [...document.querySelectorAll(".sticky")];

// scroll
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", (e) => {
    for (let i = 0; i < stickySections.length; i++) {
      transform(stickySections[i]);
    }
  });
});

function transform(section) {
  const offsetTop = section.parentElement.offsetTop;
  const scrollSection = section.querySelector(".scroll_section");

  let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100;
  percentage = percentage < 0 ? 0 : percentage > 500 ? 500 : percentage;
  scrollSection.style.transform = `translate3d(${-percentage}vw, 0, 0 )`;
}

/*progress bar*/
document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener("scroll", function () {
    const scrollTop = window.scrollY;
    const documentHeight = document.body.scrollHeight - window.innerHeight;
    const progressBar = document.getElementById("progressBar");
    const progress = (scrollTop / documentHeight) * 100;
    progressBar.style.width = progress + "%";
  });
});

