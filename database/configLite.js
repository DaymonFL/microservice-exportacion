const { Sequelize } = require("sequelize");
const { SQLite } = require('sqlite3');

/** Liga de conexión a Desarrollo
 * 
 */

const sqliteconnector = new Sequelize({
    host: 'localhost',
    dialect: 'sqlite',
    storage: 'database.db3',
    operatorsAliases: false,
    define: {
        timestamps: false
    },
    logging: true // false in dev Change in production
});


module.exports = {
    sqliteconnector
}
