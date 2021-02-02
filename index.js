const prevBtnRef = document.querySelector(".swiper-button-prev");
const nextBtnRef = document.querySelector(".swiper-button-next");

const allBoxPseudoArrayRef = document.querySelectorAll(".swiper-slide");

const allBoxArrayRef = [...allBoxPseudoArrayRef];

const swiperWrapperRef = document.querySelector(".swiper-wrapper");

let contain = null;

const widthOfOneBlock = 150;
const findMaxEl = (allBoxArrayRef.length - 2) * widthOfOneBlock;
console.log(findMaxEl);
let transformForX = 0;

prevBtnRef.addEventListener("click", () => {
  console.log(transformForX);
  if (transformForX > -widthOfOneBlock) {
    return;
  }
  console.log(transformForX);
  transformForX += 150;

  swiperWrapperRef.style.transform = `translate3d(${
    transformForX + "px"
  }, 0, 0)`;
});

nextBtnRef.addEventListener("click", () => {
  // console.log(transformForX);
  if (transformForX < -findMaxEl) {
    return;
  }
  // console.log(transformForX);

  transformForX -= 150;
  swiperWrapperRef.style.transform = `translate3d(${
    transformForX + "px"
  }, 0, 0)`;
});
