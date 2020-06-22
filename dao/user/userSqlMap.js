/**
 * 操作用户行为的mysql语句
 * HOUSUCHUAN
 * 20200617
 */

module.exports = {
    //用户注册
    addUserSql: 'insert into store_center(user_name, user_mobile,register_time) values(?, ?, now())',
    //查询用户
    getUserByMobileSql: 'select * from store_center where user_mobile = ?'
}
