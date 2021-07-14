<!--
 * @Author: Robin LEI
 * @Date: 2021-06-10 10:07:36
 * @LastEditTime: 2021-06-17 13:37:32
 * @FilePath: \Assembly\src\views\Assembly\components\Template\index.vue
-->
<template>
    <component :is="name" :assemblyDataObj='assemblyDataObj' style="height：100%"></component>
</template>
<script lang="ts">
import { defineComponent, defineAsyncComponent } from 'vue'
export default defineComponent({
    props:{
        assemblyDataObj: {
            type: Object,
            required: true,
            default: ()=>{}
        },
    },
    name: 'Template',
    setup() {
    },
    data () {
        return {
        }
    },
    computed: {
        name ():string {
            return this.assemblyDataObj && this.assemblyDataObj.type ? 
            'sub' + this.assemblyDataObj.type.charAt(0).toUpperCase() + this.assemblyDataObj.type.slice(1) 
            : ''
        } 
    },
    components: {
        subBar: defineAsyncComponent(() => import('./components/echars/bar.vue'))
    }
})
</script>