/*
 * @Author: Robin LEI
 * @Date: 2021-06-10 09:13:08
 * @LastEditTime: 2021-06-10 09:35:29
 * @FilePath: \Assembly\mock\modules\admin.ts
 */
const role_path = {
    'admin-token': [{
        id:'1',
        name: '超级管理员',
        role_id:1,
        roleName:'超级管理员',
        createTime: '2021-06-09',
        isDisable: false,
    }, {
        id:'2',
        name: '管理员',
        roleName:'管理员',
        role_id:1,
        createTime: '2021-06-09',
        isDisable: true,
    }]
}
export default [
    // user login
    {
        url: '/admin/list',
        type: 'get',
        response: config => {
            const { token, page, size, order } = JSON.parse(config.body)
            const list = role_path[token]
            // mock error
            if (!list) {
                return {
                    code: -100,
                    message: '登录过期，请重新登录.'
                }
            }
            return {
                code: 1,
                data: list,
            }
        }
    }
]