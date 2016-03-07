import template from './LocationForm.html';

import { Location } from '../Location/Location';
import { PlacesAutocompleteView } from '../PlacesAutocomplete/PlacesAutocompleteView';

var LocationFormView = Backbone.View.extend({
  el: $('#location-form'),

  events: {
    "submit form": "submit"
  },

  template: template,

  initialize: function (options) {
    this.render();
    this.$form = this.$el.find('form')[0];
    this.$title = this.$el.find('[name=title]');
    this.$latitude = this.$el.find('[name=latitude]');
    this.$longitude = this.$el.find('[name=longitude]');

    this.autocomplete = new PlacesAutocompleteView({
      el: this.$title
    });
    this.listenTo(this.autocomplete, 'placeSelected', this.autocompleteFromPlace);
  },

  /**
   * Creates a new location object
   * @returns {{title: (string), latitude: (string), longitude: (string)}}
   */
  newLocation: function() {
    var location = {
      title: this.$title.val().trim(),
      latitude: this.$latitude.val().trim(),
      longitude: this.$longitude.val().trim()
    };

    if (location.title && location.latitude && location.longitude) {
      return new Location(location);
    }
  },

  submit: function (e) {
    e.preventDefault();
    this.collection.add(this.newLocation());
    this.$form.reset();
  },

  render: function(){
    this.$el.html(this.template());
  },

  autocompleteFromPlace: function(place) {
    this.$title.focus();
    this.$latitude.val(place.geometry.location.lat());
    this.$longitude.val(place.geometry.location.lng());
  }
});

export { LocationFormView };
