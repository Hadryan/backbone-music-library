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

	},

	home: function () {
		alert('home page');
	},

	contact: function () {
		alert('contact page');
	},

	about: function () {
		alert('about page');
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
            var albumView = new app.AlbumView();
            albumView.render(album);
        }});
    }

})