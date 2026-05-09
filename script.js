window.RufflePlayer = window.RufflePlayer || {};
let player;

window.addEventListener("DOMContentLoaded", () => {
    const ruffle = window.RufflePlayer.newest();
    player = ruffle.createPlayer();
    const container = document.getElementById("game-container");
    container.appendChild(player);

    player.load({
        url: "zombotron.swf",
        // BYPASS SITELOCK: Tells the game it's still on evilgames
        base: "https://evilgames.eu/flashgames/", 
        allowScriptAccess: false,
        parameters: "wmode=direct&menu=false&quality=high",
    });

    // Handle Full Screen
    document.getElementById("fs-toggle").addEventListener("click", () => {
        player.enterFullscreen();
    });
});