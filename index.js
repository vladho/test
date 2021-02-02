const prevBtnRef = document.querySelector(".swiper-button-prev")
const nextBtnRef = document.querySelector(".swiper-button-next")

const swiperSlide = document.querySelector(".swiper-slide")
const allBoxPseudoArrayRef = document.querySelectorAll(".swiper-slide")

const allBoxArrayRef = [...allBoxPseudoArrayRef]

const swiperWrapperRef = document.querySelector(".swiper-wrapper")

let current = 0
let contain = null
nextBtnRef.addEventListener("click", () => {
  //дальше расматриваем все наши боксы отдельно
  for (let i = 0; i < allBoxArrayRef.length; i += 1) {
    if (current === allBoxArrayRef.length - 3) {
      return
    }
    if (i === current) {
      // swiperWrapperRef.classList.add("is-visible-left")
      allBoxArrayRef.map((item) => item.classList.add("is-visible-left"))
      setTimeout(() => {
        allBoxArrayRef[i].classList.add("is-hidden")
        // swiperWrapperRef.classList.remove("is-visible-left")
        allBoxArrayRef.map((item) => item.classList.remove("is-visible-left"))
      }, 300)

      current += 1
      return
    }
  }
})

prevBtnRef.addEventListener("click", () => {
  // console.log(allBoxArrayRef.length)

  //дальше расматриваем все наши боксы отдельно
  for (let i = allBoxArrayRef.length - 1; i < allBoxArrayRef.length; i -= 1) {
    //скрываем первый элемент, после бокса с классом is-hidden
    if (current === 0) {
      return
    }
    if (i === current - 1) {
      allBoxArrayRef.map((item) => item.classList.add("is-visible-right"))

      setTimeout(() => {
        allBoxArrayRef.map((item) => item.classList.remove("is-visible-right"))
      }, 300)

      setTimeout(() => {
        allBoxArrayRef[i].classList.remove("is-hidden")
      }, 300)

      current -= 1

      return
    }
  }
})
