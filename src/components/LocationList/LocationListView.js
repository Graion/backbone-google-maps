import { LocationView } from '../Location/LocationView';
import template from './LocationList.html';

var LocationListView = Backbone.View.extend({
  el: $('#locations'),

  template: template,

  initialize: function() {
    this.listenTo(this.collection, 'add', this.render);
    this.render();
  },

  remove: function(location) {
    this.collection.remove(location);
    location.destroy();
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
    this.collection.each(function(location) {
      var locationView = new LocationView({ model: location });
      locationView.on('remove', this.remove, this);
      this.$el.find('.locations').append(locationView.$el);
    }, this);
    return this;
  }
});

export { LocationListView };