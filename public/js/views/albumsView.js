var app = app || {};

app.AlbumsView = Backbone.View.extend({

    render: function (albums) {
      	$('#content').empty();
      	var template = _.template($('#albums-template').html(),{albums: albums.models});
      	this.$el.html(template);
        $('#content').append(this.el);
    }

});