
//  Write the  Function that will be used to calculate the pay based on check-in and check-out times
function calculatePay() {
    // Get the check-in and check-out input values
    const checkInValue = document.getElementById('checkIn').value;
    const checkOutValue = document.getElementById('checkOut').value;

    // Convert input values to Date objects
    const checkInTime = new Date(checkInValue);
    const checkOutTime = new Date(checkOutValue);

    // Calculate the time worked in milliseconds
    const timeWorkedMs = checkOutTime - checkInTime;

    // Convert milliseconds to hours
    const hoursWorked = timeWorkedMs / (1000 * 60 * 60);

    // Assuming a fixed hourly rate, you can customize this rate
    const hourlyRate = 15;

    // Calculate the total pay
    const totalPay = hoursWorked * hourlyRate;

    // Display the result
    const resultElement = document.getElementById('result');
    resultElement.innerText = `Total Hours Worked: ${hoursWorked.toFixed(2)} hours\nTotal Pay: $${totalPay.toFixed(2)}`;
}