/**
 * 创建msql连接池
 * HOSUCHUAN
 * 20200617
 */

const mysql = require('mysql')

/**
 * create a mysql pool
 * @return {pool} a new pool
 * @public
 */
let pool = mysql.createPool({
        host: 'localhost',
        user: 'root',
        password: 'dzy19940416',
        database: 'tianMao_store_center',
        // 最大连接数，默认为10
        connectionLimit: 10
    }),
    query = function ({
                          sql = "", values = [], callback = function () {
        }
                      }) {
        pool.getConnection(function (err, connection) {
            // not connected!
            if (err) throw err;
            // Use the connection
            connection.query(sql, values, function (error, results, fields) {
                callback(results)
                // When done with the connection, release it.
                connection.release();
                // Handle error after the release.
                if (error) throw error;
                // Don't use the connection here, it has been returned to the pool.
            });
        });
    }

module.exports = query
