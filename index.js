var App = (function($, Backbone, global) {
  var init = function() {
    var loc = new global.Location({
      title: 'Graion',
      latitude: 0.1,
      longitude: 0.1
    });

    var locationView = new global.LocationView({model: loc});

    locationView.render();

    $('#app').html(locationView.el);
  };

  return {
    init: init
  };
})(jQuery, Backbone, window);

$(function() {
  App.init();
});
