// Function to fetch CSV file and check the dragon and tiger numbers
function predictWinner() {
    // Get the input values
    const dragonNumber = document.getElementById('dragonCard').value;
    const tigerNumber = document.getElementById('tigerCard').value;

    // Fetch the CSV file
    fetch('DRAGON VS TIGER PREDICTIOR.csv')
        .then(response => response.text())
        .then(data => {
            // Parse the CSV data
            const lines = data.split('\n');
            let found = false;

            // Loop through the CSV data to find the match
            for (let i = 0; i < lines.length; i++) {
                const row = lines[i].split(',');
                const dragon = row[0];
                const tiger = row[1];
                const result = row[2];

                // Check if the input matches any row in the CSV
                if (dragon == dragonNumber && tiger == tigerNumber) {
                    document.getElementById('winner').innerText = "The winner is: " + result;
                    found = true;
                    break;
                }
            }

            // If no match is found, display "Wait For Next Round!!!"
            if (!found) {
                document.getElementById('winner').innerText = "Wait For Next Round!!!";
            }
        })
        .catch(error => {
            console.error('Error fetching or parsing the CSV file:', error);
        });
}

// Add event listener to the button
document.getElementById('predictButton').addEventListener('click', predictWinner);
