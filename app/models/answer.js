import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.attr(),
  text: DS.attr(),
  date_added: DS.attr(),
  question: DS.belongsTo('question', { async: true })
});
