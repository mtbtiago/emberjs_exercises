import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    editCar: function(id) {
      var self = this;
      var make = this.get('model.make');
      var model = this.get('model.model');
      var year = this.get('model.year');
      this.store.findRecord('car', id).then(function(car) {
        car.set('make', make);
        car.set('model', model);
        car.set('year', year);
        car.save(); // coment this line to mimic a database post. if not, nothing is saved
        self.transitionToRoute('cars');
      });
    }
  }
});
