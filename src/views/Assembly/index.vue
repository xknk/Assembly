<!--
 * @Author: Robin LEI
 * @Date: 2021-06-10 10:25:07
 * @LastEditTime: 2021-06-11 17:06:18
 * @FilePath: \Assembly\src\views\Assembly\index.vue
-->
<template>
    <div class="Assembly-box">
        <a-card class="list-box">
            <assembly-list />
        </a-card>
        <a-card class="template-box">
            <assembly-template />
        </a-card>
        <a-card class="option-box">
           222
        </a-card>
        <!-- <a-row :gutter="16" style="height: 100%">
            <a-col :span="4" style="height: 100%">
                <a-card class="list-box">
                    <assembly-list />
                </a-card>
            </a-col>
            <a-col :span="16" class="template-box">
                <assembly-template />
            </a-col>
            <a-col :span="4" class="option-box"> </a-col>
        </a-row> -->
    </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import assemblyList from "./components/List/index.vue";
import assemblyTemplate from "./components/Template/index.vue";
export default defineComponent({
    name: "Assembly",
    setup() {},
    components: {
        assemblyList,
        assemblyTemplate,
    },
    data() {
        return {};
    },
});
</script>
<style scoped>
.Assembly-box {
    display: flex;
}
.list-box {
    flex:1;
    height: 6.5rem;
    overflow-y: scroll;
    /* overflow-x: hidden; */
}
.template-box{
    flex:4;
}
.option-box{
    flex: 1;
}
::-webkit-scrollbar {
    /*滚动条整体样式*/
    width: .02rem; /*高宽分别对应横竖滚动条的尺寸*/
    height: .02rem !important;
}
::-webkit-scrollbar-thumb {
    /*滚动条里面小方块*/
    background-color: #1890ff;
}
</style>