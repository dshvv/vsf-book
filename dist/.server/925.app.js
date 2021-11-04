"use strict";
exports.id = 925;
exports.ids = [925];
exports.modules = {

/***/ 62925:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ basic_use_two)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(21666);
// EXTERNAL MODULE: ./node_modules/vue/server-renderer/index.mjs
var server_renderer = __webpack_require__(14498);
// EXTERNAL MODULE: ./node_modules/ant-design-vue/es/message/index.js
var message = __webpack_require__(61446);
;// CONCATENATED MODULE: ./node_modules/esbuild-loader/dist/index.js??clonedRuleSet-31.use[0]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/components/basic-use-two.vue?vue&type=script&lang=ts&setup=true





/* harmony default export */ const basic_use_twovue_type_script_lang_ts_setup_true = (/* @__PURE__ */(0,external_vue_.defineComponent)({
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
          placeholder: "\u8BF7\u8F93\u5165\u6587\u672C",
          default: "\u4E01\u5C11\u534E"
        },
        nationality: {
          title: "\u56FD\u7C4D",
          type: "select",
          props: {
            options: [
              { label: "\u4E2D\u56FD", value: "china" },
              { label: "\u7F8E\u56FD", value: "american" }
            ]
          },
          default: "american"
        },
        remarks: {
          title: "\u5907\u6CE8",
          type: "text",
          default: "\u6211\u5F88\u597D\uFF0C\u4E0D\u7528\u62C5\u5FC3"
        },
        hobby: {
          title: "\u7231\u597D",
          type: "expand-select",
          array: true,
          props: {
            options: [
              {
                label: "\u6E38\u620F",
                value: 1
              },
              {
                label: "\u5B66\u4E60",
                value: 2
              }
            ]
          },
          default: "2"
        },
        expandSelect: {
          title: "\u6027\u522B",
          type: "expand-select",
          props: {
            options: [
              { label: "\u7537", value: "male" },
              { label: "\u5973", value: "female" }
            ]
          },
          default: "male"
        },
        switch: {
          title: "\u5F00\u5173",
          type: "boolean",
          property: "disabled",
          default: true
        },
        blogs: {
          title: "\u535A\u5BA2",
          rules: "url",
          type: "url",
          default: "http://dshvv.com"
        },
        age: {
          title: "\u5E74\u9F84",
          type: "integer",
          min: 0,
          max: 100,
          default: 20
        },
        height: {
          title: "\u8EAB\u9AD8",
          type: "double",
          default: 173.6
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

;// CONCATENATED MODULE: ./docs/.vuepress/components/basic-use-two.vue?vue&type=script&lang=ts&setup=true
 
;// CONCATENATED MODULE: ./docs/.vuepress/components/basic-use-two.vue



const __exports__ = basic_use_twovue_type_script_lang_ts_setup_true;

/* harmony default export */ const basic_use_two = (__exports__);

/***/ })

};
;
//# sourceMappingURL=925.app.js.map