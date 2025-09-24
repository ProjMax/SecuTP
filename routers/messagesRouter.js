const express = require ('express');
const messagesController = require('../controllers/messagesController');

function buildRoutes(){
    let router = express.Router();

    router.route('/messages/').get(messagesController.AfficherMesages);
    router.route('/messages/:id').get(messagesController.RecupererMessageParId);
    router.route('/messages/').post(messagesController.AjouterMessage);
    return router;
}

exports.router = buildRoutes();