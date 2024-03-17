// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
window.onload = addNewRow();

function addNewRow() {
    // Create new elements
    const div = document.createElement('div');
    const numberDiv = document.createElement('div');
    const scoreNumber = document.createElement('p');
    const scoreLabel = document.createElement('label');
    const scoreInput = document.createElement('input');
    const ratingLabel = document.createElement('label');
    const ratingInput = document.createElement('input');
    const slopeLabel = document.createElement('label');
    const slopeInput = document.createElement('input');
    const deleteButton = document.createElement('button');

    // Check to make sure the number of scores entered is 20 or less
    const scoreLineCount = document.getElementsByClassName('score-line');
    console.log(scoreLineCount.length + 1);

    if (scoreLineCount.length >= 20) {
        alert('Handicap Index only takes your past 20 scores into account.');
        return;
    };

    var classId = 'score-line' + (scoreLineCount.length);

    // Set attributes and text content
    div.className = 'score-line';
    div.id = classId;
    scoreNumber.textContent = (scoreLineCount.length + 1) + '.';
    numberDiv.className = 'numberDiv';
    scoreLabel.className = 'input-label';
    ratingLabel.className = 'input-label';
    slopeLabel.className = 'input-label';
    scoreLabel.textContent = 'Score:';
    ratingLabel.textContent = 'Course Rating:';
    slopeLabel.textContent = 'Slope:';
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function () {
        deleteScoreLine(classId);
    }; 

    scoreInput.type = 'text';
    scoreInput.id = 'score' + (scoreLineCount.length);
    ratingInput.type = 'text';
    ratingInput.id = 'rating' + (scoreLineCount.length);
    slopeInput.type = 'text';
    slopeInput.id = 'slope' + (scoreLineCount.length);

    slopeInput.value = '113';
    ratingInput.value = '72';

    // Append elements to the container
    numberDiv.appendChild(scoreNumber);
    div.appendChild(numberDiv);
    div.appendChild(scoreLabel);
    div.appendChild(scoreInput);
    div.appendChild(ratingLabel);
    div.appendChild(ratingInput);
    div.appendChild(slopeLabel);
    div.appendChild(slopeInput);
    div.appendChild(deleteButton);

    // Append the new line to the container
    document.getElementById('scores-container').appendChild(div);
    scoreInput.focus();
}

function calculateHandicap() {

    let differentialsArray = [];

    // Loop through inputs to gather data for each score-line and calculate index
    for (let i = 0; i < 20; i++) {
        if (document.getElementById('score' + i)) {
            //get inputs for each score line
            var score = document.getElementById('score' + i).value;
            var rating = document.getElementById('rating' + i).value;
            var slope = document.getElementById('slope' + i).value;

            if (!score || !rating || !slope) {
                alert('All fields must contain values.');
                return;
            }

            if (slope < 55 || slope > 155) {
                alert('Slope rating must be between 55 and 155. See slope rating number ' + (i + 1) + '.');
                var problemSlope = document.getElementById('slope' + i);
                problemSlope.focus();
                return;
            }
            if (rating < 45 || rating > 95) {
                if (confirm('Realistic course ratings should be around 60-80. The course rating for score #' + (i + 1) + ' is ' + rating + '. Is this OK?')) {
                    console.log('User confirmed accurate course ratings.');
                }
                else {
                    var problemRating = document.getElementById('rating' + i);
                    problemRating.focus();
                    return;
                }
            }
            var differential = ((score - rating) * 113) / slope;

            differentialsArray.push(differential);
        }
    }

    console.log(differentialsArray);

    if (differentialsArray.length == 20) {
        //sort the array in descending order
        let sortedArray = differentialsArray.sort((a, b) => a - b);

        //extract the first 8 differentials which will be the lowest 8
        let lowest8 = sortedArray.slice(0, 8);

        //average the lowest 8 differentials from the array
        let sum = lowest8.reduce((acc, current) => acc + current, 0);
        let average = sum / 8;
        let roundedHci = average.toFixed(2);

        let handicap = document.getElementById('handicap');
        handicap.textContent = 'Your handicap is: ' + roundedHci;
    }
    if (differentialsArray.length == 19) {
        let sortedArray = differentialsArray.sort((a, b) => a - b);

        let lowest7 = sortedArray.slice(0, 7);

        let sum = lowest7.reduce((acc, current) => acc + current, 0);
        let average = sum / 7;
        let roundedHci = average.toFixed(2);

        let handicap = document.getElementById('handicap');
        handicap.textContent = 'Your handicap is: ' + roundedHci;
    }
    if (differentialsArray.length == 18 || differentialsArray.length == 17) {
        let sortedArray = differentialsArray.sort((a, b) => a - b);

        let lowest6 = sortedArray.slice(0, 6);

        let sum = lowest6.reduce((acc, current) => acc + current, 0);
        let average = sum / 6;
        let roundedHci = average.toFixed(2);

        let handicap = document.getElementById('handicap');
        handicap.textContent = 'Your handicap is: ' + roundedHci;
    }
    if (differentialsArray.length == 16 || differentialsArray.length == 15) {
        let sortedArray = differentialsArray.sort((a, b) => a - b);

        let lowest5 = sortedArray.slice(0, 5);

        let sum = lowest5.reduce((acc, current) => acc + current, 0);
        let average = sum / 5;
        let roundedHci = average.toFixed(2);

        let handicap = document.getElementById('handicap');
        handicap.textContent = 'Your handicap is: ' + roundedHci;
    }
    if (differentialsArray.length >= 12 && differentialsArray.length <= 14) {
        let sortedArray = differentialsArray.sort((a, b) => a - b);

        let lowest4 = sortedArray.slice(0, 4);

        let sum = lowest4.reduce((acc, current) => acc + current, 0);
        let average = sum / 4;
        let roundedHci = average.toFixed(2);

        let handicap = document.getElementById('handicap');
        handicap.textContent = 'Your handicap is: ' + roundedHci;
    }
    if (differentialsArray.length >= 9 && differentialsArray.length <= 11) {
        let sortedArray = differentialsArray.sort((a, b) => a - b);

        let lowest3 = sortedArray.slice(0, 3);

        let sum = lowest3.reduce((acc, current) => acc + current, 0);
        let average = sum / 3;
        let roundedHci = average.toFixed(2);

        let handicap = document.getElementById('handicap');
        handicap.textContent = 'Your handicap is: ' + roundedHci;
    }
    if (differentialsArray.length == 7 || differentialsArray.length == 8 || differentialsArray.length == 6) {
        let sortedArray = differentialsArray.sort((a, b) => a - b);

        let lowest2 = sortedArray.slice(0, 2);

        let sum = lowest2.reduce((acc, current) => acc + current, 0);
        let average = sum / 2;
        let roundedHci = average.toFixed(2);

        let handicap = document.getElementById('handicap');

        if (differentialsArray.length == 6) {
            handicap.textContent = 'Your handicap is: ' + (roundedHci - 1);
        }
        else { handicap.textContent = 'Your handicap is: ' + roundedHci; }
    }
    if (differentialsArray.length == 5) {
        let sortedArray = differentialsArray.sort((a, b) => a - b);

        let lowest1 = sortedArray.slice(0, 1);

        let sum = lowest1.reduce((acc, current) => acc + current, 0);
        let average = sum / 1;
        let roundedHci = average.toFixed(2);

        let handicap = document.getElementById('handicap');
        handicap.textContent = 'Your handicap is: ' + roundedHci;
    }
    if (differentialsArray.length == 4 || differentialsArray.length == 3) {
        let sortedArray = differentialsArray.sort((a, b) => a - b);

        let lowest1 = sortedArray.slice(0, 1);

        let sum = lowest1.reduce((acc, current) => acc + current, 0);
        let average = sum / 1;

        let handicap = document.getElementById('handicap');

        if (differentialsArray.length == 4) {
            handicap.textContent = 'Your handicap is: ' + (average - 1).toFixed(2);
        }
        else { handicap.textContent = 'Your handicap is: ' + (average - 2).toFixed(2); }
    }
    if (differentialsArray.length < 3) {
        alert('A minimum of 3 scores are required.');
    }
}

function clearScores() {
    
    location.reload();
}

function deleteScoreLine(classId) {
    var scoreLine = document.getElementById(classId);
    scoreLine.remove();

    // Convert the collection to an array to iterate over a copy
    var remainingScoreLines = Array.from(document.getElementsByClassName('score-line'));

    // Loop through the copied array
    remainingScoreLines.forEach((currentScoreLine, i) => {
        var currentId = 'score-line' + i;

        // Update the id of the score-line
        currentScoreLine.id = currentId;

        // Update the id of the input elements within the score-line
        var inputs = currentScoreLine.querySelectorAll('input');
        inputs.forEach(input => {
            input.id = input.id.replace(/\d+$/, i);
        });

        // Update the p elements with correct score line #s
        var numbers = currentScoreLine.querySelectorAll('p');
        numbers.forEach(p => {
            p.innerText = p.innerText.replace(/\d+\./, ((i + 1) + '.'));
        });

        // Update the id of the delete button
        var deleteButton = currentScoreLine.querySelector('button');
        deleteButton.onclick = function () {
            deleteScoreLine(currentId);
        }
    });
}