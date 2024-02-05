window.onload = () => {
  let input = document.querySelector("#subscribe");
  let inputContainer = document.querySelector(".section_subscribe_form");
  let errorMessage = "123";
  let emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i;
  let error = document.createElement("em");
  error.style.color = "red";
  error.innerText = "email is invalid";
  input.addEventListener("input", (e) => {
    if (e.target.value.match(emailReg)) {
      if (inputContainer.contains(error)) {
        inputContainer.removeChild(error);
      }
    } else {
      if (!inputContainer.contains(error)) {
        inputContainer.appendChild(error);
      }
    }
  });
};
document.addEventListener("DOMContentLoaded", function () {
  const duration = 1000;
  scrollToSmoothly(0, duration);
});

function scrollToSmoothly(targetPosition, duration) {
  const startPosition = window.scrollY || window.pageYOffset;
  const startTime =
    "now" in window.performance ? performance.now() : new Date().getTime();

  function scroll() {
    const currentTime =
      "now" in window.performance ? performance.now() : new Date().getTime();
    const timeElapsed = currentTime - startTime;

    window.scrollTo(
      0,
      easeInOutCubic(
        timeElapsed,
        startPosition,
        targetPosition - startPosition,
        duration
      )
    );

    if (timeElapsed < duration) {
      requestAnimationFrame(scroll);
    }
  }

  function easeInOutCubic(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t * t + b;
    t -= 2;
    return (c / 2) * (t * t * t + 2) + b;
  }

  scroll();
}
