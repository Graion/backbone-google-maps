var App = (function($, Backbone, w) {
  var init = function() {
    var locations = new Locations([
      {
        title: 'Graion',
        latitude: 0.1,
        longitude: 0.1
      },
      {
        title: 'Valtech',
        latitude: 0.1,
        longitude: 0.1
      },
      {
        title: 'Test',
        latitude: 0.1,
        longitude: 0.1
      }
    ]);

    var listLocationView = new ListLocationsView({
      collection: locations,
      el: $('tbody.locations')[0]
    });
    var newLocationFormView = new NewLocationFormView({
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
