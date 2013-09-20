var app = app || {};


app.Album = Backbone.Model.extend({

	defaults: {
		coverImage: 'default.jpg',
		title: 'This album has no title',
		artist: 'Unknown',
		year: 'Unknown'

	},

    urlRoot: '/albums',

    idAttribute: '_id',

});
