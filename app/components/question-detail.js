import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(question) {
        if (confirm('Are you sure you want to delete this question?')) {
          this.sendAction('destroyQuestion', question);
        }
      },

    update(question, params) {
      this.sendAction('update', question, params);
    },

    saveAnswer(params) {
      this.sendAction('saveAnswer', params);
    },

    deleteAnswer(answer) {
        if (confirm('Are you sure you want to delete this answer?')) {
          this.sendAction('destroyAnswer', answer);
        }
      },
  }
});
