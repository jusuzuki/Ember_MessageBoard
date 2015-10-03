import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('question');
  },

  actions: {

    delete(question) {
      if (confirm('Are you sure you want to delete this rental?')) {
        question.destroyRecord();
        this.transitionTo('index');
      }
    }
  }
});
