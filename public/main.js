document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form')

    form.addEventListener('submit', function(event) {
        event.preventDefault()

        const selectedOption = document.getElementById('options').value
        const userInputValue = parseInt(document.getElementById('userInput').value)

        let result
        if (selectedOption === 'option1') {
            result = `20lbs or less. ${userInputValue} human minutes.`
        } else if (selectedOption === 'option2') {
            result = `21 to 50lbs. ${userInputValue} human minutes.`
        } else if (selectedOption === 'option3') {
            result = `50lbs or more. ${userInputValue} human minutes.`
        }

        outputContainer.innerHTML = `<h1>${result}</h1>`
    })
})