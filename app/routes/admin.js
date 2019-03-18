var fs = require("fs")
module.exports=function(app){
   
    //Rotas da API Users
    app.get('/api/get/users', function(req,res){
        res.setHeader("Access-Control-Allow-Origin","*")        
        app.app.controllers.admin.listUsers(app, req, res);       
    })
    app.get('/api/get/users/:id', function(req,res){  
        res.setHeader("Access-Control-Allow-Origin","*")      
        app.app.controllers.admin.listUsersById(app, req, res);       
    })
    app.put('/api/update/users/:id', function(req,res){    
        res.setHeader("Access-Control-Allow-Origin","*")    
        app.app.controllers.admin.updateUser(app, req, res);       
    })
    app.delete('/api/delete/users/:id', function(req,res){   
        res.setHeader("Access-Control-Allow-Origin","*")     
        app.app.controllers.admin.deleteUser(app, req, res);       
    })
    app.post('/api/users/salvar', function(req,res){ 
        res.setHeader("Access-Control-Allow-Origin","*")      
        app.app.controllers.admin.insertUser(app, req, res);       
    })
    
}