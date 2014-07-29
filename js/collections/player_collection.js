var PlayerCollection = Backbone.Collection.extend({
  model: PlayerModel,
  url: 'http://www.fantasyfootballnerd.com/service/players/json/527itaprtxnq/'
})