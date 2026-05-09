window.RufflePlayer = window.RufflePlayer || {};
window.addEventListener("load", (event) => {
    const ruffle = window.RufflePlayer.newest();
    const player = ruffle.createPlayer();
    const container = document.getElementById("game-container");
    container.appendChild(player);

    player.load({
        url: "zombotron.swf",
        // Force the base to the original game domain so it finds its assets
        base: "https://evilgames.eu/swf/", 
        allowScriptAccess: true, 
        parameters: "wmode=direct&quality=high&play=true",
    });

    player.style.width = "100%";
    player.style.height = "100%";
});
