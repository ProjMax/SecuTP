const dbConfig = require('../config');

const{ Sequelize, Op, DataTypes, QueryTypes } = require('sequelize');
const sequelize = new Sequelize (
    dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
        host : dbConfig.HOST,
        port : dbConfig.PORT,
        dialect : dbConfig.dialect,
        pool : {
            max : dbConfig.pool.max,
            min : dbConfig.pool.min,
            acquire : dbConfig.pool.acquire,
            idle : dbConfig.pool.idle
        },
        query : {
            raw : true
        }
    }
)



const profsModel = require ('./profsModel')( sequelize, DataTypes );
const messagesModel = require ('./messagesModel')( sequelize, DataTypes );

sequelize.sync();


module.exports = {
    db : sequelize,
    profsModel : profsModel,
    messagesModel : messagesModel
}