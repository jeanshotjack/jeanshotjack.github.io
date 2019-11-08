$(document).ready(function() {
    $("#about").hide();
    $("#resume").hide();
    $("#abt").on("click", function() {
        $("#gallery").hide();
        $("#about").show();
    });
    $("#gal").on("click", function() {
        $("#about").hide();
        $("#gallery").show();
    });

});