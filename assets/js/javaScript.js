// form.addEventListener("submit", function(e) {
//   e.preventDefault();
// });

document.querySelectorAll(".login__toggle").forEach(toggle => {
  toggle.addEventListener("click", function () {
    const input = this
      .closest(".login__group")
      .querySelector("input");

    const isPassword = input.type === "password";

    // input.type = isPassword ? "text" : "password";
    if (isPassword) {
        input.type = "text";
    } else {
        input.type = "password";
    }

    this.innerHTML = isPassword
      ? '<i class="bx bx-eye-slash"></i>'
      : '<i class="bx bx-eye"></i>';
  });
});


// click vào eye sẽ không kích hoạt focus-within
document.querySelectorAll(".login__toggle").forEach(btn => {
  btn.addEventListener("mousedown", e => e.preventDefault());
});