<!--
 * @Author: Robin LEI
 * @Date: 2021-06-10 10:06:18
 * @LastEditTime: 2021-06-28 09:52:22
 * @FilePath: \Assembly\src\views\Assembly\components\List\index.vue
-->
<template>
    <a-directory-tree
        v-model:expandedKeys="expandedKeys"
        v-model:selectedKeys="selectedKeys"
        :tree-data="AssemblyListArr"
        :replaceFields='replaceFields'
        @select='select'
    >
    </a-directory-tree>
</template>
<script>
import { defineComponent } from "vue";
import { assemblyList } from "@/api/assembly";
export default defineComponent({
    name: "AssemblyList",
    setup() {},
    data() {
        return {
            expandedKeys: [],
            selectedKeys: [],
            AssemblyListArr: [],
            replaceFields:{
                title: 'name',
                key: 'id'
            }
        };
    },
    components: {
    },
    mounted() {
        this.initAssemblyListFunc();
    },
    watch: {
    },
    emits:['clickAssembly'],
    methods: {
        async initAssemblyListFunc(treeNode) {
            let { data } = await assemblyList({
                token: this.$store.getters.token,
            });
            this.AssemblyListArr = this.initLeaf(data)
            this.selectedKeys = [this.AssemblyListArr[0].id]
            this.expandedKeys = [this.AssemblyListArr[0].id]
        },
        initLeaf (Arr = []) {
            Arr.forEach(item=>{
                if (item.type == 1) {
                    item.isLeaf = true
                } else {
                    item.children = this.initLeaf(item.children)
                }
            })
            return Arr
        },
        select ([id], e) {
            if (e.node.isLeaf) {
                this.$emit('clickAssembly', id)
            }
        }
    },
});
</script>