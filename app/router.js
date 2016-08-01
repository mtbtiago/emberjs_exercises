import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('services');
  this.route('contact');

  this.resource('posts', {path: '/posts'}, function() {
    this.route('new');
    this.route('post', {path: ':id'});
  })
  this.route('events');
});

export default Router;
