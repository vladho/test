const prevBtnRef = document.querySelector(".swiper-button-prev");
const nextBtnRef = document.querySelector(".swiper-button-next");

const allBoxPseudoArrayRef = document.querySelectorAll(".swiper-slide");

const allBoxArrayRef = [...allBoxPseudoArrayRef];
const allIndicatorRef = document.querySelectorAll(".indcator-box");
const allIndicator = [...allIndicatorRef];

const swiperWrapperRef = document.querySelector(".swiper-wrapper");

let calc = 1;

const widthOfOneBlock = 150;
const findMaxEl = (allBoxArrayRef.length - 2) * widthOfOneBlock;

let transformForX = 0;

prevBtnRef.addEventListener("click", () => {
  if (transformForX > -widthOfOneBlock) {
    return;
  }

  transformForX += 150;
  calc -= 1;

  allIndicator[calc].classList.remove("is-active");
  allIndicator[calc - 1].classList.add("is-active");

  swiperWrapperRef.style.transform = `translate3d(${
    transformForX + "px"
  }, 0, 0)`;
});

nextBtnRef.addEventListener("click", () => {
  if (transformForX < -findMaxEl) {
    return;
  }
  calc += 1;

  allIndicator[calc - 2].classList.remove("is-active");
  allIndicator[calc - 1].classList.add("is-active");

  transformForX -= 150;
  swiperWrapperRef.style.transform = `translate3d(${
    transformForX + "px"
  }, 0, 0)`;
});
