var fs = require("fs")
module.exports=function(app){
   
    //Rotas da API Users
    app.get('/api/get/users', function(req,res){
        res.setHeader("Access-Control-Allow-Origin","*")        
        app.app.controllers.admin.listUsers(app, req, res);       
    })
    app.get('/api/get/users/:id', function(req,res){  
        res.setHeader("Access-Control-Allow-Origin","*")      
        app.app.controllers.admin.listarCategoriasById(app, req, res);       
    })
    app.put('/api/update/users/:id', function(req,res){    
        res.setHeader("Access-Control-Allow-Origin","*")    
        app.app.controllers.admin.updateCategoria(app, req, res);       
    })
    app.delete('/api/delete/users/:id', function(req,res){   
        res.setHeader("Access-Control-Allow-Origin","*")     
        app.app.controllers.admin.deleteCategoria(app, req, res);       
    })
    app.post('/api/users/salvar', function(req,res){ 
        res.setHeader("Access-Control-Allow-Origin","*")      
        app.app.controllers.admin.insertUser(app, req, res);       
    })
    
}