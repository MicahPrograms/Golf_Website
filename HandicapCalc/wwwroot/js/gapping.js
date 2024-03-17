function collectClubData() {
    //clear the suggestion paragraphs in case new data has been entered
    //clearSuggestions();

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

    if (orderedArray[0].yardage >= 240) {
        for (let i = 0; i < gaps.length; i++) {
            if (gaps[i].gap > 25) {
                const suggestionPara = document.getElementById('suggestion' + i);
                suggestionPara.textContent = "The gap between your " + gaps[i].name + " and " + gaps[i + 1].name +
                    " is too wide. Consider adding a club that fills this gap or adjusting the" +
                    " loft of your " + gaps[i].name + " or " + gaps[i + 1].name +
                    ".";
            }
        }
    }
    else if (orderedArray[0].yardage < 240 && orderedArray[0].yardage >= 200) {
        for (let i = 0; i < gaps.length; i++) {
            if (gaps[i].gap > 20) {
                const suggestionPara = document.getElementById('suggestion' + i);
                suggestionPara.textContent = "The gap between your " + gaps[i].name + " and " + gaps[i + 1].name +
                    " is too wide. Consider adding a club that fills this gap or adjusting the" +
                    " loft of your " + gaps[i].name + " or " + gaps[i + 1].name +
                    ".";
            }
        }
    }
    else if (orderedArray[0].yardage < 200) {
        for (let i = 0; i < gaps.length; i++) {
            if (gaps[i].gap > 15) {
                const suggestionPara = document.getElementById('suggestion' + i);
                suggestionPara.textContent = "The gap between your " + gaps[i].name + " and " + gaps[i + 1].name +
                    " is too wide. Consider adding a club that fills this gap or adjusting the" +
                    " loft of your " + gaps[i].name + " or " + gaps[i + 1].name +
                    ".";
            }
        }
    }
}

function resetGappingData() {
    location.reload();
}

