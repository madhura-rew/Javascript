# Experiment/ Case Study No.: 3

## 1. Experiment Title:
JavaScript Web Applications - Grade Calculator and Password Validator

## 2. Software/Tools Required:
- Web Browser (Chrome, Firefox, or Edge)
- Code Editor (VS Code, Notepad++, or similar)
- File System for saving HTML files

## 3. Experiment Program Code:

### Task 1: Grade Calculator System (gradingsystem.html)
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Grade Calculator System</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 600px;
            margin: 50px auto;
            padding: 20px;
            background-color: #f5f5f5;
        }
        .container {
            background-color: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }
        input, select {
            width: 100%;
            padding: 10px;
            margin: 10px 0;
            border: 1px solid #ddd;
            border-radius: 5px;
        }
        button {
            background-color: #4CAF50;
            color: white;
            padding: 12px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            width: 100%;
        }
        button:hover {
            background-color: #45a049;
        }
        #result {
            margin-top: 20px;
            padding: 15px;
            background-color: #e7f3fe;
            border-left: 4px solid #2196F3;
            border-radius: 3px;
            display: none;
        }
    </style>
</head>
<body>
    <div class="container">
        <h2>🎓 Grade Calculator System</h2>
        <label for="name">Student Name:</label>
        <input type="text" id="name" placeholder="Enter your name">
        
        <label for="prn">PRN Number:</label>
        <input type="text" id="prn" placeholder="Enter PRN number">
        
        <label for="file">File Path:</label>
        <input type="text" id="file" placeholder="Enter file path">
        
        <label for="marks">Marks Obtained (0-100):</label>
        <input type="number" id="marks" min="0" max="100" placeholder="Enter marks">
        
        <button onclick="calculateGrade()">Calculate Grade</button>
        
        <div id="result"></div>
    </div>

    <script>
        function calculateGrade() {
            const name = document.getElementById('name').value;
            const prn = document.getElementById('prn').value;
            const file = document.getElementById('file').value;
            const marks = parseFloat(document.getElementById('marks').value);
            
            if (!name || !prn || !file || isNaN(marks)) {
                alert('Please fill all fields!');
                return;
            }
            
            if (marks < 0 || marks > 100) {
                alert('Marks must be between 0 and 100!');
                return;
            }
            
            let grade, message;
            
            if (marks >= 90) {
                grade = 'A+';
                message = 'Excellent! Outstanding performance.';
            } else if (marks >= 80) {
                grade = 'A';
                message = 'Very Good! Great job.';
            } else if (marks >= 70) {
                grade = 'B';
                message = 'Good! Keep it up.';
            } else if (marks >= 60) {
                grade = 'C';
                message = 'Average. Can improve.';
            } else if (marks >= 50) {
                grade = 'D';
                message = 'Pass. Needs more effort.';
            } else {
                grade = 'F';
                message = 'Fail. Please try again.';
            }
            
            const resultDiv = document.getElementById('result');
            resultDiv.style.display = 'block';
            resultDiv.innerHTML = `
                <h3>📊 Results</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>PRN:</strong> ${prn}</p>
                <p><strong>File Path:</strong> ${file}</p>
                <p><strong>Marks:</strong> ${marks}/100</p>
                <p><strong>Grade:</strong> ${grade}</p>
                <p><strong>Note:</strong> ${message}</p>
            `;
        }
    </script>
</body>
</html>
```
## 4. Output
## 5. Case Study Title:
Client-side password validation using JavaScript string methods and regular expressions.
## 6. Case Study Program Code:
``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Password Validator</title>
</head>
<body>
    <h2>Password Validation System</h2>
    <label>Enter Password: </label>
    <input type="password" id="pwd">
    <button onclick="validatePassword()">Validate</button>
    <ul id="output"></ul>

    <script>
        function validatePassword() {
            const pwd = document.getElementById("pwd").value;
            const out = document.getElementById("output");
            out.innerHTML = "";

            const rules = [
                { check: pwd.length >= 8, msg: "At least 8 characters long" },
                { check: /[A-Z]/.test(pwd), msg: "Contains an uppercase letter" },
                { check: /[a-z]/.test(pwd), msg: "Contains a lowercase letter" },
                { check: /[0-9]/.test(pwd), msg: "Contains a digit" },
                { check: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(pwd), msg: "Contains a special character" }
            ];

            let passed = 0;
            rules.forEach(rule => {
                const li = document.createElement("li");
                li.textContent = (rule.check ? "✔ " : "✘ ") + rule.msg;
                li.style.color = rule.check ? "green" : "red";
                out.appendChild(li);
                if (rule.check) passed++;
            });

            const summary = document.createElement("li");
            summary.innerHTML = passed === rules.length
                ? "<b>Strong Password ✔</b>"
                : "<b>Weak Password ✘</b>";
            out.appendChild(summary);
        }
    </script>
</body>
</html>
```
## 7. output
## 8. Result/conclusion
Both programs were successfully designed, executed and tested in the browser. The Grade Evaluation System correctly maps numeric marks to letter grades using conditional branching and input validation, while the Password Validation System verifies strength criteria using regular expressions and provides real-time visual feedback. These experiments demonstrate the use of DOM manipulation, event handling, conditionals and string methods in client-side JavaScript.

