// Lesson 1: Hello World
function startHelloWorldLesson() {
    const explanationArea = document.getElementById('helloWorldExplanation');
    
    explanationArea.innerHTML = `
        <h4>Step 1: What is "Hello, World!"?</h4>
        <p>In Python, we use the <code>print()</code> function to output text. Here, we print the phrase "Hello, World!" to the console. This is often the first program in any language.</p>
        
        <h4>Step 2: Why use <code>print()</code>?</h4>
        <p>The <code>print()</code> function allows us to display messages to the user or see the output of our code.</p>
        
        <h4>Step 3: Code Example</h4>
        <p><code>print("Hello, World!")</code></p>
    `;
}

// Lesson 2: Variables
function startVariablesLesson() {
    const explanationArea = document.getElementById('variablesExplanation');
    
    explanationArea.innerHTML = `
        <h4>Step 1: What are Variables?</h4>
        <p>Variables in Python store data that can be used later. Think of them as containers for values. For example: <code>x = 10</code></p>

        <h4>Step 2: Types of Variables</h4>
        <p>Python has different types of variables, like integers (<code>x = 10</code>), strings (<code>name = "Alice"</code>), and floats (<code>price = 9.99</code>).</p>

        <h4>Step 3: Code Example</h4>
        <p><code>x = 10<br>y = 20<br>print(x + y)</code></p>
    `;
}

// Lesson 3: Loops
function startLoopLesson() {
    const explanationArea = document.getElementById('loopExplanation');
    
    explanationArea.innerHTML = `
        <h4>Step 1: What is a Loop?</h4>
        <p>A loop in Python allows you to repeat a block of code multiple times. For example, a <code>for</code> loop can iterate through a range of numbers.</p>

        <h4>Step 2: Why use Loops?</h4>
        <p>Loops are useful for repetitive tasks, like printing each item in a list.</p>

        <h4>Step 3: Code Example</h4>
        <p><code>for i in range(1, 6):<br>&nbsp;&nbsp;print(i)</code></p>
    `;
}

// Exercise Check Functions
function checkExercise1() {
    const userCode = document.getElementById('exercise1Input').value;
    const feedback = document.getElementById('exercise1Feedback');
    
    if (userCode.includes("print") && userCode.includes('"') && userCode.includes('(') && userCode.includes(')')) {
        feedback.textContent = "Correct! Your code prints text to the console.";
        feedback.className = "feedback correct";
    } else {
        feedback.textContent = "Try again. Make sure you're using the print() function correctly.";
        feedback.className = "feedback incorrect";
    }
}

function checkExercise2() {
    const userCode = document.getElementById('exercise2Input').value;
    const feedback = document.getElementById('exercise2Feedback');
    
    if (userCode.includes("x") && userCode.includes("y") && userCode.includes("+") && userCode.includes("print")) {
        feedback.textContent = "Great job! You used variables and printed their sum.";
        feedback.className = "feedback correct";
    } else {
        feedback.textContent = "Try again. Make sure to define variables and print their sum.";
        feedback.className = "feedback incorrect";
    }
}

function checkExercise3() {
    const userCode = document.getElementById('exercise3Input').value;
    const feedback = document.getElementById('exercise3Feedback');
    
    if (userCode.includes("for") && userCode.includes("range") && userCode.includes("print")) {
        feedback.textContent = "Well done! Your loop prints the correct numbers.";
        feedback.className = "feedback correct";
    } else {
        feedback.textContent = "Try again. Make sure you're using a for loop with the range function.";
        feedback.className = "feedback incorrect";
    }
}
