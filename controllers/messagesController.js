let messages = [
    {
        id : 1,
        text : "Mon 1er message"
    },
    {
        id : 2,
        text : "Mon 2eme message"
    },
    {
        id : 3,
        text : "Mon 3eme message"
    }

];
maxId = 3;

module.exports = {
    AfficherMesages : function (req,res ){
            res.status(200).json({
                "status" : "success",
                "data" : messages
            })
    },
    AjouterMessage : function(req,res) { 
        if ( typeof req.body.msg != "undefined"  ){
            let txt = req.body.msg;

            console.log(req.params.msg);
            maxId++;
            let objMsgJson = {
                id : maxId,
                text : txt
            };
            messages.push(objMsgJson);
            res.status(200).json({
                    "status" : "success",
                    "data" : messages
            });
        }
        else{
            res.status(404).json({
                "status" : "error",
                "message" : "Un paramètre n'a pas été fournis"
            });
        }
    }
    ,
    RecupererMessageParId : function(req,res) { 
        if ( typeof req.params.id != "undefined"  ){
            let id = req.params.id;
            let messagesFounded = messages.filter((p) => {
                return p.id == id
            });
            if(messagesFounded.length == 1 ){
                 res.status(200).json({
                    "status" : "success",
                    "data" : messagesFounded
               });
            }
            else{
                res.status(404).json({
                    "status" : "failed",
                    "data" : "Ceci n'était pas  prévu !"
               });
            }
            

            

        }
    }
}