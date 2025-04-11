function calculateAge(dateOfBirth) {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    if (birthDate < today) {
        return "You are an adult. You were born in " + dateOfBirth;
    } else {
        return "You are a child. You were born before " + today;
    }
}

function displayNotification(title, message, type) {
    const notification = document.createElement("div");
    notification.textContent = ` ${title} : ${message}`;
    if (type === "error") {
        notification.classList.add("error");
    } else if (type === "success") {
        notification.classList.remove("error");
    }
    document.body.appendChild(notification);
}

function getSchoolYear(yearOfBirth) {
    const currentDate = new Date();
    if (yearOfBirth < 1900 || yearOfBirth > 2023) {
        return `Invalid birth date: ${yearOfBirth}`;
    } else {
        return `${currentDate.getFullYear()}${(yearOfBirth - 1900)} ${currentDate.getMonth() + 1}`;
    }
}

function displaySchoolInfo(schools, schoolYear) {
    const schoolsContainer = document.getElementById("school-scores");
    for (let i = 0; i < schools.length; i++) {
        if (schools[i] === "None") continue;
        const schoolScoreElement = document.createElement("div");
        schoolScoreElement.textContent = `${schools[i]} : ${calculateSchoolScores(schools[i])}`;
        schoolsContainer.appendChild(schoolScoreElement);
    }
}

function calculateSchoolScores(schools) {
    return schools.filter((school, index) => {
        if (schools[index] === "None") return false;
        const schoolData = JSON.parse(decodeURIComponent(school));
        return Object.keys(schoolData).length > 0 && Object.values(schoolData).every(value => value >= 0);
    }).map(schoolData => Math.floor((schoolData / 10) * 100)).join(", ");
}

function displaySchoolDetails(schools, schoolYear) {
    const schoolsContainer = document.getElementById("school-details");
    const schoolScoresContainer = document.createElement("div");
    for (let i = 0; i < schools.length; i++) {
        if (schools[i] === "None") continue;
        const schoolScoreElement = document.createElement("div");
        schoolScoreElement.textContent = `${schools[i]} : ${calculateSchoolScores(schools[i])}`;
        schoolScoresContainer.appendChild(schoolScoreElement);
    }
    if (schoolYear) schoolsContainer.classList.add(`school-${schoolYear}`);

    const detailsDiv = document.createElement("div");
    detailsDiv.innerHTML = `<h2>School Details</h2>
        <p>Age: ${displayNotification("School Age", "You are an adult. You were born in %s".format(getDateOfBirth()))}</p>
        <p>School Name: ${schools[0]}</p>`;
    schoolDetails.appendChild(detailsDiv);
}

function calculateDateOfBirth(dateOfBirth) {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    if (birthDate < today) return "You are an adult. You were born in " + dateOfBirth;
    else return "You are a child. You were born before " + today;
}

function updateSchoolYear(schools, schoolYear) {
    for (let i = 0; i < schools.length; i++) {
        if (schools[i] === "None") continue;
        const schoolData = JSON.parse(decodeURIComponent(schools[i]));
        if (schoolData.year !== schoolYear) return false;
        else return true;
    }
}
