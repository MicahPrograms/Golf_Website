function collectClubData() {
    // create an empty array to store club data
    const clubArray = [];
    alert("hi");
    // iterate through each club div and collect input values
    document.querySelectorAll('.club').forEach(function (clubDiv) {
        const clubName = clubDiv.querySelector('label').textContent; //remove white space on inputs? validation?
        const clubYardage = clubDiv.querySelector('input').value;
        const clubId = clubDiv.querySelector('input').id;
        
        // Add club data to the object
        const clubObject = {
            club: clubName,
            yardage: clubYardage,
            id: clubId
        };

        clubArray.push(clubObject);
    });

    // pass the club data object to the analyzeGaps() function
    console.log(clubArray[2].id);
    analyzeGaps(clubArray);
}

function analyzeGaps(cd) {
    const orderedArray = cd.sort((a, b) => a.id - b.id);
    console.log(orderedArray);
    const gaps = {};

    for (i = 0; i < orderedArray.length; i++) {

        const upperClub = orderedArray[i].clubYardage.value;
        const lowerClub = orderedArray[i+1].clubYardage.value;

        const gap = upperClub - lowerClub;
        gaps.push({ name: orderedArray.clubName.toString(), gap: gap });
    }

    console.log(gaps);
}