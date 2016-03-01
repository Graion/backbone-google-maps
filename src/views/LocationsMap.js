var LocationsMapView = Backbone.View.extend({
    el: $('#map'),

    initialize: function() {
        this.markers = [];
        this.listenTo(this.collection, 'add', this.addMarker);

        this.map = new window.google.maps.Map(this.el, {
            center: {lat: -34.5781251, lng: -58.4339857},
            zoom: 15
        });

        this.markLocations();
    },

    addMarker: function (location) {
        var newMarker = new google.maps.Marker({
            position: new google.maps.LatLng(location.get('latitude'), location.get('longitude')),
            map: this.map,
            title: location.get('title')
        });
        return this.markers.push(newMarker);
    },

    markLocations: function() {
        this.collection.each(function(location) {
            this.addMarker(location);
        }, this);
    }
});
