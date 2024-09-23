document.getElementById('predict-btn').addEventListener('click', function() {
    const dragonCard = parseInt(document.getElementById('dragon').value);
    const tigerCard = parseInt(document.getElementById('tiger').value);

    if (!dragonCard || !tigerCard || dragonCard < 1 || dragonCard > 13 || tigerCard < 1 || tigerCard > 13) {
        alert("Please enter valid card numbers between 1 and 13.");
        return;
    }

    fetch('DRAGON VS TIGER PREDICTIOR.csv')
        .then(response => response.text())
        .then(data => {
            const rows = data.split('\n').map(row => row.split(','));
            
            // Iterate through the CSV rows to find a match
            for (let i = 0; i < rows.length; i++) {
                const dragonCSV = parseInt(rows[i][0].trim());
                const tigerCSV = parseInt(rows[i][1].trim());
                const resultCSV = rows[i][2].trim();

                if (dragonCSV === dragonCard && tigerCSV === tigerCard) {
                    document.getElementById('result').textContent = `The winner is: ${resultCSV}`;
                    return;
                }
            }

            document.getElementById('result').textContent = 'No result found for these card numbers.';
        })
        .catch(error => {
            console.error("Error loading CSV file:", error);
            document.getElementById('result').textContent = 'Error loading data.';
        });
});
