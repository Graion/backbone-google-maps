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
    var loc = {
      title: this.$title.val().trim(),
      latitude: this.$latitude.val().trim(),
      longitude: this.$longitude.val().trim()
    };

    if (loc.title && loc.latitude && loc.longitude) {
      return loc;
    }
  },

  submit: function (e) {
    e.preventDefault();
    this.collection.add(this.newLocation());
  }
});
