var objectId = require('mongodb').ObjectId;
var mv = require('mv');
function adminDAO(connection){
    
    this._connection = connection();
}

adminDAO.prototype.insertUser= function(user,res, req){
    var dados ={
        nome: user.nome,
        idade: user.idade,
        permissao: user.permissao,
        cpf: user.cpf,
        dataCriacao: new Date()
    }
    this._connection.open(function(err, mongoclient){
        mongoclient.collection("Users", function(err, collection){
            collection.insert(dados, function(err, records){
                if(err){
                    res.json(err)
                }else{
                    res.json(records)
                }
                mongoclient.close();
            });
            
        });
    });
}
adminDAO.prototype.listUsers = function(res){
   
    this._connection.open(function(err, mongoclient){
        mongoclient.collection("Users", function(err, collection){
            collection.find().toArray(function(err, result){
                if(err){
                    res.json(err)
                }else{
                    res.json(result)
                }
                mongoclient.close();
            })
            
        });
    });
}
adminDAO.prototype.listUsersById = function(res, req){
    this._connection.open(function(err, mongoclient){
        mongoclient.collection("Users", function(err, collection){
            collection.find(objectId(req.params.id)).toArray(function(err, result){
                if(err){
                    res.json(err)
                }else{
                    res.json(result)
                }
                mongoclient.close();
            })
            
        });
    });
}
adminDAO.prototype.updateUser = function(res, req){
   
    var dados ={
        nome: req.body.nome,
        idade: req.body.idade,
        permissao: req.body.permissao,
        cpf: req.body.cpf,
        dataAtualizacao: new Date()
    }
    this._connection.open(function(err, mongoclient){
        mongoclient.collection("Users", function(err, collection){
            collection.update(
                {_id: objectId(req.params.id)},
                {$set:{nome: dados.nome, idade: dados.idade, permissao: dados.permissao, cpf: dados.cpf,
                dataAtualizacao: dados.dataAtualizacao}},
                {},
                function(err,result){
                    if(err){
                        res.json(err)
                    }else{
                        res.json(result)
                    }
                    mongoclient.close();
                }
                )
            
        });
    });
}
adminDAO.prototype.deleteUser = function(res, req){
    this._connection.open(function(err, mongoclient){
        mongoclient.collection("Users", function(err, collection){
            collection.remove({_id: objectId(req.params.id)}, function(err, result){
                
                    if(err){
                        res.json(err)
                    }else{
                        res.json(result)
                    }
                    mongoclient.close();
               
            })
            
        });
    });
}
module.exports = function(){
    return adminDAO;
}

