<template>
    <div>
        <my-table
            v-model:listArr="listArr"
            v-model:tabNameArr="tabNameArr"
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
import { adminList } from "@/api/admin";
import myTable from "@/components/common/table.vue";
export default defineComponent({
    name: 'Admin',
    setup() {
        let tabNameArr = reactive([
            {
                dataIndex: "id",
                key: "id",
                title: "id",
            },
            {
                dataIndex: "name",
                key: "name",
                title: "用户名称",
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
        let optionArr = [
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
            optionArr
        };
    },
    data() {
        return {
            listArr: [],
            pagination: {
                current : 1, // 当前页
                pageSize: 10, // 当前行数
                total: 2, // 总数
                showQuickJumper: true, // 跳转页码
            },
            loading: false
        }
    },
    components: {
        myTable
    },
    mounted () {
        this.initAdminListFunc();
    },
    methods: {
        /**
         * @description: 用户列表请求
         * @param {number | string} current
         * @param {number | string} sizpageSizee
         * @param {string} order
         */
        async initAdminListFunc (current = 1, pageSize = 10, order = "") {
            this.loading = true
            let Obj = await adminList({
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
    }
})
</script>