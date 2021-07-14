/*
 * @Author: Robin LEI
 * @Date: 2021-06-07 16:16:15
 * @LastEditTime: 2021-06-28 14:30:48
 * @FilePath: \Assembly\src\utils\request.ts
 */
import axios from 'axios'
import { message } from 'ant-design-vue';
import store from '../store/index'//vuex状态存储器（token）
const service:any = axios.create({
    baseURL: '/', // import.meta.env.VITE_APP_BASE
    timeout: 5000,
})
service.interceptors.request.use(
    (config: any)=> {
        config.headers['Authentication'] = store.getters.token ? store.getters.token : ''
        config.headers['Content-Type'] = 'application/json;charset=UTF-8'
        return config
    },
    (error: any) => {
        console.log(error) 
        return Promise.reject(error)
    }
)
service.interceptors.response.use(
    (response: any)=>{
        const res = response.data
        if(res.code !== 1) {
            if (res.code === -100) {
                message.error('登录已失效，请重新登录')
                store.dispatch('user/resetToken').then(() => {
                    location.reload()
                })
            } else {
                message.error(res.message || '网络错误')
            }
            return Promise.reject(res)
        } else {
            return res
        }
    }, (error: { message: any }) => {
        message.error(error.message)
        return Promise.reject(error)
    }
)
export default service

