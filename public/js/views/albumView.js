var app = app || {};

app.AlbumView = Backbone.View.extend({

    tagName: "div",

    render: function (album) {
        $('#content').empty();
      	var template = _.template($('#album-template').html(),{album: album});
      	this.$el.html(template);
        $('#content').append(this.el);
    },

    events: {
        'click .save'       : 'saveAlbum',
        'click .delete'     : 'deleteAlbum'
    },

    saveAlbum: function () {

        console.log('.save clicked');

        this.model.set('coverImage', $('#coverImage').val());
        this.model.set('title', $('#title').val());
        this.model.set('artist', $('#artist').val());
        this.model.set('year', $('#year').val());

        this.model.save(null, {
            success: function (model) {
                $('.alert-success').show();
            },
            error: function () {
            }
        });

        return false;
    },

    deleteAlbum: function () {

        this.model.destroy({
            success: function () {
                app.router.navigate('/albums', {trigger: true, replace: true});
            }
        });

        return false;
    },

});