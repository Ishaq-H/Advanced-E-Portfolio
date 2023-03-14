// template_oh63o6n
// service_vinpx7h
// 51bL6-6nqhzOSjAol

let isModalOpen = false;
let contrastToggle = false;

function toggleContrast() {
  contrastToggle = !contrastToggle;
  if (contrastToggle) {
    document.body.classList += " dark-theme";
  } else {
    document.body.classList.remove("dark-theme");
  }
}

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += ` modal__overlay--visible`;
  emailjs
    .sendForm(
      `service_vinpx7h`,
      `template_oh63o6n`,
      event.target,
      `51bL6-6nqhzOSjAol`
    )
    .then(() => {
      loading.classList.remove(`modal__overlay--visible`);
      success.classList += ` modal__overlay--visible`;
    })
    .catch(() => {
      loading.classList.remove(`modal__overlay--visible`);
      alert(
        "The email service is temporarily unavailable. Please contact me at itzizak@gmail.com"
      );
    });
}

// const contact = async (event) => {
//   event.preventDefault()
//   const loading = document.querySelector(".modal__overlay--loading");
//   const success = document.querySelector(".modal__overlay--success");
//   loading.classList += ` modal__overlay--visible`;
//   await emailjs.sendForm(
//     `service_vinpx7h`,
//     `template_oh63o6n`,
//     event.target,
//     `51bL6-6nqhzOSjAol`
//   );
// }

function toggleModal() {
  if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove("modal--open");
  }
  isModalOpen = true;
  document.body.classList += ` modal--open`;
}
