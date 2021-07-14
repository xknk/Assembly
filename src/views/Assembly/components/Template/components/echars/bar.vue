<!--
 * @Author: Robin LEI
 * @Date: 2021-06-16 09:16:06
 * @LastEditTime: 2021-06-17 14:06:01
 * @FilePath: \Assembly\src\views\Assembly\components\Template\components\echars\bar.vue
-->
<template>
    <my-chart  style="height：100%" :option='data'/>
</template>
<script lang="ts">
import { defineComponent, reactive, ref, } from 'vue'
import myChart from './common.vue'
export default defineComponent({
    props: {
        assemblyDataObj: {
            type: Object,
            required: true,
            default: ()=>{}
        }
    },
    setup(props, content) {
        let { option } = props.assemblyDataObj
        let data = reactive<Object>({
            xAxis: option.xAxis,
            yAxis: option.yAxis,
            series: option.series,
        })
        return {
            data
        }
    },
    components: {
        myChart
    },
    mounted () {
    
    }
})
</script>