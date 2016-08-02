import Ember from 'ember';
// inform JShint to ignore 'moment is not defined'
/* globals moment */

export function formatDate(params) {
  return moment(params[0]).fromNow();
}

export default Ember.Helper.helper(formatDate);
