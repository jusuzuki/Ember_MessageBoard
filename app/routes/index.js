import Ember from 'ember';

var questions = [{
  user: "Regina Mills",
  subject: "Why is guyliner-handless-wonder still around again?",
  notes: "Evil Regals!"
}, {
  user: "Emma Swan",
  subject: "EEE",
  notes: "SSS"
}, {
  user: "Root & Shaw",
  subject: "RRR",
  notes: "SSS"
}];

export default Ember.Route.extend({
  model() {
    return questions;
  },
});
