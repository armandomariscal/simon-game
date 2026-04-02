var SimonButtonsView = Backbone.View.extend({

    el:"#game-board",

    events:{
        "click .simon-btn":"handleClick"
    },

    initialize:function(options){

        this.game = options.game;

        this.sound = new Audio("assets/sounds/simon-beep.mp3");
        this.sounds = {
            blue: new Audio("assets/sounds/blue-beep.mp3"),
            green: new Audio("assets/sounds/green-beep.mp3"),
            red: new Audio("assets/sounds/red-beep.mp3"),
            yellow: new Audio("assets/sounds/yellow-beep.mp3")
        };

        this.listenTo(this.game,"play:sequence",this.playSequence);

    },

    handleClick:function(e){

        if(!this.game.get("playing")) return;

        var color = $(e.currentTarget).data("color");

        var sound = this.sounds[color];
        if (sound) {
            sound.currentTime = 0;
            sound.play();
        }

        this.flash(color);

        this.game.registerInput(color);

    },

    flash:function(color){

        var btn = $(".simon-btn[data-color='"+color+"']");

        btn.addClass("active");

        setTimeout(function(){
            btn.removeClass("active");
        },300);

    },

    playSequence:function(seq){

        var self = this;

        var i = 0;

        function play(){

            if(i>=seq.length) return;

            var color = seq[i];
            var sound = self.sounds[color];

            if (sound) {
                sound.currentTime = 0;
                sound.play();
            }

            self.flash(seq[i]);

            i++;

            setTimeout(play,600);

        }

        play();

    }

});