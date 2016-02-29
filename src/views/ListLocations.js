var ListLocationsView = Backbone.View.extend({
  initialize: function() {
    this._locationsViews = [];
    this.collection.each(function(loc) {
      this._locationsViews.push(new LocationView({ model: loc }));
    }, this);
  },
  render: function() {
    this.$el.empty();
    _(this._locationsViews).each(function(locationView) {
      locationView.render();
      this.$el.append(locationView.el);
    }, this);
  }
});
