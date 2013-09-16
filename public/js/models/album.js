var app = app || {};


app.Album = Backbone.Model.extend({

	defaults: {
		name: 'Album name'
	},

    urlRoot: '/albums',

    idAttribute: '_id',

});
