import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    sayHello: function() {
      alert('hello!');
    },
    toggleBody: function () {
      this.toggleProperty('isShowingBody');
    },
    submitAction: function () {
      alert(this.get('name'));
      alert(this.get('comment'));
    }
  },
  title: 'My Blog Post',
  body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  authors: ['William', 'Robert', 'Michelle'],
  created: new Date(),
  comments: [
    {
      name: 'Mike Smith',
      comment: 'Thanks for the great post'
    },
    {
      name: 'John Doe',
      comment: 'Nide post'
    },
    {
      name: 'Manolo',
      comment: 'Nice job'
    }
  ],
  isShowingBody: false
});
