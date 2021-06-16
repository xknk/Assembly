/*
 * @Author: Robin LEI
 * @Date: 2021-06-10 13:57:44
 * @LastEditTime: 2021-06-11 17:06:35
 * @FilePath: \Assembly\mock\modules\assembly .ts
 */
const assembly = {
    'admin-token': [{
        id:1,
        name:'基础组件',
        type: 0,
        children: [
            {
                id:4,
                name:'表格',
                type: 1,
            },
            {
                id:5,
                name:'输入框',
                type: 1,
            }
        ]
    },{
        id:2,
        name:'可视化组件',
        type: 0,
        children: [
            {
                id:6,
                name:'柱状图',
                type: 1,
            },
            {
                id:7,
                name:'折线图',
                type: 1,
            }
        ]
    },{
        id:3,
        name:'其他组件',
        type: 0,
    }]
}
export default [
    // user login
    {
        url: '/assembly/list',
        type: 'get',
        response: config => {
            const { token } = JSON.parse(config.body)
            const list = assembly[token]
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