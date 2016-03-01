var Locations = Backbone.Collection.extend({
  model: Location,

  /**
   * Adds a location only once
   * @param loc
   * @returns {boolean}
     */
  add: function(loc) {
    var dup = this.any(function(_loc) {
      return (_loc.get('latitude') === loc.latitude && _loc.get('latitude') === loc.latitude) || _loc.get('title') === loc.title;
    });

    if (!dup) {
      return Backbone.Collection.prototype.add.call(this, loc);
    }

    return false;
  }
});
