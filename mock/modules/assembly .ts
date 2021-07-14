/*
 * @Author: Robin LEI
 * @Date: 2021-06-10 13:57:44
 * @LastEditTime: 2021-07-03 17:33:01
 * @FilePath: \Assembly\mock\modules\assembly .ts
 */

/**
 * @description: 组件列表
 * @param {*}
 * @return {*}
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

const assemblyList =  {
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


// 内容
const dataArr = {
    bar:[
        {
            id: '1',
            name: '柱状图数据测试1',
        },
        {
            id: '2',
            name: '柱状图数据测试2',
        },
        {
            id: '3',
            name: '柱状图数据测试3',
        },
        {
            id: '4',
            name: '柱状图数据测试4',
        },
        {
            id: '5',
            name: '柱状图数据测试5',
        }
    ],
}
const dataList =  {
    url: '/data/list',
    type: 'get',
    response: config => {
        const { token, type } = JSON.parse(config.body)
        const list = dataArr[type] || []
        // mock error
        // if (!list) {
        //     return {
        //         code: -100,
        //         message: '登录过期，请重新登录.'
        //     }
        // }
        return {
            code: 1,
            data: list,
        }
    }
}

const echars = {
    bar:{
        id:1,
        textNmae:'柱状图',
        type: "bar",
        option: '{"xAxis":[{"type":"category","data":["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]}],"yAxis":{"type":"value"},"series":[{"name":"2222222222","type":"bar","data":[10,52,200,334,390]}]}',
    },
}
const echarsOptionData =  {
    url: '/echars/optionData',
    type: 'get',
    response: config => {
        const { token, type } = JSON.parse(config.body)
        const isToken = assembly[token]
        // mock error
        if (!isToken) {
            return {
                code: -100,
                message: '登录过期，请重新登录.'
            }
        }
        const data = echars[type]
        return {
            code: 1,
            data: data,
        }
    }
}
export default  [
    assemblyList,
    echarsOptionData,
    dataList
]
