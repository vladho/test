const prevBtnRef = document.querySelector(".swiper-button-prev");
const nextBtnRef = document.querySelector(".swiper-button-next");

const swiperSlide = document.querySelector(".swiper-slide");
const allBoxRef = document.querySelectorAll(".swiper-slide");

const swiperWrapperRef = document.querySelector(".swiper-wrapper");

let current = 0;

nextBtnRef.addEventListener("click", () => {
  let contain = null;
  console.log(current);

  //дальше расматриваем все наши боксы отдельно
  for (let i = 0; i < allBoxRef.length; i += 1) {
    console.log(current);
    allBoxRef[i].classList.add(`${i}`);

    //скрываем первый элемент, после бокса с классом is-hidden
    if (i === current) {
      allBoxRef[i].classList.add("is-hidden");
      console.log(allBoxRef[i]);
      contain = allBoxRef[i].classList.contains("is-hidden");
      console.log(contain);
      current += 1;
      return;
    }
  }
});
