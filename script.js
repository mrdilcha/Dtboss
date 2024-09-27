// Load CSV data from local repository and parse it
async function loadCSV() {
    const response = await fetch('./generated_dragon_vs_tiger_1000_rows.csv');
    const data = await response.text();

    const rows = data.split('\n').map(row => row.split(','));
    return rows.slice(1);  // Remove the header row
}

// Predict the winner based on user input of Dragon and Tiger cards
function predictWinner(dragonCard, tigerCard, data) {
    const foundResult = data.find(row => parseInt(row[0]) === dragonCard && parseInt(row[1]) === tigerCard);
    if (foundResult) {
        return foundResult[2];  // Return the "Win" column (Dragon or Tiger)
    } else {
        return 'Wait For Next Round!';
    }
}

// Start the prediction process
async function startPrediction() {
    const dragonCard = parseInt(document.getElementById('dragon-card').value);
    const tigerCard = parseInt(document.getElementById('tiger-card').value);

    if (!dragonCard || !tigerCard) {
        document.getElementById('result').textContent = '► Result: Please enter both cards!';
        return;
    }

    // Load the CSV data
    const data = await loadCSV();

    // Predict the winner
    const result = predictWinner(dragonCard, tigerCard, data);
    document.getElementById('result').textContent = `► Result: ${result}`;
}

// Create random floating nodes
for (let i = 0; i < 20; i++) {
    const node = document.createElement('div');
    node.classList.add('node');
    node.style.left = `${Math.random() * 100}%`;
    node.style.top = `${Math.random() * 100}%`;
    document.body.appendChild(node);
}
