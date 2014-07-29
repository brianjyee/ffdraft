var QuarterbackCollection = Backbone.Collection.extend({
  model: QuarterbackModel,
  url: 'http://www.fantasyfootballnerd.com/service/draft-projections/json/527itaprtxnq/QB/',
  parse: function(response) {
    return response.DraftProjections;
  }
})