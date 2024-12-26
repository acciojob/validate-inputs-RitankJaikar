//your JS code here. If required.
document.addEventListener("DOMContentLoaded", () => {
  // Patterns for validation
  const patterns = {
    name: /^[A-Za-z]{3,}$/,
    email: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
    mobile: /^[0-9]{10}$/,
  };

  // Function to validate an input
  function validateInput(input, pattern) {
    if (pattern.test(input.value)) {
      input.classList.add("valid");
      input.classList.remove("invalid");
    } else {
      input.classList.add("invalid");
      input.classList.remove("valid");
    }
  }

  // Add event listeners to inputs
  document.querySelectorAll("input").forEach((input) => {
    input.addEventListener("input", () => {
      const field = input.id; // id of the input
      if (patterns[field]) {
        validateInput(input, patterns[field]);
      }
    });
  });
});
