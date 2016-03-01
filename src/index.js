var App = (function($, Backbone, w) {
  var init = function() {
    var locations = new Locations([
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

    var listLocationView = new ListLocationsView({
      collection: locations,
      el: $('tbody.locations')[0]
    });
    var newLocationFormView = new NewLocationFormView({
      collection: locations
    });
    var locationsMapView = new LocationsMapView({
      collection: locations
    });
  };

  return {
    init: init
  };
})(jQuery, Backbone, window);

$(function() {
  App.init();
});
