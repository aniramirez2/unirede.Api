
module.exports.insertUser= function(app, req, res){
    var user = req.body
        var connection = app.config.dbConnection;        
        var adminDAO = new app.app.models.adminDAO(connection);
         adminDAO.insertUser(user, res, req);
         
}
module.exports.listUsers= function(app, req, res){
        var connection = app.config.dbConnection;
        var adminDAO = new app.app.models.adminDAO(connection);
        adminDAO.listUsers(res,req);
         
}
module.exports.listUsersById= function(app, req, res){
    var connection = app.config.dbConnection;
    var adminDAO = new app.app.models.adminDAO(connection);
    adminDAO.listUsersById(res,req);
     
}
module.exports.updateUser= function(app, req, res){
    var connection = app.config.dbConnection;
    var adminDAO = new app.app.models.adminDAO(connection);
    adminDAO.updateUser(res,req);
     
}
module.exports.deleteUser= function(app, req, res){
    var connection = app.config.dbConnection;
    var adminDAO = new app.app.models.adminDAO(connection);
    adminDAO.deleteUser(res,req);
     
}