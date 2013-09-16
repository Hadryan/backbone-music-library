var app = app || {};


app.Albums = Backbone.Collection.extend({

    model: app.Album,

    url: "/albums"

});

