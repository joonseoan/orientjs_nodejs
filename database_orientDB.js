var OrientJS = require('orientjs');

var server = OrientJS({
   host:       'localhost',
   port:       2424,
   username:   'root',
   password:   '1111'
});

var db = server.use('firstDB');

// record == row
// rid ==> primary key
/*
db.record.get('#15:0')
   .then(
      function(record){
         console.log('Loaded Record:', record, record.title);
       }
);
*/


/**
 * CREATE
 * READ
 * UPDATE
 * DELETE
 * 
 * CRUD 
 */

 // Create
 /*
var sql = 'SELECT * FROM TOPIC';
db.query(sql).then(function (results) {
    console.log(results)
});
*/

// :rid name must be same as "rid" in params object.
// Where @rid=:rid' is set by usting param component or params object.

/*
var sql = 'SELECT * FROM TOPIC WHERE @rid=:rid';
var param = {
    params : {
        rid: '#15:0'
    }
};

// then : promise
db.query(sql, param).then(function (results) {
    console.log(results)
});

*/




/*
db.query("INSERT INTO topic (title, desc) VALUES(:title, :desc)",
{params : { title: 'EXPRESS', desc: 'Express is a framework for web'}})
.then(function (results) {
    console.log(results)
});
*/



// Update
// console shows a number of rows updated.
/*
var sql = "UPDATE topic SET title=:title WHERE @rid=:rid";
db.query(sql, { params : {title: 'ExpressJS', rid: '#15:0'}})
.then(function (results) {
    console.log(results);
});
*/

// DELETE

var sql = "DELETE FROM topic WHERE @rid=:rid";
db.query(sql, { params : {rid : "#15:0"}})
.then(function (results){
    console.log(results);

});