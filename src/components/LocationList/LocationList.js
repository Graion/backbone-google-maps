require('backbone.localstorage');

import { Location } from '../Location/Location';

var LocationList = Backbone.Collection.extend({
  model: Location,

  localStorage: new Backbone.LocalStorage('backbone-google-maps'),

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
      location.save();
    }
  }
});

export { LocationList };