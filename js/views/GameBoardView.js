var GameBoardView = Backbone.View.extend({

    el:"body",

    events:{
        "click #start-game":"startGame"
    },

    initialize:function(options){

        this.game = options.game;

        this.listenTo(this.game,"score:update",this.updateScore);

    },

    startGame:function(){

        this.game.startGame();

    },

    updateScore:function(score){

        $("#score-value").text(score);

    }

});