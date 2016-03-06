import { LocationView } from './Location';

var ListLocationsView = Backbone.View.extend({
  el: $('#locations'),

  initialize: function() {
    this.listenTo(this.collection, 'add', this.render);
    this.render();
  },

  remove: function(location) {
    this.collection.remove(location);
    this.render();
  },

  render: function() {
    this.$el.empty();
    this.collection.each(function(location) {
      var locationView = new LocationView({ model: location });
      locationView.on('remove', this.remove, this);
      this.$el.append(locationView.$el);
    }, this);
    return this;
  }
});

export { ListLocationsView };