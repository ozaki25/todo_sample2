/*global define*/

define([
  'underscore',
  'backbone',
  'models/Todos'
], function (_, Backbone, TodosModel) {
  'use strict';

  var TodosCollection = Backbone.Collection.extend({
    model: TodosModel,

    localStorage: new Backbone.LocalStorage('todos-backbone'),

    nextOrder: function() {
      return this.length ? this.last().get('order') + 1 : 1;
    },

    comparator: 'order'
  });

  return TodosCollection;
});
