<!--
 * @Author: Robin LEI
 * @Date: 2021-06-09 09:38:56
 * @LastEditTime: 2021-06-10 09:02:13
 * @FilePath: \Assembly\src\components\common\table.vue
-->
<template>
    <div>
        <a-table
            v-if="isSelection"
            :row-selection="rowSelection"
            :columns="tabNameArr"
            :data-source="listArr"
            :row-key="(record) => record.id"
            :pagination='pagination'
            :loading="loading"
            @change="TbaChangeFunc"
            @expand="expandFunc"
            @expandedRowsChange="expandedRowsChangeFunc"
        >
            <template #name="{ text }">
                <a>{{ text }}</a>
            </template>
            <template #is="{ text: is, column, record }">
                <a-switch
                    checked-children="开"
                    un-checked-children="关"
                    :checked="is"
                    @change="switchFunc(column, record)"
                />
            </template>
            <template #option="{ record }">
                <span v-for="item in optionArr" :key='item.type'>
                    <a @click="OptionFunc(record, item.type)" :style="'color:'+ item.color">{{item.lable}}</a>
                    <a-divider type="vertical" />
                </span>
            </template>
        </a-table>
        <a-table
            v-if="!isSelection"
            :columns="tabNameArr"
            :data-source="listArr"
            :row-key="(record) => record.id"
            :pagination='pagination'
            @change="TbaChangeFunc"
            @expand="expandFunc"
            :loading="loading"
            @expandedRowsChange="expandedRowsChangeFunc"
        >
            <template #name="{ text }">
                <a>{{ text }}</a>
            </template>
            <template #is="{ text: is, column, record }">
                <a-switch
                    checked-children="开"
                    un-checked-children="关"
                    :checked="is"
                    @change="switchFunc(column, record)"
                />
            </template>
            <template #option="{ record }">
                <span v-for="item in optionArr" :key='item.type'>
                    <a  v-if="item.type == 'add' && record.isAdd" disabled>{{item.lable}}</a>
                    <a  v-else-if="item.type == 'edit' && record.isEdit" disabled>{{item.lable}}</a>
                    <a  v-else-if="item.type == 'info' && record.isInfo" disabled>{{item.lable}}</a>
                    <a  v-else-if="item.type == 'delect' && record.isDisabled" disabled>{{item.lable}}</a>
                    <a v-else @click="OptionFunc(record, item.type)" :style="'color:'+ item.color">{{item.lable}}</a>
                    <a-divider type="vertical" />
                </span>
            </template>
        </a-table>
    </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import { ColumnProps } from "ant-design-vue/es/table/interface";
type Key = ColumnProps['key'];
interface DataType {
    key: Key;
    name: string;
    age: number;
    address: string;
    isDisabled: boolean
}
export default defineComponent({
    props: {
        listArr: {
            default: () => [],
            required: true,
            type: [Array],
        },
        pagination: {
            default: () => ({
                current: 1,
                pageSize: 10,
                total: 100
            }),
            type: [Object],
        },
        tabNameArr: {
            default: () => [],
            required: true,
            type: [Array],
        },
        isSelection: {
            default: false,
            type: [Boolean],
        },
        optionArr: {
            default: () => [],
            type: [Array],
        },
        loading: {
            default: () => false,
            required: true,
            type: [Boolean],
        }
    },
    emits: [
        'sorterFunc', 
        'expandFunc', 
        'expandedRowsChangeFunc', 
        'OptionFunc',
        'switchFunc'
    ],
    setup() {
        const state = reactive<{
            selectedRowKeys: Key[];
        }>({
            selectedRowKeys: [], // Check here to configure the default column
        });
        
        const rowSelection = {
            /**
             * @description: 点击多选/单选框事件
             * @param {*} selectedRowKeys 存储选择的key
             * @param {*} selectedRows 勾选的行数据
             * @return {*}
             */            
            onChange: (selectedRowKeys: Key[], selectedRows: DataType[]) => {
                state.selectedRowKeys = selectedRowKeys;
            },
            /**
             * @description: 筛选行是否禁止勾选
             * @param {Object} record 行数据
             */            
            getCheckboxProps: (record: DataType) => {
                return {
                    disabled: record.isDisabled ? record.isDisabled : false,
                }
            },
            // type: 'radio', // 选项类型
        };
        return {
            rowSelection,
            ...toRefs(state),
        };
    },
    methods: {
        /**
         * @description: 开关事件
         * @param {Object} column 列数据
         * @param {Object} record 行数据
         */ 
        switchFunc(column: { dataIndex: string }, record: Object) {
            this.$emit('OptionFunc', {record, column, value: !record[column.dataIndex]})
        },
        /**
         * @description: 分页、排序、筛选变化时触发
         * @param {*} pagination 页码信息
         * @param {*} filters 筛选信息
         * @param {*} sorter 排序信息
         * @return {*}
         */        
        TbaChangeFunc(pagination: any, filters: any, sorter: any) {
            this.$emit('sorterFunc', {
                pagination,
                filters,
                sorter
            })
        },
        /**
         * @description: 点击展开图标时触发
         * @param {boolean} expanded
         * @param {Object} record
        **/        
        expandFunc (expanded: boolean, record: Object) {
            this.$emit('expandFunc', {expanded, record})
        },
        /**
         * @description: 展开的行变化时触发
         * @param {*} expandedRows
         */        
        expandedRowsChangeFunc (expandedRows: Object) {
            this.$emit('expandFunc', expandedRows)
        },
        /**
         * @description: 操作方法
         * @param {*} record 行数据
         * @param {*} type 类型
         * @return {*}
         */ 
        OptionFunc (record: Object, type: string) {
            this.$emit('OptionFunc', {record, type})
        }
    }
});
</script>
<style scoped>
</style>