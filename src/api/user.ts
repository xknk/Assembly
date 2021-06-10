/*
 * @Author: Robin LEI
 * @Date: 2021-06-07 17:10:17
 * @LastEditTime: 2021-06-08 10:10:35
 * @FilePath: \Assembly\src\api\user.ts
 */
import request from '../utils/request'
export function login(data: any) {
    return request({
        url: '/user/login',//login接口地址
        method: 'post',
        data
    })
}