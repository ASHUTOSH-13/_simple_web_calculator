document.getElementById('calculateButton').addEventListener('click', async () => {
  // Get form values
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  const operation = document.getElementById('operation').value;

  // Validate inputs
  if (isNaN(num1) || isNaN(num2)) {
    document.getElementById('result').textContent = 'Please enter valid numbers.';
    return;
  }

  // Prepare the API URL and body based on the operation
  const apiUrl = `https://simple-web-calculator.onrender.com/api/${operation}`;
  const body = {
    num1: num1, // Use `num1` and `num2` as expected by the backend
    num2: num2
  };

  try {
    // Make the POST request
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });

    // Parse the JSON response
    const data = await response.json();

    // Display the result or error
    if (data.result !== undefined) {
      document.getElementById('result').textContent = `${data.result}`;
    } else {
      document.getElementById('result').textContent = `Error: ${data.error || 'An error occurred'}`;
    }
  } catch (error) {
    console.error('Error:', error);
    document.getElementById('result').textContent = 'An error occurred';
  }
});
