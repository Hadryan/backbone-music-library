var app = app || {};

app.ContactView = Backbone.View.extend({

    el: $('#content'),

    render: function () {
      	var template = _.template($('#contact-template').html());
      	this.$el.html(template);
    }

});