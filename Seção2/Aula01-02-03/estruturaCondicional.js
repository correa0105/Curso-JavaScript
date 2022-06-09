const hour = 19;

if (hour >= 0 && hour < 12) {
    console.log("Good Morning!");
} else if (hour >= 12 && hour < 18) {
    console.log("Good Afternoon");
} else if (hour >= 18 && hour < 24) {
    console.log("Good Night!");
} else {
    console.log("Hello!");
}