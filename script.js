// After some secounds, change the message

// 15 secounds
setTimeout(() => {
    document.getElementById('message').textContent = "Focus... don't get distracted.";
}, 15000);

// 30 secound
setTimeout(() => {
    document.getElementById('message').textContent = "Still going? 👀 Impressive.";
}, 30000)

// 45 secound
setTimeout(() => {
    document.getElementById('message').textContent = "Almost there... stay strong. 💪";
}, 45000)

// 60 secound
setTimeout(() => {
    document.getElementById('message').textContent = "You win absolutely nothing. But you're loyal 💀";
}, 60000)




let secoundsLeft = 60;

const timerElement = document.getElementById('timer');

// Countdown function
const countDown = setInterval(() => {
    secoundsLeft--;
    timerElement.textContent = `⏳ ${secoundsLeft}s remaining`;

    if(secoundsLeft <= 0){
        clearInterval(countDown);
        timerElement.textContent = "⏱️ Time's up!";
    }
}, 1000);


// After 60 secounds, make the dot fall
setTimeout(() => {
    const dot = document.getElementById('dot');
    dot.style.animation = 'fall 1s forwards';  // forwards makes it stay at the bottom and disappear after falling.
}, 60000);