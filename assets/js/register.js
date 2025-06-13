const registerForm = document.getElementById("registerForm");

function showError(elementId, message) {
  const errorElement = document.getElementById(elementId + "Error");
  const inputElement = document.getElementById(elementId);
  if (errorElement) errorElement.textContent = message;
  if (inputElement) inputElement.classList.add("invalid");
}

function clearError(elementId) {
  const errorElement = document.getElementById(elementId + "Error");
  const inputElement = document.getElementById(elementId);
  if (errorElement) errorElement.textContent = "";
  if (inputElement) inputElement.classList.remove("invalid");
}

const validators = {
  required: (value) => value.trim() !== "",
  minLength: (value, length) => value.trim().length >= length,
  email: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
  phone: (value) => value === "" || /^\+?[0-9\s-()]{7,20}$/.test(value),
  countryCode: (value) => value === "" || /^\+?[0-9]{1,4}$/.test(value),
  checked: (input) => input.checked,
};

function validateField(field, rules) {
  const value = field.type === "checkbox" ? field : field.value;
  for (const rule of rules) {
    let isValid = true;
    if (typeof rule === "string") {
      isValid = validators[rule](value);
    } else if (typeof rule === "object") {
      const [ruleName, ...params] = rule;
      isValid = validators[ruleName](value, ...params);
    }
    if (!isValid) return false;
  }
  return true;
}

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let formIsValid = true;

  const fields = [
    {
      id: "fname",
      rules: [["required"], ["minLength", 2]],
      message: "First Name must be at least 2 characters.",
    },
    {
      id: "lname",
      rules: [["required"], ["minLength", 2]],
      message: "Last Name must be at least 2 characters.",
    },
    {
      id: "email",
      rules: [["required"], ["email"]],
      message: "Please enter a valid email address.",
    },
    {
      id: "password",
      rules: [["required"], ["minLength", 8]],
      message: "Password must be at least 8 characters long.",
    },
    {
      id: "countryCode",
      rules: [["countryCode"]],
      message: "Invalid Country Code format (e.g., +1, 91).",
    },
    {
      id: "mobile",
      rules: [["phone"]],
      message: "Please enter a valid phone number.",
    },
    {
      id: "tac",
      rules: [["checked"]],
      message: "You must agree to the terms.",
    },
  ];

  for (const fieldDef of fields) {
    const field = document.getElementById(fieldDef.id);
    if (!validateField(field, fieldDef.rules)) {
      showError(fieldDef.id, fieldDef.message);
      formIsValid = false;
    } else {
      clearError(fieldDef.id);
    }
  }

  if (formIsValid) {
    alert("Form submitted successfully!");
    const formData = {};
    for (const fieldDef of fields) {
      const field = document.getElementById(fieldDef.id);
      if (field.type === "checkbox") {
        formData[fieldDef.id] = field.checked;
      } else {
        formData[fieldDef.id] = field.value;
      }
    }
    console.log(formData);
  }
});
