import Ember from 'ember';

export default Ember.Component.extend({
  name: 'Brad',
  greetingCount: 0,
  greetingMsg: '',
  greetedSet: false,
  actions: {
    greedUser: function(name) {
      this.setProperties({
        greetingCount: this.greetingCount + 1,
        greetingMsg: 'Hello, '+name,
        greetedSet: true
      });
    }
  },
  classNames: ['well', 'well-lg'],
  classNameBindings: ['greetedSet']
});
