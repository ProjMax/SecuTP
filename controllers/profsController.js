const profs = require('../data/profs');

module.exports = {
    getAll : function (req,res ){
        let profsReturned =  profs.getAll();
        if ( !  profsReturned ) {
            res.status(404).json({
                "status" : "error",
                "message" : "Quelque chose ne s'est pas passé comme prévu !"
            });
        }
        else{
            res.status(200).json({
                "status" : "success",
                "data" : profsReturned
            })
        }
    },
    getById : function(req,res) { 
        if ( typeof req.params.id != "undefined"  ){
            let id = req.params.id;
            let prof = profs.getById(id);
            if( ! prof ){
                res.status(404).json({
                    "status" : "error",
                    "message" : "prof id invalide"
                });
                return;
            }
            res.status(200).json({
                    "status" : "success",
                    "data" : prof
            });
        }
        else{
            res.status(404).json({
                "status" : "error",
                "message" : "Le paramètre id n'a pas  été envoyé"
            });
        }
    },
    add : function(req,res) { 

        console.log(req.body);
        let nom = req.body.nom;
        let prenom =  req.body.prenom;
        let bureau = req.body.bureau;
        if( nom == null || prenom == null || bureau == null  ){
            res.status(409).json({
                "status" : "error",
                "message" : "DOnnées incomplètes pour prof"
            });
            return;
        }
        profs.add(nom, prenom, bureau );
        res.status(201).json({
            "status" : "success",
            "message" : "prof ajouté"
        });
     },
    update : function(req,res) { 
        let nom = req.body.nom;
        let prenom =  req.body.prenom;
        let bureau = req.body.bureau;
        let id = req.body.id;

            if(id == null || nom == null || prenom == null || bureau == null  ){
                res.status(409).json({
                    "status" : "error",
                    "message" : "Données incomplètes pour prof"
                });
                return;
            }
            if( ! profs.update(id, nom, prenom, bureau) ){
                    res.status(404).json({
                        "status" : "error",
                        "message" : "prof id invalide"
                    });
                    return;
            }
            res.status(204).json({
                "status" : "success",
                "message" : "Prof modifié"
            });
     },
    delete : function(req,res) { 
        let id = req.params.id;
        if( ! profs.deleteById ( id ) ){
            res.status(404).json({
                "status" : "error",
                "message" : "prof id invalide"
            });
            return;
        }
        res.status(204).json({
            "status" : "success",
            "message" : "prof supprimé"
        });
    },
}