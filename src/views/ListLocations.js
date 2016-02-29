var ListLocationsView = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.collection, 'add', this.add);

    this._locationsViews = [];
    this.collection.each(this.add, this);
  },

  add: function(loc) {
    var locationView = new LocationView({ model: loc })
    this._locationsViews.push(locationView);
    this.render();
  },

  render: function() {
    this.$el.empty();
    _(this._locationsViews).each(function(locationView) {
      locationView.render();
      this.$el.append(locationView.el);
    }, this);
  }
});
