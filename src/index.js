import { LocationListView } from './components/LocationList/LocationListView';
import { LocationFormView } from './components/LocationForm/LocationFormView';
import { LocationMapView } from './components/LocationMap/LocationMapView';
import { LocationList } from './components/LocationList/LocationList';

var AppView = new (Backbone.View.extend({
  el: $('#app'),

  initialize: function(){
    this.locations = new LocationList([
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

    this.locationListView = new LocationListView({
      collection: this.locations
    });
    this.locationFormView = new LocationFormView({
      collection: this.locations
    });
    this.locationsMapView = new LocationMapView({
      collection: this.locations
    });
  }
}));
