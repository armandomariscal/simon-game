var ScoreBoardView = Backbone.View.extend({

    el:"#ranking",

    initialize:function(options){

        this.collection = options.collection;

        this.listenTo(this.collection,"update",this.render);

        this.render();

    },

    render:function(){

        var list = $("#score-list");

        list.empty();

        this.collection.each(function(score){

            list.append(
                "<li>"+score.get("name")+" - "+score.get("score")+"</li>"
            );

        });

    }

});