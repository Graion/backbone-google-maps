var App = (function($, Backbone, global) {
  var init = function() {
    var locations = new global.Locations([
      {
        title: 'Graion',
        latitude: 0.1,
        longitude: 0.1
      },
      {
        title: 'Valtech',
        latitude: 0.1,
        longitude: 0.1
      }
    ]);

    var listLocationView = new global.ListLocationsView({
      collection: locations,
      el: $('tbody.locations')[0]
    });

    listLocationView.render();
  };

  return {
    init: init
  };
})(jQuery, Backbone, window);

$(function() {
  App.init();
});
