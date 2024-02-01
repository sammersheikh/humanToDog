document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form')
    
    form.addEventListener('submit', function(event) {
        event.preventDefault()

        const dogAge = document.getElementById('age').value
        const userInputValue = document.getElementById('userInput').value.trim()

        if (userInputValue === "") {
            alert('Please enter a number in the input field.')
            return;
        }
        const userInputNumber = parseInt(userInputValue);

        // Check if userInputNumber is a valid number
        if (isNaN(userInputNumber)) {
            alert('Please enter a valid number in the input field.');
            return; // Prevent further execution if input is not a valid number
        }

        let final = convertToDogMinutes(userInputNumber, dogAge)

        let result = `${dogAge} years old. ${userInputValue} human minutes. ${final}`
        
        
        outputContainer.innerHTML = `<h1>${result}</h1>`
    })

    const resetButton = form.querySelector('input[type="reset"]');
    resetButton.addEventListener('click', function() {
        // Clear the text in the output container
        outputContainer.innerHTML = '';
    });

    function convertToDogMinutes(userInputNumber, dogAge) {
        let dogMinutes = 0

        for (let i = 1; i <= dogAge; i++) {
            let conversionFactor

            if (i === 1) {
                conversionFactor = 15
            } else if (i === 2) {
                conversionFactor = 9
            } else {
                conversionFactor = 4.5
            }
            dogMinutes += userInputNumber * conversionFactor
        }
        return dogMinutes
    }
})