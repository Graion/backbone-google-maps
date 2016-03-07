require("./style.css");

import { LocationListView } from './components/LocationList/LocationListView';
import { PlacesAutocompleteView } from './components/PlacesAutocomplete/PlacesAutocompleteView';
import { LocationFormView } from './components/LocationForm/LocationFormView';
import { LocationMapView } from './components/LocationMap/LocationMapView';
import { LocationList } from './components/LocationList/LocationList';

var AppView = new (Backbone.View.extend({
  el: $('#app'),

  initialize: function(){
    this.createLocations();
    this.locationListView = new LocationListView({
      collection: this.locations
    });
    this.locationFormView = new LocationFormView({
      collection: this.locations,
      placesAutocomplete: PlacesAutocompleteView
    });
    this.locationsMapView = new LocationMapView({
      collection: this.locations
    });
  },

  createLocations: function(){
    this.locations = new LocationList();
    this.locations.fetch();
    if (!this.locations.size()) {
      this.locations.create({
        title: 'Graion',
        latitude: -34.5781251,
        longitude: -58.4339857
      });
      this.locations.create({
        title: 'The Temple Bar',
        latitude: -34.5852982,
        longitude: -58.433674
      });
    }
  }
}));
