module.exports.addCategory= function(app, req, res){
    if(req.session.autenticado){
    res.render("admin/addCategory",{validacao:{}, categoria:{}, user:req.session.nome})
    }else{
        res.render('admin/login',{validacao:{}, form:{}})
    }
}
module.exports.insertUser= function(app, req, res){
    var user = req.body
        var connection = app.config.dbConnection;        
        var adminDAO = new app.app.models.adminDAO(connection);
         adminDAO.insertUser(user, res, req);
         
}
module.exports.listUsers= function(app, req, res){
        var connection = app.config.dbConnection;
        var categoriaDAO = new app.app.models.adminDAO(connection);
        categoriaDAO.listUsers(res,req);
         
}
module.exports.listarCategoriasById= function(app, req, res){
    var connection = app.config.dbConnection;
    var categoriaDAO = new app.app.models.categoriaDAO(connection);
    categoriaDAO.listarCategoriasById(res,req);
     
}

module.exports.searchByCategoria= function(app, req, res){
    var connection = app.config.dbConnection;
    var categoriaDAO = new app.app.models.categoriaDAO(connection);
    categoriaDAO.searchByCategoria(res,req);
     
}
module.exports.updateCategoria= function(app, req, res){
    var connection = app.config.dbConnection;
    var categoriaDAO = new app.app.models.categoriaDAO(connection);
    categoriaDAO.updateCategoria(res,req);
     
}
module.exports.deleteCategoria= function(app, req, res){
    var connection = app.config.dbConnection;
    var categoriaDAO = new app.app.models.categoriaDAO(connection);
    categoriaDAO.deleteCategoria(res,req);
     
}
module.exports.createUser= function(app, req, res){
    var categoria = req.body
        req.assert('nome','Nome é obriatorio').notEmpty()
        req.assert('user','Email é obriatorio').notEmpty()
        req.assert('pass','Senha é obriatorio').notEmpty()
        req.assert('pass','A senha tem que ter minimo 6 digitos').len(6)

        var errors= req.validationErrors()

        if(errors){
            //onsole.log('error', errors)
            res.render('admin/cadastro',{validacao: errors, form: categoria})
            return
        }
        var connection = app.config.dbConnection;
        
        var loginDAO = new app.app.models.loginDAO(connection);

        loginDAO.addUser(categoria,req, res);
}

module.exports.login= function(app, req, res){
    res.render("admin/login",{validacao:{}, form:{}})
}
module.exports.makeLogin= function(app, req, res){
    var form = req.body
        req.assert('user','User e obriatorio').notEmpty()
        req.assert('pass','a senha deve ter 6 digitos').len(6)

        var errors= req.validationErrors()

        if(errors){
            //onsole.log('error', errors)
            res.render('admin/login',{validacao: errors, form: form})
            return
        }
        var connection = app.config.dbConnection;
        
        var loginDAO = new app.app.models.loginDAO(connection);

        loginDAO.getUsers(form, req, res);
}