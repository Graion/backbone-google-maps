var LocationsMapView = Backbone.View.extend({
    el: $('#map'),

    initialize: function() {
        this.markers = [];

        this.map = new window.google.maps.Map(this.el, {
            center: {lat: -34.5781251, lng: -58.4339857},
            zoom: 15
        });

        this.markLocations();
    },

    markLocations: function() {
        this.collection.each(function(location) {
            var marker = new google.maps.Marker({
                position: {lat: location.get('latitude'), lng: location.get('longitude')},
                map: this.map,
                title: 'Hello World!'
            });
            this.markers.push(marker);
        }, this);
    }
});
