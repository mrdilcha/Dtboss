// Predefined pattern of Dragon vs Tiger outcomes
const pattern = [
    'Tiger', 'Dragon', 'Tiger', 'Tiger', 'Dragon', 'Tiger', 'Tiger', 'Tiger', 'Tiger', 'Dragon',
    'Tiger', 'Tiger', 'Dragon', 'Tiger', 'Dragon', 'Dragon', 'Tiger', 'Tiger', 'Dragon', 'Dragon',
    'Dragon', 'Tiger', 'Tiger', 'Tiger', 'Dragon', 'Tiger', 'Tiger', 'Tiger', 'Tiger', 'Dragon',
    'Dragon', 'Tiger', 'Tiger', 'Tiger', 'Dragon', 'Dragon', 'Dragon', 'Dragon', 'Tiger', 'Dragon',
    'Dragon', 'Tiger', 'Tiger', 'Tiger', 'Dragon', 'Tiger', 'Dragon', 'Dragon', 'Dragon', 'Dragon'
];

// Function to calculate prediction based on the card numbers
function calculatePrediction(dragonCard, tigerCard) {
    const total = dragonCard + tigerCard;
    const index = total % pattern.length; // Using modulo to cycle through the pattern
    return pattern[index];
}

document.getElementById('predict-button').addEventListener('click', function() {
    const dragonCard = parseInt(document.getElementById('dragon-card').value);
    const tigerCard = parseInt(document.getElementById('tiger-card').value);

    if (isNaN(dragonCard) || isNaN(tigerCard)) {
        document.getElementById('result').textContent = "Please enter valid numbers.";
    } else {
        const prediction = calculatePrediction(dragonCard, tigerCard);
        document.getElementById('result').textContent = "Prediction: " + prediction;
    }
});
