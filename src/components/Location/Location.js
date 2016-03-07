require('backbone.localstorage');

var Location = Backbone.Model.extend({
  localStorage: new Backbone.LocalStorage('backbone-google-maps')
});

export { Location };
