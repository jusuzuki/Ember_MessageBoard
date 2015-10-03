import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.attr(),
  subject: DS.attr(),
  notes: DS.attr(),
  answers: DS.hasMany('answer', { async: true })
});
