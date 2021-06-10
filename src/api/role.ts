/*
 * @Author: Robin LEI
 * @Date: 2021-06-09 09:19:15
 * @LastEditTime: 2021-06-09 09:37:24
 * @FilePath: \Assembly\src\api\role.ts
 */
import request from '../utils/request'
export function roleList(params: any) {
    return request({
        url: '/role/list',
        method: 'get',
        data: params
    })
}