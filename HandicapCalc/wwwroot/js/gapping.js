function collectClubData() {
    // create an empty object to store club data
    const clubData = {};
    // iterate through each club div and collect input values
    document.querySelectorAll('.club').forEach(function (clubDiv) {
        const clubName = clubDiv.querySelector('label').textContent; //remove white space on inputs? validation?
        const clubYardage = clubDiv.querySelector('input').value;
        // Add club data to the object
        clubData[clubName] = clubYardage;
    });

    // pass the club data object to the analyzeGaps() function
    console.log(clubData);
    analyzeGaps(clubData);
}

function analyzeGaps(cd) {
    const clubData = { cd };

    var gaps = [];

    for (i = 0; i < clubData.length; i++) {

        const upperClub = clubData[i].clubYardage.value;
        const lowerClub = clubdata[i].clubYardage.value;

        const gap = upperClub - lowerClub;
        gaps.push(gap);
    }

    console.log(gaps);
}