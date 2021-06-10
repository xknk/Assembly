/*
 * @Author: Robin LEI
 * @Date: 2021-06-09 09:07:26
 * @LastEditTime: 2021-06-09 15:49:48
 * @FilePath: \Assembly\mock\modules\role.ts
 */
const role_path = {
    'admin-token': [{
        id:'1',
        roleName: '超级管理员',
        pathId:'1,2',
        createTime: '2021-06-09',
        isDisable: false,
    }, {
        id:'3',
        roleName: '管理员',
        pathId:'1',
        createTime: '2021-06-08',
        isDisable: true,
    }]
}
export default [
    // user login
    {
        url: '/role/list',
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