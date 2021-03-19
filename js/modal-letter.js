const modalLetter = document.querySelector(".footer-contacts-button");
const modalPopup = document.querySelector(".modal");
const modalClose = modalPopup.querySelector(".modal-close");
const modalForm = modalPopup.querySelector(".modal-info");
const modalName = modalPopup.querySelector(".modal-info-text-name");
const modalEmail = modalPopup.querySelector(".modal-info-text-email");
const modalText = modalPopup.querySelector(".modal-info-text-letter");

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("name");
  storage = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

modalLetter.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalPopup.classList.add("modal-show");

  if (storage) {
    modalName.value = storage;
    modalEmail.focus();
  } else {
    modalName.focus();
    if (storage) {
      modalEmail.value = storage;
      modalText.focus();
    } else {
      modalEmail.focus();
    }
  }

  modalName.focus();
});

modalClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalPopup.classList.remove("modal-show");
  modalPopup.classList.remove("modal-error");
});

modalForm.addEventListener("submit", function (evt) {
  if (!modalName.value || !modalEmail.value || !modalText.value) {
    evt.preventDefault();
    modalPopup.classList.remove("modal-error");
    modalPopup.offsetWidth = modalPopup.offsetWidth;
    modalPopup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", modalName.value);
      localStorage.setItem("email", modalEmail.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modalPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      modalPopup.classList.remove("modal-show");
      modalPopup.classList.remove("modal-error");
    }
  }
});
