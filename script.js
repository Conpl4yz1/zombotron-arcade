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
            // We set base to empty to force it to stay in your folder
            base: "", 
            allowScriptAccess: true,
            // These settings bypass the "phone home" checks
            parameters: "wmode=direct&quality=high&play=true",
            salign: "lt",
            scale: "showAll",
        }).then(() => {
            console.log("Ruffle loaded zombotron.swf locally.");
        });

        player.style.width = "100%";
        player.style.height = "100%";
    }
});

document.getElementById("fullscreen-button").addEventListener("click", () => {
    if (player) player.enterFullscreen();
});
