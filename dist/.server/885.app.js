"use strict";
exports.id = 885;
exports.ids = [885];
exports.modules = {

/***/ 63885:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ basic_use_four)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(21666);
// EXTERNAL MODULE: ./node_modules/vue/server-renderer/index.mjs
var server_renderer = __webpack_require__(14498);
// EXTERNAL MODULE: ./node_modules/ant-design-vue/es/message/index.js
var message = __webpack_require__(61446);
;// CONCATENATED MODULE: ./node_modules/esbuild-loader/dist/index.js??clonedRuleSet-31.use[0]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/components/basic-use-four.vue?vue&type=script&lang=ts&setup=true





/* harmony default export */ const basic_use_fourvue_type_script_lang_ts_setup_true = (/* @__PURE__ */(0,external_vue_.defineComponent)({
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
        myFile1: {
          title: "\u666E\u901A\u4E0A\u4F20",
          type: "file",
          props: {
            action: "https://www.mocky.io/v2/5cc8019d300000980a055e76"
          }
        },
        myFile2: {
          title: "\u62D6\u62FD\u4E0A\u4F20",
          type: "file",
          props: {
            action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
            mode: "dragger"
          }
        },
        myFile3: {
          title: "\u5361\u7247\u4E0A\u4F20",
          type: "file",
          props: {
            action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
            mode: "card"
          }
        },
        myFile4: {
          title: "\u4E0A\u4F20\u56FE\u7247",
          type: "picture",
          props: {
            action: "https://www.mocky.io/v2/5cc8019d300000980a055e76"
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

;// CONCATENATED MODULE: ./docs/.vuepress/components/basic-use-four.vue?vue&type=script&lang=ts&setup=true
 
;// CONCATENATED MODULE: ./docs/.vuepress/components/basic-use-four.vue



const __exports__ = basic_use_fourvue_type_script_lang_ts_setup_true;

/* harmony default export */ const basic_use_four = (__exports__);

/***/ })

};
;
//# sourceMappingURL=885.app.js.map