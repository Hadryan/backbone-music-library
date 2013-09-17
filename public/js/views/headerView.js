var app = app || {};

app.HeaderView = Backbone.View.extend({

    el: $('#header'),

    render: function () {
      	var template = _.template($('#header-template').html());
      	this.$el.html(template);
    }

});