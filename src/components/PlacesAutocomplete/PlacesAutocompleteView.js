import template from './PlacesAutocomplete.html';

var PlacesAutocompleteView = Backbone.View.extend({
    template: template,

    initialize: function() {
        this.render();
        this.autocomplete = new window.google.maps.places.Autocomplete(this.$el.find(':input')[0], {types: ['geocode', 'establishment']});
        this.autocomplete.addListener('place_changed', this.broadcastLocation.bind(this));
    },

    broadcastLocation: function() {
        this.trigger('placeSelected', this.autocomplete.getPlace());
    },

    render: function() {
        this.$el.html(this.template());
    }
});

export { PlacesAutocompleteView };
