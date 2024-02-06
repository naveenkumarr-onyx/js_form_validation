function validate() {
  var user = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var conformPassword = document.getElementById("confirm-password").value;
  checkUsername(user);
  checkEmail(email);
  checkPassword(password);
  checkVal(password, conformPassword);
}
function error() {}
function checkUsername(user) {
  const valid =
    user.length > 7
      ? ""
      : Toastify({
          text: "Username must be at least 8 characters",
          className: "error",
          duration: 3000,
          destination: "https://github.com/apvarun/toastify-js",
          newWindow: true,
          close: true,
          gravity: "top",
          position: "left",
          stopOnFocus: true,
          style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
          },
        }).showToast();
}

function checkEmail(email) {
  const emailVal =
    email.length > 8 && email.includes("@gmail.com")
      ? ""
      : Toastify({
          text: "Enter a valid email eg:username@gmail.com",
          className: "error",
          duration: 3000,
          newWindow: true,
          close: true,
          gravity: "top", // `top` or `bottom`
          position: "left", // `left`, `center` or `right`
          stopOnFocus: true, // Prevents dismissing of toast on hover
          style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
          },
        }).showToast();
}
function checkPassword(password) {
  const passwordVal =
    password.length > 8 && password.includes(".")
      ? " "
      : Toastify({
          text: "password must be 8 letters long and also includes .",
          className: "error",
          duration: 3000,
          newWindow: true,
          close: true,
          gravity: "top", // `top` or `bottom`
          position: "left", // `left`, `center` or `right`
          stopOnFocus: true, // Prevents dismissing of toast on hover
          style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
          },
        }).showToast();
}
function checkVal(password, conformPassword) {
  const conformPasswordVal =
    password === password && conformPassword.length
      ? ""
      : Toastify({
          text: "password did not match",
          className: "error",
          duration: 3000,
          destination: "https://github.com/apvarun/toastify-js",
          newWindow: true,
          close: true,
          gravity: "top", // `top` or `bottom`
          position: "left", // `left`, `center` or `right`
          stopOnFocus: true, // Prevents dismissing of toast on hover
          style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
          },
        }).showToast();
}

const hell = document.getElementById("hell");
hell.addEventListener("click", () => {
  Toastify({
    text: "This is a toast",
    duration: 3000,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "left", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
  }).showToast();
});
