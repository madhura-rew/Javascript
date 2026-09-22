# Experiment No. 8



---

## Experiment Title
Form Validation using Regular Expressions in JavaScript

---

## Software / Tools Required
1. Visual Studio Code
2. Google Chrome
3. HTML5
4. JavaScript (ES6)

---

## Task 8.1 — Gym Admission Form Validation

### Aim
Build a Gym Admission Form that validates all fields using JavaScript Regular Expressions (Regex) and event handling (`input`, `blur`, `change`, `submit`). The form should provide real-time feedback and prevent submission if there are validation errors.

### File Path
`8/index.html`

### Program Code

#### `8/index.html`
```html
<!DOCTYPE html>
<html>

<head>
    <title>Gym Admission Form</title>

    <style>
        body {
            font-family: Arial, sans-serif;
            background: #f2f2f2;
        }

        .container {
            width: 400px;
            margin: 40px auto;
            padding: 20px;
            background: white;
            border-radius: 10px;
            box-shadow: 0 0 10px gray;
        }

        h2 {
            text-align: center;
        }

        label {
            display: block;
            margin-top: 10px;
        }

        input,
        select {
            width: 100%;
            padding: 8px;
            margin-top: 5px;
        }

        .error {
            color: red;
            font-size: 13px;
        }

        .success {
            color: rgb(107, 25, 140);
            font-size: 14px;
            text-align: center;
        }

        button {
            width: 100%;
            padding: 10px;
            margin-top: 15px;
            background: rgb(169, 73, 176);
            color: white;
            border: none;
            cursor: pointer;
        }
    </style>
</head>

<body>

    <div class="container">

        <h2>Gym Admission Form</h2>

        <form id="gymForm">

            <label>Full Name</label>
            <input type="text" id="name">
            <span id="nameError" class="error"></span>

            <label>Age</label>
            <input type="number" id="age">
            <span id="ageError" class="error"></span>

            <label>Email</label>
            <input type="email" id="email">
            <span id="emailError" class="error"></span>

            <label>Mobile Number</label>
            <input type="text" id="mobile">
            <span id="mobileError" class="error"></span>

            <label>Membership Plan</label>
            <select id="plan">
                <option value="">Select Plan</option>
                <option>Monthly</option>
                <option>Quarterly</option>
                <option>Yearly</option>
            </select>
            <span id="planError" class="error"></span>

            <button type="submit">Submit</button>

            <p id="result" class="success"></p>

        </form>

    </div>

    <script>

        // Name Validation (input event)
        document.getElementById("name").addEventListener("input", function () {

            let name = this.value;

            if (/^[A-Za-z ]+$/.test(name)) {
                document.getElementById("nameError").innerHTML = "";
            } else {
                document.getElementById("nameError").innerHTML = "Only letters allowed.";
            }

        });
        


        // Age Validation (blur event)
        document.getElementById("age").addEventListener("blur", function () {

            let age = this.value;

            if (age >= 16 && age <= 60) {
                document.getElementById("ageError").innerHTML = "";
            } else {
                document.getElementById("ageError").innerHTML = "Age must be between 16 and 60.";
            }

        });


        // Email Validation (input event)
        document.getElementById("email").addEventListener("input", function () {

            let email = this.value;
            let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (pattern.test(email)) {
                document.getElementById("emailError").innerHTML = "";
            } else {
                document.getElementById("emailError").innerHTML = "Invalid email.";
            }

        });


        // Mobile Validation (input event)
        document.getElementById("mobile").addEventListener("input", function () {

            let mobile = this.value;

            if (/^\d{10}$/.test(mobile)) {
                document.getElementById("mobileError").innerHTML = "";
            } else {
                document.getElementById("mobileError").innerHTML = "Enter 10-digit mobile number.";
            }

        });


        // Membership Validation (change event)
        document.getElementById("plan").addEventListener("change", function () {

            if (this.value == "") {
                document.getElementById("planError").innerHTML = "Please select a plan.";
            } else {
                document.getElementById("planError").innerHTML = "";
            }

        });


        // Form Submission (submit event)
        document.getElementById("gymForm").addEventListener("submit", function (e) {

            e.preventDefault();

            if (
                document.getElementById("nameError").innerHTML == "" &&
                document.getElementById("ageError").innerHTML == "" &&
                document.getElementById("emailError").innerHTML == "" &&
                document.getElementById("mobileError").innerHTML == "" &&
                document.getElementById("plan").value != ""
            ) {

                document.getElementById("result").innerHTML = "Gym Admission Successful!";

            } else {

                document.getElementById("result").innerHTML = "";
                alert("Please correct the errors before submitting.");

            }

        });

    </script>

</body>

</html>
```

### Regular Expressions (Regex) Used

| Field | Regex Pattern | Purpose |
|---|---|---|
| Full Name | `/^[A-Za-z ]+$/` | Ensures only alphabetical characters and spaces are entered. |
| Email | `/^[^\s@]+@[^\s@]+\.[^\s@]+$/` | Basic email format validation (requires an `@` and a `.`). |
| Mobile Number | `/^\d{10}$/` | Ensures exactly 10 numeric digits are entered. |
| Age | Logic: `>= 16 && <= 60` | Validates numeric range (16 to 60). |

### Output
- Real-time validation errors appear as the user types (on `input`).
- Age validates when the user leaves the field (on `blur`).
- Form submission is blocked and an alert is shown if any errors remain.
- A success message appears upon successful submission of a valid form.

---

## Result / Conclusion

The task was completed successfully:

- **Task 8.1** demonstrated the use of Regular Expressions (`RegExp.test()`) in JavaScript to validate user input on a form. It handled multiple events (`input`, `blur`, `change`, `submit`) to provide real-time feedback, ensuring data integrity before form submission.
