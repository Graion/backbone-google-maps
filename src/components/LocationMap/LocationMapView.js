var LocationMapView = Backbone.View.extend({
    el: $('#map'),

    initialize: function() {
        this.markers = [];
        this.listenTo(this.collection, 'add', this.addMarker);
        this.listenTo(this.collection, 'remove', this.removeMarker);

        this.map = new window.google.maps.Map(this.el, {
            center: {lat: -34.5781251, lng: -58.4339857},
            zoom: 15
        });

        this.markLocations();
    },

    /**
     * Adds a new marker to the map
     * @param {Location} location
     */
    addMarker: function (location) {
        var newMarker = new google.maps.Marker({
            position: new google.maps.LatLng(location.get('latitude'), location.get('longitude')),
            map: this.map,
            title: location.get('title')
        });
        this.markers.push(newMarker);
    },

    /**
     * Removes a location from the map
     * @param {Location} location
     */
    removeMarker: function (location) {
        var partitionedMarkers = _.partition(this.markers, {
            title: location.get('title')
        });
        var markerToBeRemoved = _.first(_.first(partitionedMarkers));
        markerToBeRemoved.setMap(null);

        this.markers = _.last(partitionedMarkers);
    },

    /**
     * Marks all locations on the map
     */
    markLocations: function() {
        this.collection.each(function(location) {
            this.addMarker(location);
        }, this);
    }
});

export { LocationMapView };