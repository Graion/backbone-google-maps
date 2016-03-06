import { ListLocationsView } from './views/ListLocations';
import { LocationFormView } from './views/LocationForm';
import { LocationsMapView } from './views/LocationsMap';
import { Locations } from './collections/Locations';

var AppView = new (Backbone.View.extend({
  el: $('#app'),

  initialize: function(){
    this.locations = new Locations([
      {
        title: 'Graion',
        latitude: -34.5781251,
        longitude: -58.4339857
      },
      {
        title: 'Valtech',
        latitude: -34.5787612,
        longitude: -58.4332132
      },
      {
        title: 'The Temple Bar',
        latitude: -34.5852982,
        longitude: -58.433674
      }
    ]);

    this.listLocationView = new ListLocationsView({
      collection: this.locations
    });
    this.locationFormView = new LocationFormView({
      collection: this.locations
    });
    this.locationsMapView = new LocationsMapView({
      collection: this.locations
    });
  }
}));
