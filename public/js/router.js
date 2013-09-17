// public/js/router.js

Router = Backbone.Router.extend({

	routes: {
        ''                   : 'home',
        'albums'	         : 'list',
        'albums/add'         : 'addAlbum',
        'albums/:id'         : 'albumDetails',
        'about'              : 'about',
        'contact'            : 'contact'
	},

	initialize: function () {
        var headerView = new app.HeaderView();
        headerView.render();
	},

	home: function () {
	},

    about: function () {
        var aboutView = new app.AboutView();
        aboutView.render();
    },

    contact: function () {
        var contactView = new app.ContactView();
        contactView.render();
    },

	list: function() {
        var albums = new app.Albums();

        albums.fetch({success: function(){
            var albumsView = new app.AlbumsView();
            albumsView.render(albums);
        }});
    },

    albumDetails: function (id) {
        var album = new app.Album({_id: id});
        
        album.fetch({success: function(){
            var albumView = new app.AlbumView({model: album});
            albumView.render(album);
        }});
    },

    addAlbum: function() {
        var album = new app.Album();
        
        var albumView = new app.AlbumView({model: album});
        albumView.render(album);
    },

})