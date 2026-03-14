var GameModel = Backbone.Model.extend({

    defaults: {
        sequence: [],
        userInput: [],
        score: 0,
        colors: ["green","red","yellow","blue"],
        playing: false
    },

    startGame: function(){
        this.set({
            sequence: [],
            userInput: [],
            score: 0,
            playing: true
        });

        this.nextRound();
    },

    nextRound: function(){

        var seq = this.get("sequence");
        var colors = this.get("colors");

        var randomColor = colors[Math.floor(Math.random()*colors.length)];

        seq.push(randomColor);

        this.set({
            sequence: seq,
            userInput: []
        });

        this.trigger("play:sequence", seq);
    },

    registerInput: function(color){

        var input = this.get("userInput");
        input.push(color);

        this.set("userInput", input);

        this.checkInput();
    },

    checkInput: function(){

        var seq = this.get("sequence");
        var input = this.get("userInput");

        for(var i=0;i<input.length;i++){
            if(input[i] !== seq[i]){
                this.trigger("game:over");
                return;
            }
        }

        if(input.length === seq.length){

            var score = this.get("score") + 1;
            this.set("score", score);

            this.trigger("score:update", score);

            var self = this;

            setTimeout(function(){
                self.nextRound();
            },800);
        }

    }

});