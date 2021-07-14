/*
 * @Author: Robin LEI
 * @Date: 2021-06-18 09:22:23
 * @LastEditTime: 2021-07-03 17:33:22
 * @FilePath: \Assembly\src\views\Assembly\components\Config\components\template.ts
 */
// import { echarsOptionData } from "../../../../../api/assembly";
const barTemplate: any = [{
    lable: '数据源',
    type: 'collapse',
    key: '1',
    lableCol: 8,
    wrapperCol: 15,
    emits: {},
    children: [{
        lable: '数据源',
        dataKey: 'dataList',
        valueKey: 'id',
        namekey: 'name',
        type: 'select',
        size: 'small',
        value: '',
        emits: {
            change:(event: [string | number],childrenItem : object, dataObj: object)=> {
                console.log(11111, event, childrenItem, dataObj)
            }
        },
        required: true,
    }]
},
{
    lable: '横轴配置',
    type: 'collapse',
    key: '2',
    lableCol: 8,
    wrapperCol: 15,
    emits: {},
    children: [{
        lable: '数据源',
        dataKey: 'dataList',
        valueKey: 'id',
        namekey: 'name',
        type: 'select',
        size: 'small',
        value: '',
        emits: {
            changa: 'dataFunc'
        },
        required: true,
    }]
},
{
    lable: '纵轴配置',
    type: 'collapse',
    key: '3',
    lableCol: 8,
    wrapperCol: 15,
    emits: {},
    children: [{
        lable: '数据源',
        dataKey: 'dataList',
        valueKey: 'id',
        namekey: 'name',
        type: 'select',
        size: 'small',
        value: '',
        emits: {
            changa: 'dataFunc'
        },
        required: true,
    }]
}]
export default {
    barTemplate
} 