# SYMBIOSIS INSTITUTE OF TECHNOLOGY, NAGPUR
## For Soft Copy Submission

---

## Experiment / Case Study No.: Task 1 - JavaScript Implementation

### 1. Experiment Title:
**Student Registration System using Three Types of JavaScript Implementation**

---

### 2. Software/Tools Required:
- Text Editor (VS Code, Sublime Text, or Notepad++)
- Web Browser (Chrome, Firefox, Safari, or Edge)
- Git for version control
- GitHub for repository hosting

---

### 3. Experiment Program Code:

#### **File 1: index.html**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SIT Nagpur - Department of Computer Science</title>

    <!-- 3. EXTERNAL JAVASCRIPT LINK -->
    <!-- In a real project, you would save this as 'script.js' in the same folder -->
    <script src="script.js"></script>

    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 20px;
        }
        .container {
            max-width: 800px;
            margin: auto;
            background: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }
        h1 { color: #d32f2f; }
        .nav-link {
            display: inline-block;
            margin-top: 10px;
            color: #0056b3;
            text-decoration: none;
            font-weight: bold;
        }
        .nav-link:hover { text-decoration: underline; }
        
        input, button {
            padding: 8px;
            margin: 5px 0;
            width: 100%;
            box-sizing: border-box;
        }
        button {
            background-color: #d32f2f;
            color: white;
            border: none;
            cursor: pointer;
        }
        button:hover { background-color: #b71c1c; }
        
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }
        th, td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
        }
        th { background-color: #f2f2f2; }
    </style>

    <!-- 2. INTERNAL JAVASCRIPT -->
    <script>
        function addStudent() {
            // Get input values
            const name = document.getElementById('name').value;
            const roll = document.getElementById('roll').value;
            const course = document.getElementById('course').value;

            // Simple validation
            if(name === "" || roll === "") {
                alert("Please fill in all fields!");
                return;
            }

            // Create a new table row
            const table = document.getElementById('studentTable').getElementsByTagName('tbody')[0];
            const newRow = table.insertRow();

            // Insert cells
            const cell1 = newRow.insertCell(0);
            const cell2 = newRow.insertCell(1);
            const cell3 = newRow.insertCell(2);

            cell1.innerHTML = name;
            cell2.innerHTML = roll;
            cell3.innerHTML = course;

            // Clear inputs
            document.getElementById('name').value = "";
            document.getElementById('roll').value = "";
            document.getElementById('course').value = "";
        }
    </script>
</head>
<body>

    <div class="container">
        <h1>Department of Computer Science</h1>
        <p><strong>SIT Nagpur</strong> - Symbiosis Institute of Technology</p>
        
        <!-- Link to Student Information Page -->
        <a href="student_info.html" class="nav-link">Go to Student Information Page &rarr;</a>

        <hr>

        <h3>Student Registration</h3>
        
        <!-- 1. INLINE JAVASCRIPT -->
        <!-- The onclick attribute is inline JS -->
        <button onclick="alert('Welcome to SIT Nagpur!')">Click for Welcome Message</button>

        <div style="margin-top: 20px;">
            <input type="text" id="name" placeholder="Student Name">
            <input type="number" id="roll" placeholder="Roll Number">
            <input type="text" id="course" placeholder="Course (e.g., BCA, B.Tech)">
            <button onclick="addStudent()">Add Student</button>
        </div>

        <h3>Registered Students</h3>
        <table id="studentTable">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Roll No</th>
                    <th>Course</th>
                </tr>
            </thead>
            <tbody>
                <!-- Data will appear here -->
            </tbody>
        </table>
    </div>

</body>
</html>
```

#### **File 2: script.js**
```javascript
// script.js
// This file is linked in the <head> of the HTML
console.log("External JavaScript file loaded successfully.");

// You can add extra functions here that are called from the HTML
function externalGreeting() {
    return "Hello from the external file!";
}
```

---

### 4. Output:
**Program demonstrates three types of JavaScript implementation:**

1. **Inline JavaScript**: 
   - Uses `onclick` attribute in HTML button element
   - Executes `alert('Welcome to SIT Nagpur!')` when button is clicked
   - Located directly in HTML elements

2. **Internal JavaScript** (in `<script>` tag):
   - `addStudent()` function validates form inputs
   - Dynamically creates table rows
   - Clears input fields after submission
   - Located within `<head>` section of HTML

3. **External JavaScript** (script.js file):
   - Separate `.js` file linked via `<script src="script.js"></script>`
   - Contains `externalGreeting()` function
   - Logs confirmation message to console
   - Promotes code reusability and organization

**Features:**
- Student registration form with Name, Roll Number, and Course fields
- Input validation (checks for empty fields)
- Dynamic table generation
- Responsive design with CSS styling
- Department branding for SIT Nagpur

---

### 5. Case Study Title:
**Three Methods of JavaScript Integration in Web Development**

---

### 6. Case Study Program Code:
**Objectives:**
- Understand inline, internal, and external JavaScript methods
- Learn DOM manipulation using JavaScript
- Implement form validation and dynamic content generation
- Apply CSS styling with responsive design

**Key Learning Outcomes:**
- How JavaScript executes in different contexts
- DOM manipulation and event handling
- Form data processing and validation
- Best practices for code organization

---

### 7. Output:

#### **Screenshots:**

**Screenshot 1: Initial Page Load**
![Initial page load showing registration form](https://github.com/madhura-rew/Javascript/raw/main/task%201/screenshot1.png)
- Web page displays "Department of Computer Science" header with SIT Nagpur branding
- Navigation link to Student Information Page
- Welcome button ready for interaction
- Empty Student Registration form with three input fields

**Screenshot 2: Welcome Alert (Inline JavaScript)**
![Welcome alert popup demonstrating inline JavaScript](https://github.com/madhura-rew/Javascript/raw/main/task%201/screenshot2.png)
- Welcome button triggers alert popup with "Welcome to SIT Nagpur!" message
- Demonstrates inline JavaScript execution via `onclick` attribute
- User interaction with the alert confirmation

**Screenshot 3: Student Registration with Dynamic Data**
![Registered student data in table demonstrating internal JavaScript](https://github.com/madhura-rew/Javascript/raw/main/task%201/screenshot3.png)
- Registered Students table displays dynamically added entries
- Shows student entry: Name: "Madhura", Roll No: "37", Course: "Btech"
- Demonstrates successful form validation and dynamic DOM manipulation
- Input fields cleared after submission (Internal JavaScript)
- Console displays "External JavaScript file loaded successfully." message (External JavaScript)

---

### 8. Result/Conclusion:

This experiment successfully demonstrates the three fundamental approaches to implementing JavaScript in web development:

**Inline JavaScript** provides quick interactivity for simple actions but lacks reusability and maintainability.

**Internal JavaScript** (in `<script>` tags) allows for better organization and is suitable for single-page applications with limited functionality.

**External JavaScript** (separate .js files) is the industry standard for scalable, maintainable applications, promoting code reuse and separation of concerns.

The student registration system successfully demonstrates:
- Input validation and error handling
- Dynamic DOM manipulation
- Data collection and presentation in tabular format
- Professional UI/UX design with responsive styling

This project reinforces best practices in web development and provides a foundation for building more complex applications.

---

**File Path:** `/task 1/`
**Repository:** madhura-rew/Javascript
**Commit OID:** db2e51171a7d0e61b14518561ee031ff3aa5f6c5

---
