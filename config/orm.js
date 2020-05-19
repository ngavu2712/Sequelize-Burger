var connection = require('./connection.js');

// Helper function for SQL syntax.
// Let's say we want to pass 3 values into the mySQL query.
// In order to write the query, we need 3 question marks.
// The above helper function loops through and creates an array of question marks - ["?", "?", "?"] - and turns it into a string.
// ["?", "?", "?"].toString() => "?,?,?";

function printQuestionMarks (num) {
    var arr = [];

    for (var i= 0; i < num ; i++) {
        arr.push("?");
    }
    return arr.toString();
}

 
var orm = {

    selectAll : function(tableName, dbModelCallback) {

        var queryString = "SELECT * FROM " + tableName + ";";
        connection.query(queryString, function(err,burgerdb){
            if(err) {throw err;}
            dbModelCallback(burgerdb)
        })
    },

    insertOne : function(tableName, colNames, values, dbModelCallback) {
        
        var queryString = "INSERT INTO  " + tableName;

        queryString += " ( ";
        queryString += colNames.toString();
        queryString += " ) ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(values.length);
        queryString += " ) ";

        console.log(queryString);

        //Connect to SQLWorkbench
        connection.query(queryString, values, function(err, burgerdb){
            if (err) {throw err;}
            dbModelCallback(burgerdb)
        })

        
    },
    updateOne : function(tableName, colNames, values, dbModelCallback) {
        var queryString = "UPDATE " + tableName;
        // queryString += " SET ";
        // queryString += objToSql(objColVals);
        // queryString += " WHERE ";
        // queryString += condition;

        // console.log(queryString);
     var statement =   connection.query("UPDATE ?? SET ?? = ? WHERE ?? = ?",[tableName, colNames[0], values[0], colNames[1], values[1]], function(err, burgerdb) {
            if(err) {throw err;}
            dbModelCallback(burgerdb);
        })
       console.log(statement.sql)
    }
    
}; 

module.exports = orm;