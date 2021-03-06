import { modalBackDrop } from '../modal-window/modal-logic.js';

const exit = `
    <div class="exit-modal">
    <button class="exit-btn-escape">
    <svg class="exit-svg">
                <use href="./images/sprite/sprite.svg#icon-close"></use>
    </svg>
    </button>
    <h2 class="exit-text">Вы точно хотите выйти из аккаунта?<h2>
    <div class="exit-btn-group">
    <button class="exit-btn confirm">Выйти</button>
    <button class="exit-btn cancel">Отмена</button>
    </div>
</div>`;

const exitRef = document.querySelector('.exit');
exitRef.addEventListener('click', formExit);

function formExit() {
  modalBackDrop(exit);

  const closeModal = () => {
    modalRef.classList.remove('is-open');
  };

  const modalRef = document.querySelector('.modal');

  const exitBtnRef = document.querySelector('.exit-btn-escape');
  exitBtnRef.addEventListener('click', closeModal);

  const cancelBtnRef = document.querySelector('.cancel');
  cancelBtnRef.addEventListener('click', closeModal);
}
