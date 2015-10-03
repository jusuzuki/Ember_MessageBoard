import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },

    save() {
      var params = {
        user: this.get('user'),
        subject: this.get('subject'),
        notes: this.get('notes')
      };
      this.set('addNewQuestion', false),
      this.sendAction('save', params);
    }
  }
});
