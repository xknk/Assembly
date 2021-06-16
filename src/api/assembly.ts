/*
 * @Author: Robin LEI
 * @Date: 2021-06-10 14:32:42
 * @LastEditTime: 2021-06-10 14:33:02
 * @FilePath: \Assembly\src\api\assembly.ts
 */
import request from '../utils/request'
export function assemblyList(params: any) {
    return request({
        url: '/assembly/list',
        method: 'get',
        data: params
    })
}