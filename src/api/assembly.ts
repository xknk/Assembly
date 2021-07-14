/*
 * @Author: Robin LEI
 * @Date: 2021-06-10 14:32:42
 * @LastEditTime: 2021-07-03 17:32:12
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
export function echarsData(params: any) {
    return request({
        url: '/data/list',
        method: 'get',
        data: params
    })
}
export function echarsOptionData(params: any) {
    return request({
        url: '/echars/optionData',
        method: 'get',
        data: params
    })
}