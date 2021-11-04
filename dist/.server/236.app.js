"use strict";
exports.id = 236;
exports.ids = [236];
exports.modules = {

/***/ 10236:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ basic_use_one)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(21666);
// EXTERNAL MODULE: ./node_modules/vue/server-renderer/index.mjs
var server_renderer = __webpack_require__(14498);
// EXTERNAL MODULE: ./node_modules/ant-design-vue/es/message/index.js
var message = __webpack_require__(61446);
;// CONCATENATED MODULE: ./node_modules/esbuild-loader/dist/index.js??clonedRuleSet-31.use[0]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/components/basic-use-one.vue?vue&type=script&lang=ts&setup=true





/* harmony default export */ const basic_use_onevue_type_script_lang_ts_setup_true = (/* @__PURE__ */(0,external_vue_.defineComponent)({
  __ssrInlineRender: true,
  setup(__props) {
    const people = (0,external_vue_.ref)();
    const fields = {
      props: {
        section: true,
        spaceBetweenSection: 16,
        labelWidth: 120
      },
      fields: {
        name: {
          title: "\u59D3\u540D",
          type: "string",
          placeholder: "\u8BF7\u8F93\u5165\u6587\u672C"
        },
        nationality: {
          title: "\u56FD\u7C4D",
          type: "select",
          props: {
            options: [
              { label: "\u4E2D\u56FD", value: "china" },
              { label: "\u7F8E\u56FD", value: "american" }
            ]
          }
        }
      }
    };
    const actions = [
      {
        text: "\u63D0\u4EA4",
        props: { type: "primary" },
        action: ($) => {
          console.log(people.value);
          message/* default.success */.Z.success(JSON.stringify(people.value));
        }
      },
      {
        text: "\u91CD\u7F6E",
        action: () => {
          people.value = {};
        }
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_schema_form = (0,external_vue_.resolveComponent)("v-schema-form");
      _push((0,server_renderer.ssrRenderComponent)(_component_v_schema_form, (0,external_vue_.mergeProps)({
        value: people.value,
        "onUpdate:value": ($event) => people.value = $event,
        schema: fields,
        actions
      }, _attrs), null, _parent));
    };
  }
}));

;// CONCATENATED MODULE: ./docs/.vuepress/components/basic-use-one.vue?vue&type=script&lang=ts&setup=true
 
;// CONCATENATED MODULE: ./docs/.vuepress/components/basic-use-one.vue



const __exports__ = basic_use_onevue_type_script_lang_ts_setup_true;

/* harmony default export */ const basic_use_one = (__exports__);

/***/ })

};
;
//# sourceMappingURL=236.app.js.map