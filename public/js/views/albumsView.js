var app = app || {};

app.AlbumsView = Backbone.View.extend({

    el: $('#content'),

    render: function (albums) {
        console.debug(albums);
      	var template = _.template($('#albums-template').html(),{albums: albums.models});
      	this.$el.html(template);
    }

});