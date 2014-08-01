var rowTemplate = _.template("<tr id='<%= playerId %>'>" +
     "<td class='name'><%= displayName %></td>" +
     "<td class='points'><%= projectedPoints %></td>" +
     "</tr>");

var PlayerTableView = Backbone.View.extend({
  tagName: 'table',
  className: 'table table-striped table-hover',

  initialize: function() {
    _.bindAll(this, 'render', 'renderOne');
  },

  render: function() {
    this.collection.each(this.renderOne);
    return this;
  },

  renderOne: function(model) {
    var row = new PlayerRowView({model:model});
    row.calculatePoints();
    this.$el.append(row.render().$el);
    return this;
  }
});

var PlayerRowView = Backbone.View.extend({
  events: {
    "click #id": 'setDanger'
  },

  setDanger: function() {
    var $target = $
    $(this).addClass("danger");
  },

  render: function() {
    var html = rowTemplate(this.model.toJSON());
    this.setElement( $(html) );
    return this;
  },

  calculatePoints: function() {
    var completions = isNaN(this.model.get("completions")) ? 0 : Math.round(this.model.get("completions"));
    var attempts = isNaN(this.model.get("attempts")) ? 0 : Math.round(this.model.get("attempts"));
    var passingYards = isNaN(this.model.get("passingYards")) ? 0 : Math.round(this.model.get("passingYards"));
    var passingTD = isNaN(this.model.get("passingTD")) ? 0 : Math.round(this.model.get("passingTD"));
    var passingInt = isNaN(this.model.get("passingInt")) ? 0 : Math.round(this.model.get("passingInt"));
    var rushYards = isNaN(this.model.get("rushYards")) ? 0 : Math.round(this.model.get("rushYards"));
    var rushTD = isNaN(this.model.get("rushTD")) ? 0 : Math.round(this.model.get("rushTD"));
    var rushAtt = isNaN(this.model.get("rushAtt")) ? 0 : Math.round(this.model.get("rushAtt"));
    var fumbles = isNaN(this.model.get("fumbles")) ? 0 : Math.round(this.model.get("fumbles"));
    var rec = isNaN(this.model.get("rec")) ? 0 : Math.round(this.model.get("rec"));
    var recYards = isNaN(this.model.get("recYards")) ? 0 : Math.round(this.model.get("recYards"));
    var recTD = isNaN(this.model.get("recTD")) ? 0 : Math.round(this.model.get("recTD"));

    var projectedPoints = (passingYards / 25) + (passingTD * 4) + (passingInt * -1) + (rushYards / 10) + (rushTD * 6) + (fumbles * -2) + (recYards / 10) + (recTD * 6);

    this.model.set("projectedPoints", projectedPoints);
  }
});