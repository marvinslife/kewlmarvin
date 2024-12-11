jQuery(document).ready(function($) {
    $('#btn_fullscreen').click(function() {
        elem = document.getElementById("frame-game");
        elem.requestFullscreen();
    });
    $('#close-fullscreen').click(function() {
        $('#html5-GameEmbed').removeClass("fullscreen");
        $('#html5-Game').removeClass("fs-games");
    });
});