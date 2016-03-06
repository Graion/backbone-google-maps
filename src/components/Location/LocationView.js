import template from './Location.html';

var LocationView = Backbone.View.extend({
  tagName: 'tr',

  events: {
    'click .remove': 'remove'
  },

  template: template,

  initialize: function() {
    this.render();
  },

  remove: function() {
    this.trigger('remove', this.model);
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  }
});

export { LocationView };