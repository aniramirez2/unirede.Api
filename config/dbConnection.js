/*importar o mongodb*/
var mongo = require('mongodb');
var connectionMongo = function(){
    var db = new mongo.Db(
        'unirede_test',  
        new mongo.Server(
            'localhost', //endereço do servidor
            27017, //porta de conexão
            {}//configurações opcionais
        ),
        {}
    );
    return db;
}
module.exports = function() {
    return connectionMongo;
}