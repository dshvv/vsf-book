/**
 * 扩展 VuePress 应用
 * https://v2.vuepress.vuejs.org/zh/reference/plugin-api.html#clientappenhancefiles
 */

import { defineClientAppEnhance } from '@vuepress/client'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import SchemaForm, {registerAntd} from 'v-schema-form';

registerAntd(Antd);

export default defineClientAppEnhance(({ app, router, siteData }) => {
    console.log(12333, app);
    app.use(Antd);
    app.use(SchemaForm);

    const languageVue = document.querySelectorAll('.language-vue');
    languageVue.onclick=function(e){
        console.log(e);
    }
})