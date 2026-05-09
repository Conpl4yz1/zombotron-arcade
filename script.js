window.RufflePlayer = window.RufflePlayer || {};
let arcadePlayer;

window.addEventListener("load", () => {
    const ruffle = window.RufflePlayer.newest();
    arcadePlayer = ruffle.createPlayer();
    const container = document.getElementById("game-viewport");
    
    if (container) {
        container.appendChild(arcadePlayer);

        arcadePlayer.load({
            url: "zombotron.swf",
            // The 'base' fixes the green radar "stuck" screen
            base: "https://evilgames.eu/flashgames/", 
            parameters: "wmode=direct&quality=high&play=true",
            allowScriptAccess: true,
        });

        arcadePlayer.style.width = "100%";
        arcadePlayer.style.height = "100%";
    }
});

// Fullscreen logic using a global listener to ensure it works on all browsers
document.addEventListener("click", (e) => {
    if (e.target && e.target.id === "fullscreen-button") {
        if (arcadePlayer && typeof arcadePlayer.enterFullscreen === "function") {
            arcadePlayer.enterFullscreen();
        } else {
            console.warn("Player not ready or fullscreen blocked.");
        }
    }
});
