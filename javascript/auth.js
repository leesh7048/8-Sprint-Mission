const passwordInput = document.querySelector("#auth-password");
const passwordToggleButton = document.querySelectorAll(
  ".password-visible-toggle-btn"
);

const handlePasswordToggleButton = (e) => {
  const toggleBtn = e.currentTarget;
  const isPasswordVisible = toggleBtn.classList.toggle("visible");
  const toggleImg = toggleBtn.firstElementChild;
  const authPasswordInput = toggleBtn.previousElementSibling;

  if (isPasswordVisible) {
    toggleImg.src = "/image/btn_visibility_on.png";
    toggleImg.alt = "visible";
    authPasswordInput.type = "text";
    return;
  }
  toggleImg.src = "/image/btn_visibility_off.png";
  toggleImg.alt = "invisible";
  authPasswordInput.type = "password";
};

passwordToggleButton.forEach((passwordBtn) => {
  passwordBtn.addEventListener("click", handlePasswordToggleButton);
});
