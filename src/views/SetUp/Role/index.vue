<!--
 * @Author: Robin LEI
 * @Date: 2021-06-09 09:25:09
 * @LastEditTime: 2021-06-10 09:30:49
 * @FilePath: \Assembly\src\views\SetUp\Role\index.vue
-->
<template>
    <div>
        <my-table
            v-model:listArr="listArr"
            v-model:tabNameArr="tabNameArr"
            v-model:isSelection="isSelection"
            v-model:pagination="pagination"
            :optionArr='optionArr'
            :loading='loading'
            @sorterFunc="sorterFunc"
            @OptionFunc='OptionFunc'
        />
    </div>
</template>

<script>
import { defineComponent, reactive, ref } from "vue";
import { roleList } from "@/api/role";
import myTable from "@/components/common/table.vue";
export default defineComponent({
    setup() {
        let tabNameArr = reactive([
            {
                dataIndex: "id",
                key: "id",
                title: "id",
            },
            {
                dataIndex: "roleName",
                key: "roleName",
                title: "角色名称",
            },
            {
                dataIndex: "isDisable",
                key: "isDisable",
                title: "禁用",
                slots: { customRender: "is" },
                // width: 200
            },
            {
                dataIndex: "createTime",
                key: "createTime",
                title: "创建时间",
                sorter: true,
            },
            {
                dataIndex: "option",
                title: "操作", 
                key: "option", 
                slots: { customRender: "option" }
            },
        ]);
        let isSelection = ref(false);
        // 当有操作列时可配置
        let optionArr = [
            // {
            //     type: 'add',
            //     lable: '添加',
            //     color: ''
            // },
            {
                type: 'edit',
                lable: '编辑',
                color: ''
            },
            {
                type: 'info',
                lable: '详情',
                color: ''
            },
            {
                type: 'delect',
                lable: '删除',
                color: '#f5222d'
            },
        ]
        return {
            tabNameArr,
            isSelection,
            optionArr
        };
    },
    data() {
        return {
            listArr: [],
            pagination: {
                current: 1, // 当前页
                pageSize: 10, // 当前行数
                total: 2, // 总数
                // showSizeChanger: true, // 选择页码
                showQuickJumper: true, // 跳转页码
            },
            loading: false
        };
    },
    components: {
        myTable,
    },
    mounted() {
        this.initRoleListFunc();
    },
    methods: {
        /**
         * @description: 角色列表请求
         * @param {number | string} current
         * @param {number | string} sizpageSizee
         * @param {string} order
         */
        async initRoleListFunc(current = 1, pageSize = 10, order = "") {
            this.loading = true
            let Obj = await roleList({
                token: this.$store.getters.token,
                current: current,
                pageSize: pageSize,
                order: order,
            });
            if (Obj.data[0].id == 1) {
                Obj.data[0].isDisabled = true // 禁止开关
                Obj.data[0].isDelect = true // 禁止删除
                Obj.data[0].isEdit = false // 禁止编辑
                Obj.data[0].isAdd = true // 禁止添加
                Obj.data[0].isInfo = false // 禁止查看
            }
            this.listArr = Obj.data;
            this.loading = false
        },
        /**
         * @description: 排序、分页
         * @param {object} enevt
         */
        sorterFunc(enevt) {
            this.pagination = enevt.pagination;
            this.initRoleListFunc(
                enevt.pagination.current,
                enevt.pagination.pageSize,
                enevt.sorter.order
            );
        },
        /**
         * @description: 操作方法
         * @param {*} enevt
         */
        OptionFunc (enevt) {
            if (enevt.column) {
                enevt.record[enevt.column.dataIndex] = enevt.value
            } else {
                console.log(enevt)
            }
        },
    },
});
</script>

<style>
</style>