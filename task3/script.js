const validStudents = {
  "student1": "Pass@123",
  "student2": "Learn#2024"
};

const specialChars = "!@#$%^&*()_+-=[]{}|;:',.<>/?";

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;
  const messageBox = document.getElementById("message");

  // Reset message
  messageBox.textContent = "";
  messageBox.className = "";

  // 1. Basic empty checks
  if (username === "") {
    showMessage("Please enter your Student ID.", "error");
    return;
  }
  if (password === "") {
    showMessage("Please enter your password.", "error");
    return;
  }

    const validationResult = validatePassword(password);
  if (!validationResult.valid) {
    showMessage(validationResult.message, "error");
    return;
  }

  // 3. Check credentials against our demo "database"
  if (validStudents.hasOwnProperty(username) && validStudents[username] === password) {
    showMessage("Login successful! Welcome, " + username + ".", "success");
  } else {
    showMessage("Invalid Student ID or Password.", "error");
  }
});

function validatePassword(password) {
  if (password.length < 8) {
    return { valid: false, message: "Password must be at least 8 characters long." };
  }

  let hasUpper = false;
  let hasLower = false;
  let hasDigit = false;
  let hasSpecial = false;

  for (let i = 0; i < password.length; i++) {
    const ch = password.charAt(i);
    const code = password.charCodeAt(i);

    // Uppercase letters: A(65) - Z(90)
    if (code >= 65 && code <= 90) {
      hasUpper = true;
    }
    // Lowercase letters: a(97) - z(122)
    else if (code >= 97 && code <= 122) {
      hasLower = true;
    }
    // Digits: 0(48) - 9(57)
    else if (code >= 48 && code <= 57) {
      hasDigit = true;
    }
    // Special characters: check membership in specialChars string
    else if (specialChars.indexOf(ch) !== -1) {
      hasSpecial = true;
    }
  }

  if (!hasUpper) {
    return { valid: false, message: "Password must contain at least one uppercase letter." };
  }
  if (!hasLower) {
    return { valid: false, message: "Password must contain at least one lowercase letter." };
  }
  if (!hasDigit) {
    return { valid: false, message: "Password must contain at least one number." };
  }
  if (!hasSpecial) {
    return { valid: false, message: "Password must contain at least one special character (!@#$%^&* etc.)." };
  }

  return { valid: true, message: "Password is valid." };
}

/**
 * Displays a message to the user with a given style class ("error" or "success").
 */
function showMessage(text, type) {
  const messageBox = document.getElementById("message");
  messageBox.textContent = text;
  messageBox.className = type;
}
