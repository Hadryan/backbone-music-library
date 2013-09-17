var app = app || {};

app.AboutView = Backbone.View.extend({

    el: $('#content'),

    render: function () {
      	var template = _.template($('#about-template').html());
      	this.$el.html(template);
    }

});