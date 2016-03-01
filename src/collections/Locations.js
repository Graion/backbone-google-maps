var Locations = Backbone.Collection.extend({
  model: Location,

  /**
   * Adds a location only once
   * @param location
   * @returns {boolean}
   */
  add: function(location) {
    var isDuplicated = this.any(function(_loc) {
      return (_loc.get('latitude') === location.latitude && _loc.get('latitude') === location.latitude) || _loc.get('title') === location.title;
    });

    if (!isDuplicated) {
      return Backbone.Collection.prototype.add.call(this, location);
    }

    return false;
  }
});
