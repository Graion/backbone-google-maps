import template from './LocationForm.html';

var LocationFormView = Backbone.View.extend({
  el: $('#location-form'),

  events: {
    "submit form": "submit"
  },

  template: template,

  initialize: function () {
    this.render();
    this.$form = this.$el.find('form')[0];
    this.$title = this.$el.find('[name=title]');
    this.$latitude = this.$el.find('[name=latitude]');
    this.$longitude = this.$el.find('[name=longitude]');
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
      return location;
    }
  },

  submit: function (e) {
    e.preventDefault();
    this.collection.add(this.newLocation());
    this.$form.reset();
  },

  render: function(){
    this.$el.html(this.template());
  }
});

export { LocationFormView };
