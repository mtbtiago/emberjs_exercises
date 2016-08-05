import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('services');
  this.route('contact');
  this.route('events');
  this.route('post');
  this.route('cars', function() {
    this.route('new');
  });
  this.route('users');
});

export default Router;
