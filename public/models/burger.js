// Import ORM
var orm = require('../config/orm.js');

var burgers = 
{
    selectAll : function(dbControllerCallback){
      orm.selectAll("burgers", function(burgerdb){
          dbControllerCallback(burgerdb)
      })
    },

    insertOne : function(colNames, values, dbControllerCallback) {
      orm.insertOne("burgers", colNames, values, function(burgerdb){
        dbControllerCallback(burgerdb)
      })
    },

    updateOne : function(colNames, values, dbControllerCallback){
      orm.updateOne("burgers", colNames, values, function(burgerdb){
        dbControllerCallback(burgerdb)
      })
    }

}

module.exports = burgers;