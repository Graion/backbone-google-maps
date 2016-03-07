var PlacesAutocompleteView = Backbone.View.extend({
    initialize: function() {
        this.render();
        this.autocomplete = new window.google.maps.places.Autocomplete(this.el, {
            types: ['geocode', 'establishment']
        });
        this.autocomplete.addListener('place_changed', this.broadcastLocation.bind(this));
    },

    broadcastLocation: function() {
        this.trigger('placeSelected', this.autocomplete.getPlace());
    }
});

export { PlacesAutocompleteView };
