import { Location } from '../models/Location';

var Locations = Backbone.Collection.extend({
  model: Location,

  /**
   * Adds a location only once
   * @param {{title: (string), latitude: (string), longitude: (string)}} location
   */
  add: function(location) {
    var isDuplicated = this.any(function(_loc) {
      return (_loc.get('latitude') === location.latitude && _loc.get('latitude') === location.latitude) || _loc.get('title') === location.title;
    });

    if (!isDuplicated) {
      Backbone.Collection.prototype.add.call(this, location);
    }
  }
});

export { Locations };