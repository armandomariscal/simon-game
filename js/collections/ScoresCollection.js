var ScoresCollection = Backbone.Collection.extend({

    model: ScoreModel,

    localStorageKey:"simon-scores",

    initialize:function(){
        this.load();
    },

    load:function(){

        var data = localStorage.getItem(this.localStorageKey);

        if(data){
            this.reset(JSON.parse(data));
        }

    },

    save:function(){

        localStorage.setItem(
            this.localStorageKey,
            JSON.stringify(this.toJSON())
        );

    },

    addScore:function(name,score){

        this.add({
            name:name,
            score:score
        });

        this.sort();

        this.save();
    },

    comparator:function(model){
        return -model.get("score");
    }

});