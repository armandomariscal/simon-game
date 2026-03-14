$(function(){

    var game = new GameModel();

    var scores = new ScoresCollection();

    var buttonsView = new SimonButtonsView({
        game:game
    });

    var boardView = new GameBoardView({
        game:game
    });

    var scoreBoard = new ScoreBoardView({
        collection:scores
    });

    game.on("game:over",function(){

        var name = $("#player-name").val() || "anon";

        var score = game.get("score");

        scores.addScore(name,score);

        alert("Game Over! Score: "+score);

    });

    var APP_VERSION = "1.0.0";
    $("#app-version").text(APP_VERSION);
});