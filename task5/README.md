# Experiment/ Case Study No.: 5

---

## TASK 1: Min/Max Number Finder

### 1. Experiment Title:
JavaScript program to find the minimum and maximum numbers from a given array of user inputs.

### 2. Software/Tools Required:
- HTML5, CSS3, JavaScript (ES6)
- Code Editor: Visual Studio Code
- Web Browser: Google Chrome / Mozilla Firefox
- GitHub Repository: madhura-rew/Javascript (task5/minmax.html)

### 3. Experiment Program Code:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Min/Max Number Finder</title>
</head>
<body>
    <h2>Find Min and Max Numbers</h2>
    <label>Enter numbers separated by commas (e.g., 10, 5, 20, 3): </label>
    <input type="text" id="numbers" placeholder="10, 5, 20, 3">
    <button onclick="findMinMax()">Find Min & Max</button>
    <p id="result"></p>

    <script>
        function findMinMax() {
            const input = document.getElementById("numbers").value.trim();
            const result = document.getElementById("result");

            if (input === "") {
                result.innerHTML = "Please enter some numbers.";
                return;
            }

            // Split by comma and convert to numbers
            const nums = input.split(",").map(n => parseFloat(n.trim())).filter(n => !isNaN(n));

            if (nums.length === 0) {
                result.innerHTML = "No valid numbers found. Please enter only numeric values.";
                return;
            }

            const min = Math.min(...nums);
            const max = Math.max(...nums);

            result.innerHTML = `
                <strong>Input Numbers:</strong> ${nums.join(", ")}<br>
                <strong>Minimum:</strong> ${min}<br>
                <strong>Maximum:</strong> ${max}
            `;
        }
    </script>
</body>
</html>
```
## 4. output
<img width="1041" height="725" alt="Screenshot 2026-09-21 162619" src="https://github.com/user-attachments/assets/acf10fb2-d631-4d9b-aeaa-45a5f2ca9a52" />

## 5. case study title:
Interactive Shopping Cart using JavaScript array operations, DOM manipulation, and local storage.
## 6. Case Study Program Code:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Shopping Cart System</title>
</head>
<body>
    <h2>Shopping Cart</h2>
    <div id="productForm">
        <label>Product Name: </label>
        <input type="text" id="productName"><br><br>
        
        <label>Price (₹): </label>
        <input type="number" id="price" min="0" step="0.01"><br><br>
        
        <label>Quantity: </label>
        <input type="number" id="quantity" min="1" value="1"><br><br>
        
        <button onclick="addToCart()">Add to Cart</button>
    </div>

    <hr>
    
    <h3>Cart Items</h3>
    <table border="1" cellpadding="8" style="width:100%">
        <tr>
            <th>Product Name</th>
            <th>Price (₹)</th>
            <th>Quantity</th>
            <th>Subtotal (₹)</th>
            <th>Action</th>
        </tr>
        <tbody id="cartItems"></tbody>
    </table>

    <h4>Total Amount: ₹<span id="totalAmount">0.00</span></h4>
    <button onclick="clearCart()">Clear Cart</button>

    <script>
        let cart = [];

        function addToCart() {
            const name = document.getElementById("productName").value.trim();
            const price = parseFloat(document.getElementById("price").value);
            const quantity = parseInt(document.getElementById("quantity").value);

            if (!name || isNaN(price) || price <= 0 || isNaN(quantity) || quantity < 1) {
                alert("Please enter valid product details.");
                return;
            }

            const subtotal = price * quantity;
            cart.push({ name, price, quantity, subtotal });

            // Save to localStorage
            localStorage.setItem("shoppingCart", JSON.stringify(cart));

            renderCart();
            document.getElementById("productName").value = "";
            document.getElementById("price").value = "";
            document.getElementById("quantity").value = "1";
        }

        function removeFromCart(index) {
            cart.splice(index, 1);
            localStorage.setItem("shoppingCart", JSON.stringify(cart));
            renderCart();
        }

        function clearCart() {
            cart = [];
            localStorage.removeItem("shoppingCart");
            renderCart();
        }

        function renderCart() {
            const tbody = document.getElementById("cartItems");
            const totalSpan = document.getElementById("totalAmount");
            tbody.innerHTML = "";
            
            let total = 0;

            cart.forEach((item, index) => {
                const row = tbody.insertRow();
                row.insertCell(0).textContent = item.name;
                row.insertCell(1).textContent = item.price.toFixed(2);
                row.insertCell(2).textContent = item.quantity;
                row.insertCell(3).textContent = item.subtotal.toFixed(2);
                
                const deleteCell = row.insertCell(4);
                const deleteBtn = document.createElement("button");
                deleteBtn.textContent = "Remove";
                deleteBtn.style.color = "red";
                deleteBtn.onclick = () => removeFromCart(index);
                deleteCell.appendChild(deleteBtn);

                total += item.subtotal;
            });

            totalSpan.textContent = total.toFixed(2);
        }

        // Load cart on page load
        window.onload = function() {
            const savedCart = localStorage.getItem("shoppingCart");
            if (savedCart) {
                cart = JSON.parse(savedCart);
                renderCart();
            }
        };
    </script>
</body>
</html>
```
## 7. output
<img width="1005" height="890" alt="Screenshot 2026-09-21 162658" src="https://github.com/user-attachments/assets/2262d619-df1e-4160-a14f-481ffdb9c699" />

## 8. Result/Conclusion:
Both programs were successfully designed, executed and tested in the browser. The Min/Max Number Finder demonstrates array operations, Math.min() and Math.max() functions, and input parsing techniques. The Shopping Cart System demonstrates dynamic DOM manipulation, array management, event handling, local storage for persistence, and real-time calculation of totals. These experiments showcase practical applications of JavaScript in building interactive web applications with data persistence and user-friendly interfaces.

