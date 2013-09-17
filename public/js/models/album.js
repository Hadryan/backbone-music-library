var app = app || {};


app.Album = Backbone.Model.extend({

	defaults: {
		title: 'This album has no title'
	},

    urlRoot: '/albums',

    idAttribute: '_id',

});
