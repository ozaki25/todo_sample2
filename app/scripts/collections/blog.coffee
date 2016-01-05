define [
  'underscore'
  'backbone'
  'models/Blog-model'
], (_, Backbone, BlogModel) ->

  class BlogCollection extends Backbone.Collection
    model: BlogModel
