var objectId = require('mongodb').ObjectId;
var mv = require('mv');
function adminDAO(connection){
    
    this._connection = connection();
}

adminDAO.prototype.insertUser= function(user,res, req){
    var dados ={
        nome: user.nome,
        idade: user.idade,
        permisao: user.permisao,
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
adminDAO.prototype.listarArtigos = function(res){
    var result
    this._connection.open(function(err, mongoclient){
        mongoclient.collection("Artigo", function(err, collection){
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
adminDAO.prototype.listarArtigoById = function(res, req){
    this._connection.open(function(err, mongoclient){
        mongoclient.collection("Artigo", function(err, collection){
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
adminDAO.prototype.listarArtigoByCategoria = function(res, req){
    this._connection.open(function(err, mongoclient){
        mongoclient.collection("Artigo", function(err, collection){
            collection.find({categoria:{$eq:req.params.id }}).toArray(function(err, result){
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
adminDAO.prototype.updateArtigo = function(res, req){
   
    var dados ={
        titulo: req.body.titulo,
        palavras: req.body.palavras.split(","),
        categoria: req.body.categoria.split(","),
        artigo: req.body.artigo,
    }
    this._connection.open(function(err, mongoclient){
        mongoclient.collection("Artigo", function(err, collection){
            collection.update(
                {_id: objectId(req.params.id)},
                {$set:{titulo:dados.titulo, palavras:dados.palavras, categoria: dados.categoria, artigo: dados.artigo}},
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
adminDAO.prototype.deleteArtigo = function(res, req){
    this._connection.open(function(err, mongoclient){
        mongoclient.collection("Artigo", function(err, collection){
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

