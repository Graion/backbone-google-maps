var LocationView = Backbone.View.extend({
  tagName: 'tr',

  events: {
    'click .remove': 'remove'
  },

  initialize: function() {
    this.render();
  },

  remove: function() {
    this.trigger('remove', this.model);
  },

  render: function() {
    var html = '<td>' + this.model.get('title') + '</td>' +
      '<td>' + this.model.get('latitude') + '</td>' +
      '<td>' + this.model.get('longitude') + '</td>' +
      '<td><button type="button" class="remove btn btn-danger btn-xs">&times; Remove</button></td>';
    this.$el.html(html);
    return this;
  }
});
