var app = app || {};

app.AlbumView = Backbone.View.extend({

    el: $('#content'),

    render: function (album) {
        console.debug(album);
      	var template = _.template($('#album-template').html(),{album: album});
      	this.$el.html(template);
    }

});