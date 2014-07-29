var PlayerModel = Backbone.Model.extend({
  urlRoot: 'http://www.fantasyfootballnerd.com/service/players/json/' + apikey
});

var QuarterbackModel = PlayerModel.extend({
  urlRoot: 'http://www.fantasyfootballnerd.com/service/draft-projections/json/' + apikey + '/QB'
});

var RunningbackModel = PlayerModel.extend({
  urlRoot: 'http://www.fantasyfootballnerd.com/service/draft-projections/json/' + apikey + '/RB'
});

var WideReceiverModel = PlayerModel.extend({
  urlRoot: 'http://www.fantasyfootballnerd.com/service/draft-projections/json/' + apikey + '/WR'
});

var TightEndModel = PlayerModel.extend({
  urlRoot: 'http://www.fantasyfootballnerd.com/service/draft-projections/json/' + apikey + '/TE'
});

var KickerModel = PlayerModel.extend({
  urlRoot: 'http://www.fantasyfootballnerd.com/service/draft-projections/json/' + apikey + '/K'
});

var DefenseModel = PlayerModel.extend({
  urlRoot: 'http://www.fantasyfootballnerd.com/service/draft-projections/json/' + apikey + '/DEF'
});