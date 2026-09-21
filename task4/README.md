# Experiment/ Case Study No.: 4

---

## TASK 1: Palindrome Checker

### 1. Experiment Title:
JavaScript program to check whether a given string or number is a palindrome.

### 2. Software/Tools Required:
- HTML5, CSS3, JavaScript (ES6)
- Code Editor: Visual Studio Code
- Web Browser: Google Chrome / Mozilla Firefox
- GitHub Repository: madhura-rew/Javascript (task4/palindrome.html)

### 3. Experiment Program Code:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Palindrome Checker</title>
</head>
<body>
    <h2>Palindrome Checker</h2>
    <label>Enter a String or Number: </label>
    <input type="text" id="input">
    <button onclick="checkPalindrome()">Check</button>
    <p id="result"></p>

    <script>
        function checkPalindrome() {
            const input = document.getElementById("input").value.trim();
            const result = document.getElementById("result");

            if (input === "") {
                result.innerHTML = "Please enter a value.";
                return;
            }

            // Normalize: lowercase and remove non-alphanumeric characters
            const cleaned = input.toLowerCase().replace(/[^a-z0-9]/g, "");
            const reversed = cleaned.split("").reverse().join("");

            if (cleaned === reversed) {
                result.innerHTML = '"' + input + '" is a Palindrome ✔';
                result.style.color = "green";
            } else {
                result.innerHTML = '"' + input + '" is not a Palindrome ✘';
                result.style.color = "red";
            }
        }
    </script>
</body>
</html>
```
## 4. output
<img width="722" height="561" alt="Screenshot 2026-09-21 161543" src="https://github.com/user-attachments/assets/6e05e4fe-df71-467e-97f0-17f47aff01fd" />
<img width="708" height="498" alt="Screenshot 2026-09-21 161552" src="https://github.com/user-attachments/assets/655ecc05-a780-4957-9d35-6d01be12cfcc" />

## 5. case study title:
Vehicle Registration System using JavaScript form validation and object-oriented concepts.
## 6. Case study program code:
``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Vehicle Registration System</title>
</head>
<body>
    <h2>Vehicle Registration Form</h2>
    <form id="regForm" onsubmit="return registerVehicle(event)">
        <label>Owner Name: </label>
        <input type="text" id="ownerName"><br><br>

        <label>Registration Number: </label>
        <input type="text" id="regNo" placeholder="e.g. MH12AB1234"><br><br>

        <label>Vehicle Type: </label>
        <select id="vType">
            <option value="">--Select--</option>
            <option>Car</option>
            <option>Bike</option>
            <option>Truck</option>
            <option>Bus</option>
        </select><br><br>

        <label>Model Year: </label>
        <input type="number" id="year"><br><br>

        <button type="submit">Register</button>
    </form>

    <div id="output"></div>

    <script>
        function registerVehicle(event) {
            event.preventDefault();

            const ownerName = document.getElementById("ownerName").value.trim();
            const regNo = document.getElementById("regNo").value.trim().toUpperCase();
            const vType = document.getElementById("vType").value;
            const year = Number(document.getElementById("year").value);
            const output = document.getElementById("output");

            // Validation
            if (!ownerName || !regNo || !vType || isNaN(year)) {
                output.innerHTML = "<p style='color:red'>All fields are required.</p>";
                return false;
            }

            const regPattern = /^[A-Z]{2}\d{2}[A-Z]{1,2}\d{4}$/;
            if (!regPattern.test(regNo)) {
                output.innerHTML = "<p style='color:red'>Invalid registration number format (e.g. MH12AB1234).</p>";
                return false;
            }

            const currentYear = new Date().getFullYear();
            if (year < 1900 || year > currentYear) {
                output.innerHTML = "<p style='color:red'>Model year must be between 1900 and " + currentYear + ".</p>";
                return false;
            }

            // Create vehicle object
            const vehicle = { ownerName, regNo, vType, year };

            output.innerHTML = `
                <h3>Registration Successful ✔</h3>
                <p><b>Owner:</b> ${vehicle.ownerName}</p>
                <p><b>Reg No:</b> ${vehicle.regNo}</p>
                <p><b>Type:</b> ${vehicle.vType}</p>
                <p><b>Model Year:</b> ${vehicle.year}</p>
            `;
            return false;
        }
    </script>
</body>
</html>
```
## 7. output
<img width="548" height="487" alt="Screenshot 2026-09-21 161654" src="https://github.com/user-attachments/assets/ce7b5633-d749-4951-a4a0-390fb5ada969" />
<img width="599" height="494" alt="Screenshot 2026-09-21 161622" src="https://github.com/user-attachments/assets/3da12e52-d069-4c11-803f-dc767d82fbd5" />

## 8. result/conclusion
Both programs were successfully designed, executed and tested in the browser. The Palindrome Checker demonstrates string manipulation techniques such as split(), reverse(), and join() along with regex-based normalization. The Vehicle Registration System demonstrates form handling, regular expression validation for registration numbers, date-based validation, and object creation in JavaScript. These experiments highlight DOM manipulation, event handling, and input validation in client-side JavaScript.

