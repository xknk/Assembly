/*
 * @Author: Robin LEI
 * @Date: 2021-06-10 09:15:52
 * @LastEditTime: 2021-06-10 09:16:10
 * @FilePath: \Assembly\src\api\admin.ts
 */
import request from '../utils/request'
export function adminList(params: any) {
    return request({
        url: '/admin/list',
        method: 'get',
        data: params
    })
}