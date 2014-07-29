var PlayerCollection = Backbone.Collection.extend({
  model: PlayerModel,
  url: 'http://www.fantasyfootballnerd.com/service/players/json/' + apikey,
  parse: function(response) {
    return response.Players;
  }
});

var QuarterbackCollection = Backbone.Collection.extend({
  model: QuarterbackModel,
  url: 'http://www.fantasyfootballnerd.com/service/draft-projections/json/' + apikey + '/QB',
  parse: function(response) {
    return response.DraftProjections;
  }
});

var RunningbackCollection = Backbone.Collection.extend({
  model: RunningbackModel,
  url: 'http://www.fantasyfootballnerd.com/service/draft-projections/json/' + apikey + '/RB',
  parse: function(response) {
    return response.DraftProjections;
  }
});

var WideReceiverCollection = Backbone.Collection.extend({
  model: WideReceiverModel,
  url: 'http://www.fantasyfootballnerd.com/service/draft-projections/json/' + apikey + '/WR',
  parse: function(response) {
    return response.DraftProjections;
  }
});

var TightEndCollection = Backbone.Collection.extend({
  model: TightEndModel,
  url: 'http://www.fantasyfootballnerd.com/service/draft-projections/json/' + apikey + '/TE',
  parse: function(response) {
    return response.DraftProjections;
  }
});

var KickerCollection = Backbone.Collection.extend({
  model: KickerModel,
  url: 'http://www.fantasyfootballnerd.com/service/draft-projections/json/' + apikey + '/K',
  parse: function(response) {
    return response.DraftProjections;
  }
});

var DefenseCollection = Backbone.Collection.extend({
  model: DefenseModel,
  url: 'http://www.fantasyfootballnerd.com/service/draft-projections/json/' + apikey + '/DEF',
  parse: function(response) {
    return response.DraftProjections;
  }
});