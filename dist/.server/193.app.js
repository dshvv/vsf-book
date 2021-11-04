"use strict";
exports.id = 193;
exports.ids = [193];
exports.modules = {

/***/ 37193:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ basic_use_five)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(21666);
// EXTERNAL MODULE: ./node_modules/vue/server-renderer/index.mjs
var server_renderer = __webpack_require__(14498);
// EXTERNAL MODULE: ./node_modules/ant-design-vue/es/message/index.js
var message = __webpack_require__(61446);
;// CONCATENATED MODULE: ./node_modules/esbuild-loader/dist/index.js??clonedRuleSet-31.use[0]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/components/basic-use-five.vue?vue&type=script&lang=ts&setup=true





/* harmony default export */ const basic_use_fivevue_type_script_lang_ts_setup_true = (/* @__PURE__ */(0,external_vue_.defineComponent)({
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
        myRange: {
          title: "\u8303\u56F4",
          type: "range",
          default: [10, 50]
        },
        myRate: {
          title: "\u8BC4\u5206",
          type: "rate",
          default: 2
        },
        myTransfer: {
          title: "\u7A7F\u68AD\u6846",
          type: "transfer",
          enum: [
            {
              label: "\u9009\u98791",
              value: "1"
            },
            {
              label: "\u9009\u98792",
              value: "2"
            }
          ],
          default: ["2"]
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

;// CONCATENATED MODULE: ./docs/.vuepress/components/basic-use-five.vue?vue&type=script&lang=ts&setup=true
 
;// CONCATENATED MODULE: ./docs/.vuepress/components/basic-use-five.vue



const __exports__ = basic_use_fivevue_type_script_lang_ts_setup_true;

/* harmony default export */ const basic_use_five = (__exports__);

/***/ })

};
;
//# sourceMappingURL=193.app.js.map