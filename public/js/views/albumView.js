var app = app || {};

app.AlbumView = Backbone.View.extend({

    el: $('#content'),

    render: function (album) {
      	var template = _.template($('#album-template').html(),{album: album});
      	this.$el.html(template);
    },

    events: {
        'click .save'       : 'saveAlbum',
        'click .delete'     : 'deleteAlbum'
    },

    saveAlbum: function () {
    	console.log('Saving album');

    	var album = new app.Album();

    	album.set({

            coverImage: $('#coverImage').val(),
            title: $('#title').val(),
    		artist: $('#artist').val(),
            year: $('#year').val()

    	});

        album.save(null, {
            success: function () {
            	console.log('Album saved');
            	$('input').val('');
            },
            error: function () {
            	console.log('Error saving album');
            }
        });

    },

    deleteAlbum: function () {
        this.model.destroy({
            success: function () {
                window.history.back();
            }
        });
        return false;
    },

});