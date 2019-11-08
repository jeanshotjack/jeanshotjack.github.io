$(document).ready(function() {
    $("#about").hide();
    $("#resume").hide();
    $("#abt").on("click", function() {
        $("#gallery").hide();
        $("#resume").hide();
        $("#about").show();
    });
    $("#gal").on("click", function() {
        $("#about").hide();
        $("#resume").hide();
        $("#gallery").show();
    });
    $("#res").on("click", function() {
        $("#about").hide();
        $("#gallery").hide();
        $("#resume").show();
    });
});