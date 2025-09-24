module.exports = {
    HOST : 'localhost',
    USER : 'root',
    PASSWORD : 'root',
    PORT : 8889,
    DB : 'orm-demo',
    dialect : 'mysql',
    pool : {
        max: 5,
        min : 0,
        aquire : 30000,
        idle : 10000
    }
};