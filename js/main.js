$(document).ready(function() {
  var processQBCollection = function() {
    var qbTable = new PlayerTableView({collection: qbs});
    $("#qb-table").append(qbTable.render().$el);
  };

  var processRBCollection = function() {
    var rbTable = new PlayerTableView({collection: rbs});
    $("#rb-table").append(rbTable.render().$el);
  };

  var processWRCollection = function() {
    var wrTable = new PlayerTableView({collection: wrs});
    $("#wr-table").append(wrTable.render().$el);
  };

  var processTECollection = function() {
    var teTable = new PlayerTableView({collection: tes});
    $("#te-table").append(teTable.render().$el);
  };

  var processKCollection = function() {
    var kTable = new PlayerTableView({collection: ks});
    $("#k-table").append(kTable.render().$el);
  };

  var processDEFCollection = function() {
    var defTable = new PlayerTableView({collection: defs});
    $("#def-table").append(defTable.render().$el);
  };

  var qbs = new QuarterbackCollection;
  qbs.fetch({success: processQBCollection});

  var rbs = new RunningbackCollection;
  rbs.fetch({success: processRBCollection});

  var wrs = new WideReceiverCollection;
  wrs.fetch({success: processWRCollection});

  var tes = new TightEndCollection;
  tes.fetch({success: processTECollection});

  var ks = new KickerCollection;
  ks.fetch({success: processKCollection});

  var defs = new DefenseCollection;
  defs.fetch({success: processDEFCollection});

});
