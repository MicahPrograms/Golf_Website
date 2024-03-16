function collectClubData() {
    // create an empty array to store club data
    const clubArray = [];
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

        if (clubYardage == "" || clubYardage == null) {
            clubDiv.remove();
        };

        clubArray.push(clubObject);
    });
    // pass the club data object to the analyzeGaps() function
    analyzeGaps(clubArray);    
}

function analyzeGaps(cd) {
    const cleanArray = cd.filter(club => club.yardage !== "");
    const orderedArray = cleanArray.sort((a, b) => a.id - b.id);
    console.log(orderedArray);
    const gaps = [];

    for (let i = 0; i < orderedArray.length - 1; i++) {

        const upperClub = orderedArray[i].yardage;
        const lowerClub = orderedArray[i + 1].yardage;

        const gap = upperClub - lowerClub;
        gaps.push({ name: orderedArray[i].club, gap: gap });
    }
    console.log(gaps);

    document.querySelectorAll('h4').forEach(function (h4, index) {
            h4.textContent = gaps[index].gap;
    });
}

function resetGappingData() {
    location.reload();
}

