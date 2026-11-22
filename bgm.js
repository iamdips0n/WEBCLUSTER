function start() {
    const splash = document.getElementById("splash");
    const bgm = document.getElementById("bgm");

    // Play music right away, inside the click
    bgm.volume = 0.4;
    bgm.play().catch(err => console.log("Audio error:", err));

    // Fade out, then remove the splash screen
    splash.addEventListener("transitionend", () => splash.remove());
    splash.classList.add("hide");
}