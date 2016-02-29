var LocationView = Backbone.View.extend({
  tagName: 'tr',

  render: function() {
    var html = '<td>' + this.model.get('title') + '</td>' +
      '<td>' + this.model.get('latitude') + '</td>' +
      '<td>' + this.model.get('longitude') + '</td>' +
      '<td>...</td>';
    this.$el.html(html);
  }
});
