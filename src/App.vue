<!--
 * @Author: Robin LEI
 * @Date: 2021-05-28 15:22:19
 * @LastEditTime: 2021-06-11 17:04:44
 * @FilePath: \Assembly\src\App.vue
-->
<template>
    <a-config-provider :locale="locale">
        <div id="app" ref='app'>
            <router-view />
        </div>
    </a-config-provider>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import zhCN from "ant-design-vue/es/locale/zh_CN";
export default defineComponent({
    name: "App",
    mounted() {
        // console.log(document.body.clientWidth, document.querySelector('#app').clientHeight)
        // <!--把window.onresize事件挂在到mounted函数上-->
        // window.onresize = () => {
        //     return (() => {
        //         this.windowHeight = document.documentElement.clientHeight;; // 高
        //         this.windowWidth =  document.documentElement.clientWidth; // 宽
        //     })();
        // };
        // let Obj:any = document.querySelector('body')
        // Obj.setAttribute('style', `transform:scale(${this.windowHeight/1080},${this.windowWidth/1920});`)
    },
    data() {
        return {
            locale: zhCN,
            // windowWidth: document.documentElement.clientWidth, //实时屏幕宽度
            // windowHeight: document.documentElement.clientHeight, //实时屏幕高度
        };
    },
    watch: {
        // windowHeight(val) {
        //     let Obj:any = document.querySelector('#app')
        //     Obj.setAttribute('style', `transform:scale(${val/1080},${this.windowWidth/1920});`)
        // },
        // windowWidth(val) {
        //     let Obj:any = document.querySelector('#app')
        //     Obj.setAttribute('style', `transform:scale(${this.windowHeight/1080},${val/1920});`)
        // }
    },
});
</script>
<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* width: 1920px;
    height: 1080px; */
    /* text-align: center; */
    /* color: #2c3e50; */
    /* margin-top: 60px; */
}
@media screen and (min-width: 1024px) {
    html {
        font-size: 25px;
    }
    h1 {
        font-size: 0.32rem;
    }
    body {
        font-size: 11px;
    }
    .approve-clock-start {
        display: block;
    }
}
@media all and (max-width: 1500px) {
    html {
        font-size: 73px;
    }
    h1 {
        font-size: 0.32rem;
    }
    body {
        font-size: 5px;
    }
    .approve-clock-start {
        display: block;
    }
}
@media screen and (min-width: 1500px) and (max-width: 1750px) {
    html {
        font-size: 85px;
    }
    h1 {
        font-size: 0.32rem;
    }
    body {
        font-size: 11px;
    }
}
@media screen and (min-width: 1750px) {
    html {
        font-size: 100px;
    }
    h1 {
        font-size: 0.32rem;
    }
    body {
        font-size: 16px;
    }
}
li {
    list-style-type: none;
}
</style>
