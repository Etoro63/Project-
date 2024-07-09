function getCurrentTimeUTC() {
    const now = new Date();
    return now.toUTCString();
}

function updateTime() {
    const currentTimeUTCElement = document.getElementById('currentTimeUTC');
    if (currentTimeUTCElement) {
        currentTimeUTCElement.textContent = getCurrentTimeUTC();
    }
}

function getCurrentDay() {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const now = new Date();
    const dayOfWeek = days[now.getUTCDay()];
    return dayOfWeek;
}

function updateDay() {
    const currentDayElement = document.getElementById('currentDay');
    if (currentDayElement) {
        currentDayElement.textContent = getCurrentDay();
    }
}

setInterval(() => {
    updateTime();
    updateDay();
}, 1000);