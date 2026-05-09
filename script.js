window.RufflePlayer = window.RufflePlayer || {};
let player;

window.addEventListener("load", () => {
    const ruffle = window.RufflePlayer.newest();
    player = ruffle.createPlayer();
    const container = document.getElementById("game-viewport");
    
    if (container) {
        container.appendChild(player);

        player.load({
            url: "zombotron.swf",
            // This MUST point to your local assets folder to fix the CORS error
            base: "./assets/", 
            allowScriptAccess: true,
            parameters: "wmode=direct&quality=high&play=true",
        }).then(() => {
            console.log("Local assets loaded. Game should be interactive.");
        }).catch((err) => {
            console.error("Critical Load Error:", err);
        });

        player.style.width = "100%";
        player.style.height = "100%";
    }
});

document.getElementById("fullscreen-button").addEventListener("click", () => {
    if (player) player.enterFullscreen();
});
