document.getElementById('calculateBtn').addEventListener('click', function() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const weightUnit = document.getElementById('weightUnit').value;
    const heightUnit = document.getElementById('heightUnit').value;
  
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
      document.getElementById('resultContainer').innerHTML = 'Please enter valid weight and height.';
      return;
    }
  
    if (weightUnit === 'lbs') {
      // Convert weight from pounds to kilograms
      weight = weight * 0.453592;
    }
  
    if (heightUnit === 'in') {
      // Convert height from inches to centimeters
      height = height * 2.54;
    }
  
    // Calculate BMI
    const bmi = weight / ((height / 100) * (height / 100));
  
    // Determine BMI category
    let category;
    if (bmi < 18.5) {
      category = 'Underweight';
    } else if (bmi < 24.9) {
      category = 'Normal weight';
    } else if (bmi < 29.9) {
      category = 'Overweight';
    } else {
      category = 'Obese';
    }
  
    // Display the result
    document.getElementById('resultContainer').innerHTML = `Your BMI: ${bmi.toFixed(2)} (${category})`;
  });
  