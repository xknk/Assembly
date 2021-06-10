/*
 * @Author: Robin LEI
 * @Date: 2021-06-07 17:00:36
 * @LastEditTime: 2021-06-08 14:05:16
 * @FilePath: \Assembly\mock\modules\user.ts
 */
// /*
//  * @Author: Robin LEI
//  * @Date: 2021-06-07 17:00:36
//  * @LastEditTime: 2021-06-08 09:16:06
//  * @FilePath: \Assembly\mock\user.js
//  */

const tokens = {
    admin: {
        token: 'admin-token',
        username: 'admin',
        role_path: ['/'],
        avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80'
    },
}
const users = {
    'admin-token': {
        roles: ['admin'],
        introduction: 'I am a super administrator',
        avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
        name: 'Super Admin'
    },
}
export default [
    // user login
    {
        url: '/user/login',
        type: 'post',
        response: config => {
            const { username } = JSON.parse(config.body)
            const token = tokens[username]
            // mock error
            if (!token) {
                return {
                    code: 0,
                    message: 'Account and password are incorrect.'
                }
            }
            return {
                code: 1,
                data: token,
            }
        }
    }
]
