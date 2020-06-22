/**
 * 有关用户行为的DaoS
 * HOUSUCHUAN
 * 20200617
 */

const querySql = require('../../db'),
    {addUserSql, getUserByMobileSql} = require('./userSqlMap')

module.exports = {
    //新增用户
    addUser(mobile = "", callback) {
        querySql({
                sql: addUserSql,
                values: [mobile, mobile],
                callback(res) {
                    console.log(res)
                }

            }
        )
    },
    //查询用户信息
    getUserByMobile(mobile = "", callback) {
        querySql(getUserByMobileSql, [mobile], (error, result) => {
            if (error) throw error;
            callback(result)
        })
    }
}




