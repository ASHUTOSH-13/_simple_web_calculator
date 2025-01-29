const add = (req, res) => {
  console.log(req.body); // Debugging: Log the incoming request body
  const { num1, num2 } = req.body;

  // Convert input values to numbers
  const number1 = parseFloat(num1);
  const number2 = parseFloat(num2);

  if (isNaN(number1) || isNaN(number2)) {
    return res.status(400).json({ error: "Invalid input. num1 and num2 must be numbers" });
  }

  const result = number1 + number2;
  res.json({ result });
};

const subtract = (req, res) => {
  console.log(req.body); // Debugging: Log the incoming request body
  const { num1, num2 } = req.body;

  const number1 = parseFloat(num1);
  const number2 = parseFloat(num2);

  if (isNaN(number1) || isNaN(number2)) {
    return res.status(400).json({ error: "Invalid input. num1 and num2 must be numbers" });
  }

  const result = number1 - number2;
  res.json({ result });
};

const multiply = (req, res) => {
  console.log(req.body); // Debugging: Log the incoming request body
  const { num1, num2 } = req.body;

  const number1 = parseFloat(num1);
  const number2 = parseFloat(num2);

  if (isNaN(number1) || isNaN(number2)) {
    return res.status(400).json({ error: "Invalid input. num1 and num2 must be numbers" });
  }

  const result = number1 * number2;
  res.json({ result });
};

const divide = (req, res) => {
  console.log(req.body); // Debugging: Log the incoming request body
  const { num1, num2 } = req.body;

  const number1 = parseFloat(num1);
  const number2 = parseFloat(num2);

  if (isNaN(number1) || isNaN(number2)) {
    return res.status(400).json({ error: "Invalid input. num1 and num2 must be numbers" });
  }

  if (number2 === 0) {
    return res.status(400).json({ error: "Division by zero is not allowed" });
  }

  const result = number1 / number2;
  res.json({ result });
};

module.exports = { add, subtract, multiply, divide };
