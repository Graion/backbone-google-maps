var LocationView = Backbone.View.extend({
  render: function() {
    this.$el.html('<li>' + this.model.get('title') + '</li>');
  }
});
