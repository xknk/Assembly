<!--
 * @Author: Robin LEI
 * @Date: 2021-06-16 09:08:48
 * @LastEditTime: 2021-06-17 14:05:13
 * @FilePath: \Assembly\src\views\Assembly\components\Template\components\echars\common.vue
-->
<template>
    <VChart id='bar' ref='bar' class="chart" :option="option" />
</template>
<script lang="ts">
import { defineComponent, ref, reactive } from "vue";
import { CanvasRenderer,  } from "echarts/renderers";
import { LineChart, BarChart } from "echarts/charts";
import { use,init } from "echarts/core";
import VChart from "vue-echarts";
import { GridComponent } from "echarts/components";
use([CanvasRenderer, BarChart, GridComponent, LineChart]);
export default defineComponent({
    props: {
        option: {
            type: Object,
            required: true,
        },
    },
    setup() {
    },
    components: {
        VChart,
    },
    data() {
        return {
        };
    },
    mounted () {
    },
    methods: {
    },
});
</script>
<style scoped>
.chart {
    height: 100%;
}
</style>
