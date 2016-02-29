var NewLocationFormView = Backbone.View.extend({
  el: '#new-location',

  events: {
    "submit": "submit",
  },

  initialize: function () {
    this.$title = this.$('[name=title]');
    this.$latitude = this.$('[name=latitude]');
    this.$longitude = this.$('[name=longitude]');
  },

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
  }
});