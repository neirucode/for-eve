$(document).ready(function () {
    $(".love-container").css("opacity", "0");

    setTimeout(function () {
        $(".love-container").css("opacity", "1");
    }, 500);
});

document.addEventListener("DOMContentLoaded", function () {
    const letters = document.querySelectorAll(".magic-text span");

    letters.forEach((letter, index) => {
        letter.style.animationDelay = `${index * 0.05}s`; // Adjust timing here (0.05s per letter)
    });
});

// Audio handling
let audio = document.getElementById("background-audio");
let playButton = document.getElementById("play-button");

// Lower volume for a smoother experience
audio.volume = 0.4;

// Attempt autoplay
let playPromise = audio.play();

if (playPromise !== undefined) {
    playPromise.then(() => {
        console.log("Autoplay successful.");
    }).catch(() => {
        console.log("Autoplay blocked. Showing play button.");
        playButton.style.display = "block"; // Show button if autoplay is blocked
    });
}

// If the user clicks the button, play the audio
playButton.addEventListener("click", function () {
    audio.play();
    playButton.style.display = "none"; // Hide button after playing
});