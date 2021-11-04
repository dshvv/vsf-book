"use strict";
exports.id = 371;
exports.ids = [371];
exports.modules = {

/***/ 48879:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-43927100",
  "path": "/2.%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8.html",
  "title": "基本使用",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "入门例子",
      "slug": "入门例子",
      "children": []
    },
    {
      "level": 2,
      "title": "稍复杂例子",
      "slug": "稍复杂例子",
      "children": []
    },
    {
      "level": 2,
      "title": "日期与时间",
      "slug": "日期与时间",
      "children": []
    },
    {
      "level": 2,
      "title": "文件上传",
      "slug": "文件上传",
      "children": []
    },
    {
      "level": 2,
      "title": "其它类型表单",
      "slug": "其它类型表单",
      "children": []
    }
  ],
  "filePathRelative": "2.基本使用.md",
  "git": {
    "updatedTime": 1636017812000,
    "contributors": [
      {
        "name": "丁少华",
        "email": "dingshaohua@aegis-data.cn",
        "commits": 3
      },
      {
        "name": "丁少华",
        "email": "960423114@qq.com",
        "commits": 1
      }
    ]
  }
}


/***/ }),

/***/ 94177:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _2_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(21666);
// EXTERNAL MODULE: ./node_modules/vue/server-renderer/index.mjs
var server_renderer = __webpack_require__(14498);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/2.基本使用.html.vue?vue&type=template&id=b5a749d0



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_effect_code = (0,external_vue_.resolveComponent)("effect-code")

  _push(`<!--[--><h1 id="基本使用" tabindex="-1"><a class="header-anchor" href="#基本使用" aria-hidden="true">#</a> 基本使用</h1><h2 id="入门例子" tabindex="-1"><a class="header-anchor" href="#入门例子" aria-hidden="true">#</a> 入门例子</h2><p>演示一个最基本、最简单的使用方式</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_effect_code, { cmp: "basic-use-one" }, {
    code: (0,external_vue_.withCtx)((slotProps, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-vue ext-vue line-numbers-mode"${
          _scopeId
        }><pre class="language-vue"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;</span>template</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
  <span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;</span>v-schema-form</span> <span class="token attr-name"${
          _scopeId
        }><span class="token namespace"${
          _scopeId
        }>v-model:</span>value</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>people<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span> <span class="token attr-name"${
          _scopeId
        }>:schema</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>fields<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span> <span class="token attr-name"${
          _scopeId
        }>:actions</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>actions<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span> <span class="token punctuation"${
          _scopeId
        }>/&gt;</span></span>
<span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;/</span>template</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
<span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;</span>script</span> <span class="token attr-name"${
          _scopeId
        }>lang</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>ts<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span> <span class="token attr-name"${
          _scopeId
        }>setup</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span><span class="token script"${
          _scopeId
        }><span class="token language-javascript"${
          _scopeId
        }>
<span class="token keyword"${
          _scopeId
        }>import</span> <span class="token punctuation"${
          _scopeId
        }>{</span> ref <span class="token punctuation"${
          _scopeId
        }>}</span> <span class="token keyword"${
          _scopeId
        }>from</span> <span class="token string"${
          _scopeId
        }>&quot;vue&quot;</span><span class="token punctuation"${
          _scopeId
        }>;</span>
<span class="token keyword"${
          _scopeId
        }>import</span> <span class="token punctuation"${
          _scopeId
        }>{</span> message <span class="token punctuation"${
          _scopeId
        }>}</span> <span class="token keyword"${
          _scopeId
        }>from</span> <span class="token string"${
          _scopeId
        }>&quot;ant-design-vue&quot;</span><span class="token punctuation"${
          _scopeId
        }>;</span>
<span class="token keyword"${
          _scopeId
        }>const</span> people <span class="token operator"${
          _scopeId
        }>=</span> <span class="token function"${
          _scopeId
        }>ref</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>;</span>
<span class="token keyword"${
          _scopeId
        }>const</span> fields<span class="token operator"${
          _scopeId
        }>:</span> <span class="token punctuation"${
          _scopeId
        }>{</span> <span class="token punctuation"${
          _scopeId
        }>[</span>key<span class="token operator"${
          _scopeId
        }>:</span> string<span class="token punctuation"${
          _scopeId
        }>]</span><span class="token operator"${
          _scopeId
        }>:</span> any <span class="token punctuation"${
          _scopeId
        }>}</span> <span class="token operator"${
          _scopeId
        }>=</span> <span class="token punctuation"${
          _scopeId
        }>{</span>
  props<span class="token operator"${
          _scopeId
        }>:</span> <span class="token punctuation"${
          _scopeId
        }>{</span>
    section<span class="token operator"${
          _scopeId
        }>:</span> <span class="token boolean"${
          _scopeId
        }>true</span><span class="token punctuation"${
          _scopeId
        }>,</span>
    spaceBetweenSection<span class="token operator"${
          _scopeId
        }>:</span> <span class="token number"${
          _scopeId
        }>16</span><span class="token punctuation"${
          _scopeId
        }>,</span>
    labelWidth<span class="token operator"${
          _scopeId
        }>:</span> <span class="token number"${
          _scopeId
        }>120</span><span class="token punctuation"${
          _scopeId
        }>,</span>
  <span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>,</span>
  fields<span class="token operator"${
          _scopeId
        }>:</span> <span class="token punctuation"${
          _scopeId
        }>{</span>
    name<span class="token operator"${
          _scopeId
        }>:</span> <span class="token punctuation"${
          _scopeId
        }>{</span>
      title<span class="token operator"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&quot;姓名&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span>
      type<span class="token operator"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&quot;string&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span>
      placeholder<span class="token operator"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&quot;请输入文本&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span>
    <span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>,</span>
    nationality<span class="token operator"${
          _scopeId
        }>:</span> <span class="token punctuation"${
          _scopeId
        }>{</span>
      title<span class="token operator"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&quot;国籍&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span>
      type<span class="token operator"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&quot;select&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span>
      props<span class="token operator"${
          _scopeId
        }>:</span> <span class="token punctuation"${
          _scopeId
        }>{</span>
        options<span class="token operator"${
          _scopeId
        }>:</span> <span class="token punctuation"${
          _scopeId
        }>[</span>
          <span class="token punctuation"${
          _scopeId
        }>{</span> label<span class="token operator"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&quot;中国&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span> value<span class="token operator"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&quot;china&quot;</span> <span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>,</span>
          <span class="token punctuation"${
          _scopeId
        }>{</span> label<span class="token operator"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&quot;美国&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span> value<span class="token operator"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&quot;american&quot;</span> <span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>,</span>
        <span class="token punctuation"${
          _scopeId
        }>]</span><span class="token punctuation"${
          _scopeId
        }>,</span>
      <span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>,</span>
    <span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>,</span>
  <span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>,</span>
<span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>;</span>
<span class="token keyword"${
          _scopeId
        }>const</span> actions <span class="token operator"${
          _scopeId
        }>=</span> <span class="token punctuation"${
          _scopeId
        }>[</span>
  <span class="token punctuation"${
          _scopeId
        }>{</span>
    text<span class="token operator"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&quot;提交&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span>
    props<span class="token operator"${
          _scopeId
        }>:</span> <span class="token punctuation"${
          _scopeId
        }>{</span> type<span class="token operator"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&quot;primary&quot;</span> <span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>,</span>
    <span class="token function-variable function"${
          _scopeId
        }>action</span><span class="token operator"${
          _scopeId
        }>:</span> <span class="token punctuation"${
          _scopeId
        }>(</span><span class="token parameter"${
          _scopeId
        }>\$</span><span class="token punctuation"${
          _scopeId
        }>)</span> <span class="token operator"${
          _scopeId
        }>=&gt;</span> <span class="token punctuation"${
          _scopeId
        }>{</span>
      console<span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>log</span><span class="token punctuation"${
          _scopeId
        }>(</span>people<span class="token punctuation"${
          _scopeId
        }>.</span>value<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>;</span>
      message<span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>success</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token constant"${
          _scopeId
        }>JSON</span><span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>stringify</span><span class="token punctuation"${
          _scopeId
        }>(</span>people<span class="token punctuation"${
          _scopeId
        }>.</span>value<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>;</span>
    <span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>,</span>
  <span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>,</span>
  <span class="token punctuation"${
          _scopeId
        }>{</span>
    text<span class="token operator"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&quot;重置&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span>
    <span class="token function-variable function"${
          _scopeId
        }>action</span><span class="token operator"${
          _scopeId
        }>:</span> <span class="token punctuation"${
          _scopeId
        }>(</span><span class="token punctuation"${
          _scopeId
        }>)</span> <span class="token operator"${
          _scopeId
        }>=&gt;</span> <span class="token punctuation"${
          _scopeId
        }>{</span>
      people<span class="token punctuation"${
          _scopeId
        }>.</span>value <span class="token operator"${
          _scopeId
        }>=</span> <span class="token punctuation"${
          _scopeId
        }>{</span><span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>;</span>
    <span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>,</span>
  <span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>,</span>
<span class="token punctuation"${
          _scopeId
        }>]</span><span class="token punctuation"${
          _scopeId
        }>;</span>
</span></span><span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;/</span>script</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
</code></pre><div class="line-numbers"${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>1</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>2</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>3</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>4</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>5</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>6</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>7</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>8</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>9</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>10</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>11</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>12</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>13</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>14</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>15</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>16</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>17</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>18</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>19</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>20</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>21</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>22</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>23</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>24</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>25</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>26</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>27</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>28</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>29</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>30</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>31</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>32</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>33</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>34</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>35</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>36</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>37</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>38</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>39</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>40</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>41</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>42</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>43</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>44</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>45</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>46</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>47</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>48</span><br${
          _scopeId
        }></div></div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("div", { class: "language-vue ext-vue line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-vue" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                    (0,external_vue_.createTextVNode)("template")
                  ]),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                ]),
                (0,external_vue_.createTextVNode)("\r\n  "),
                (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                    (0,external_vue_.createTextVNode)("v-schema-form")
                  ]),
                  (0,external_vue_.createTextVNode)(),
                  (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                    (0,external_vue_.createVNode)("span", { class: "token namespace" }, "v-model:"),
                    (0,external_vue_.createTextVNode)("value")
                  ]),
                  (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                    (0,external_vue_.createTextVNode)("people"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                  ]),
                  (0,external_vue_.createTextVNode)(),
                  (0,external_vue_.createVNode)("span", { class: "token attr-name" }, ":schema"),
                  (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                    (0,external_vue_.createTextVNode)("fields"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                  ]),
                  (0,external_vue_.createTextVNode)(),
                  (0,external_vue_.createVNode)("span", { class: "token attr-name" }, ":actions"),
                  (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                    (0,external_vue_.createTextVNode)("actions"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                  ]),
                  (0,external_vue_.createTextVNode)(),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "/>")
                ]),
                (0,external_vue_.createTextVNode)("\r\n"),
                (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                    (0,external_vue_.createTextVNode)("template")
                  ]),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                ]),
                (0,external_vue_.createTextVNode)("\r\n"),
                (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                    (0,external_vue_.createTextVNode)("script")
                  ]),
                  (0,external_vue_.createTextVNode)(),
                  (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "lang"),
                  (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                    (0,external_vue_.createTextVNode)("ts"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                  ]),
                  (0,external_vue_.createTextVNode)(),
                  (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "setup"),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                ]),
                (0,external_vue_.createVNode)("span", { class: "token script" }, [
                  (0,external_vue_.createVNode)("span", { class: "token language-javascript" }, [
                    (0,external_vue_.createTextVNode)("\r\n"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "import"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)(" ref "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "from"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"vue\""),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ";"),
                    (0,external_vue_.createTextVNode)("\r\n"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "import"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)(" message "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "from"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"ant-design-vue\""),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ";"),
                    (0,external_vue_.createTextVNode)("\r\n"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                    (0,external_vue_.createTextVNode)(" people "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "ref"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ";"),
                    (0,external_vue_.createTextVNode)("\r\n"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                    (0,external_vue_.createTextVNode)(" fields"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "["),
                    (0,external_vue_.createTextVNode)("key"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(" string"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "]"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(" any "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\r\n  props"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\r\n    section"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token boolean" }, "true"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n    spaceBetweenSection"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token number" }, "16"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n    labelWidth"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token number" }, "120"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n  "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n  fields"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\r\n    name"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\r\n      title"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"姓名\""),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n      type"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"string\""),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n      placeholder"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"请输入文本\""),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n    nationality"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\r\n      title"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"国籍\""),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n      type"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"select\""),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n      props"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\r\n        options"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "["),
                    (0,external_vue_.createTextVNode)("\r\n          "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)(" label"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"中国\""),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)(" value"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"china\""),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n          "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)(" label"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"美国\""),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)(" value"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"american\""),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n        "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "]"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n      "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n  "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ";"),
                    (0,external_vue_.createTextVNode)("\r\n"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                    (0,external_vue_.createTextVNode)(" actions "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "["),
                    (0,external_vue_.createTextVNode)("\r\n  "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\r\n    text"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"提交\""),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n    props"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)(" type"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"primary\""),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token function-variable function" }, "action"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token parameter" }, "$"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "=>"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\r\n      console"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "log"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("people"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("value"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ";"),
                    (0,external_vue_.createTextVNode)("\r\n      message"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "success"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token constant" }, "JSON"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "stringify"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("people"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("value"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ";"),
                    (0,external_vue_.createTextVNode)("\r\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n  "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n  "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\r\n    text"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"重置\""),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token function-variable function" }, "action"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "=>"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\r\n      people"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("value "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ";"),
                    (0,external_vue_.createTextVNode)("\r\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n  "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "]"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ";"),
                    (0,external_vue_.createTextVNode)("\r\n")
                  ])
                ]),
                (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                    (0,external_vue_.createTextVNode)("script")
                  ]),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                ]),
                (0,external_vue_.createTextVNode)("\n")
              ])
            ]),
            (0,external_vue_.createVNode)("div", { class: "line-numbers" }, [
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "1"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "2"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "3"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "4"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "5"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "6"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "7"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "8"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "9"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "10"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "11"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "12"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "13"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "14"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "15"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "16"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "17"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "18"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "19"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "20"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "21"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "22"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "23"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "24"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "25"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "26"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "27"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "28"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "29"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "30"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "31"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "32"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "33"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "34"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "35"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "36"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "37"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "38"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "39"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "40"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "41"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "42"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "43"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "44"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "45"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "46"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "47"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "48"),
              (0,external_vue_.createVNode)("br")
            ])
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h2 id="稍复杂例子" tabindex="-1"><a class="header-anchor" href="#稍复杂例子" aria-hidden="true">#</a> 稍复杂例子</h2><p>包含了更多的表单类型</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_effect_code, { cmp: "basic-use-two" }, {
    code: (0,external_vue_.withCtx)((slotProps, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-vue ext-vue line-numbers-mode"${
          _scopeId
        }><pre class="language-vue"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;</span>template</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
  <span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;</span>v-schema-form</span> <span class="token attr-name"${
          _scopeId
        }><span class="token namespace"${
          _scopeId
        }>v-model:</span>value</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>people<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span> <span class="token attr-name"${
          _scopeId
        }>:schema</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>fields<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span> <span class="token attr-name"${
          _scopeId
        }>:actions</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>actions<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span> <span class="token punctuation"${
          _scopeId
        }>/&gt;</span></span>
<span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;/</span>template</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
<span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;</span>script</span> <span class="token attr-name"${
          _scopeId
        }>lang</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>ts<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span> <span class="token attr-name"${
          _scopeId
        }>setup</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span><span class="token script"${
          _scopeId
        }><span class="token language-javascript"${
          _scopeId
        }>
<span class="token keyword"${
          _scopeId
        }>import</span> <span class="token punctuation"${
          _scopeId
        }>{</span> ref <span class="token punctuation"${
          _scopeId
        }>}</span> <span class="token keyword"${
          _scopeId
        }>from</span> <span class="token string"${
          _scopeId
        }>&quot;vue&quot;</span><span class="token punctuation"${
          _scopeId
        }>;</span>
<span class="token keyword"${
          _scopeId
        }>import</span> <span class="token punctuation"${
          _scopeId
        }>{</span> message <span class="token punctuation"${
          _scopeId
        }>}</span> <span class="token keyword"${
          _scopeId
        }>from</span> <span class="token string"${
          _scopeId
        }>&quot;ant-design-vue&quot;</span><span class="token punctuation"${
          _scopeId
        }>;</span>
<span class="token keyword"${
          _scopeId
        }>const</span> people <span class="token operator"${
          _scopeId
        }>=</span> <span class="token function"${
          _scopeId
        }>ref</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>;</span>
<span class="token keyword"${
          _scopeId
        }>const</span> fields<span class="token operator"${
          _scopeId
        }>:</span> <span class="token punctuation"${
          _scopeId
        }>{</span> <span class="token punctuation"${
          _scopeId
        }>[</span>key<span class="token operator"${
          _scopeId
        }>:</span> string<span class="token punctuation"${
          _scopeId
        }>]</span><span class="token operator"${
          _scopeId
        }>:</span> any <span class="token punctuation"${
          _scopeId
        }>}</span> <span class="token operator"${
          _scopeId
        }>=</span> <span class="token punctuation"${
          _scopeId
        }>{</span>
  props<span class="token operator"${
          _scopeId
        }>:</span> <span class="token punctuation"${
          _scopeId
        }>{</span>
    section<span class="token operator"${
          _scopeId
        }>:</span> <span class="token boolean"${
          _scopeId
        }>true</span><span class="token punctuation"${
          _scopeId
        }>,</span>
    spaceBetweenSection<span class="token operator"${
          _scopeId
        }>:</span> <span class="token number"${
          _scopeId
        }>16</span><span class="token punctuation"${
          _scopeId
        }>,</span>
    labelWidth<span class="token operator"${
          _scopeId
        }>:</span> <span class="token number"${
          _scopeId
        }>120</span><span class="token punctuation"${
          _scopeId
        }>,</span>
  <span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>,</span>
  fields<span class="token operator"${
          _scopeId
        }>:</span> <span class="token punctuation"${
          _scopeId
        }>{</span>
    name<span class="token operator"${
          _scopeId
        }>:</span> <span class="token punctuation"${
          _scopeId
        }>{</span>
      title<span class="token operator"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&quot;姓名&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span>
      type<span class="token operator"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&quot;string&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span>
      placeholder<span class="token operator"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&quot;请输入文本&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span>
      <span class="token keyword"${
          _scopeId
        }>default</span><span class="token operator"${
          _scopeId
        }>:</span><span class="token string"${
          _scopeId
        }>&#39;丁少华&#39;</span>
    <span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>,</span>
    nationality<span class="token operator"${
          _scopeId
        }>:</span> <span class="token punctuation"${
          _scopeId
        }>{</span>
      title<span class="token operator"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&quot;国籍&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span>
      type<span class="token operator"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&quot;select&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span>
      props<span class="token operator"${
          _scopeId
        }>:</span> <span class="token punctuation"${
          _scopeId
        }>{</span>
        options<span class="token operator"${
          _scopeId
        }>:</span> <span class="token punctuation"${
          _scopeId
        }>[</span>
          <span class="token punctuation"${
          _scopeId
        }>{</span> label<span class="token operator"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&quot;中国&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span> value<span class="token operator"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&quot;china&quot;</span> <span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>,</span>
          <span class="token punctuation"${
          _scopeId
        }>{</span> label<span class="token operator"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&quot;美国&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span> value<span class="token operator"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&quot;american&quot;</span> <span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>,</span>
        <span class="token punctuation"${
          _scopeId
        }>]</span><span class="token punctuation"${
          _scopeId
        }>,</span>
      <span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>,</span>
      <span class="token keyword"${
          _scopeId
        }>default</span><span class="token operator"${
          _scopeId
        }>:</span><span class="token string"${
          _scopeId
        }>&#39;american&#39;</span>
    <span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>,</span>
    remarks<span class="token operator"${
          _scopeId
        }>:</span> <span class="token punctuation"${
          _scopeId
        }>{</span>
      title<span class="token operator"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&quot;备注&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span>
      type<span class="token operator"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&quot;text&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span>
      <span class="token keyword"${
          _scopeId
        }>default</span><span class="token operator"${
          _scopeId
        }>:</span><span class="token string"${
          _scopeId
        }>&#39;我很好，不用担心&#39;</span>
    <span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>,</span>
    hobby<span class="token operator"${
          _scopeId
        }>:</span> <span class="token punctuation"${
          _scopeId
        }>{</span>
      title<span class="token operator"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&quot;爱好&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span>
      type<span class="token operator"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&quot;expand-select&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span>
      array<span class="token operator"${
          _scopeId
        }>:</span> <span class="token boolean"${
          _scopeId
        }>true</span><span class="token punctuation"${
          _scopeId
        }>,</span>
      props<span class="token operator"${
          _scopeId
        }>:</span> <span class="token punctuation"${
          _scopeId
        }>{</span>
        options<span class="token operator"${
          _scopeId
        }>:</span> <span class="token punctuation"${
          _scopeId
        }>[</span>
          <span class="token punctuation"${
          _scopeId
        }>{</span>
            label<span class="token operator"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&quot;游戏&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span>
            value<span class="token operator"${
          _scopeId
        }>:</span> <span class="token number"${
          _scopeId
        }>1</span><span class="token punctuation"${
          _scopeId
        }>,</span>
          <span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>,</span>
          <span class="token punctuation"${
          _scopeId
        }>{</span>
            label<span class="token operator"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&quot;学习&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span>
            value<span class="token operator"${
          _scopeId
        }>:</span> <span class="token number"${
          _scopeId
        }>2</span><span class="token punctuation"${
          _scopeId
        }>,</span>
          <span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>,</span>
        <span class="token punctuation"${
          _scopeId
        }>]</span><span class="token punctuation"${
          _scopeId
        }>,</span>
      <span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>,</span>
      <span class="token keyword"${
          _scopeId
        }>default</span><span class="token operator"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&#39;2&#39;</span>
    <span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>,</span>
    expandSelect<span class="token operator"${
          _scopeId
        }>:</span> <span class="token punctuation"${
          _scopeId
        }>{</span>
      title<span class="token operator"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&quot;性别&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span>
      type<span class="token operator"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&quot;expand-select&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span>
      props<span class="token operator"${
          _scopeId
        }>:</span> <span class="token punctuation"${
          _scopeId
        }>{</span>
        options<span class="token operator"${
          _scopeId
        }>:</span> <span class="token punctuation"${
          _scopeId
        }>[</span>
          <span class="token punctuation"${
          _scopeId
        }>{</span> label<span class="token operator"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&quot;男&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span> value<span class="token operator"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&quot;male&quot;</span> <span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>,</span>
          <span class="token punctuation"${
          _scopeId
        }>{</span> label<span class="token operator"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&quot;女&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span> value<span class="token operator"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&quot;female&quot;</span> <span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>,</span>
        <span class="token punctuation"${
          _scopeId
        }>]</span><span class="token punctuation"${
          _scopeId
        }>,</span>
      <span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>,</span>
      <span class="token keyword"${
          _scopeId
        }>default</span><span class="token operator"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&#39;male&#39;</span>
    <span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>,</span>
    <span class="token keyword"${
          _scopeId
        }>switch</span><span class="token operator"${
          _scopeId
        }>:</span> <span class="token punctuation"${
          _scopeId
        }>{</span>
      title<span class="token operator"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&quot;开关&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span>
      type<span class="token operator"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&quot;boolean&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span>
      property<span class="token operator"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&quot;disabled&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span>
      <span class="token keyword"${
          _scopeId
        }>default</span><span class="token operator"${
          _scopeId
        }>:</span> <span class="token boolean"${
          _scopeId
        }>true</span>
    <span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>,</span>
    blogs<span class="token operator"${
          _scopeId
        }>:</span> <span class="token punctuation"${
          _scopeId
        }>{</span>
      title<span class="token operator"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&quot;博客&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span>
      rules<span class="token operator"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&quot;url&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span>
      type<span class="token operator"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&quot;url&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span>
      <span class="token keyword"${
          _scopeId
        }>default</span><span class="token operator"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&#39;http://dshvv.com&#39;</span>
    <span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>,</span>
    age<span class="token operator"${
          _scopeId
        }>:</span> <span class="token punctuation"${
          _scopeId
        }>{</span>
      title<span class="token operator"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&quot;年龄&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span>
      type<span class="token operator"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&quot;integer&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span>
      min<span class="token operator"${
          _scopeId
        }>:</span> <span class="token number"${
          _scopeId
        }>0</span><span class="token punctuation"${
          _scopeId
        }>,</span>
      max<span class="token operator"${
          _scopeId
        }>:</span> <span class="token number"${
          _scopeId
        }>100</span><span class="token punctuation"${
          _scopeId
        }>,</span>
      <span class="token keyword"${
          _scopeId
        }>default</span><span class="token operator"${
          _scopeId
        }>:</span> <span class="token number"${
          _scopeId
        }>20</span>
    <span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>,</span>
    height<span class="token operator"${
          _scopeId
        }>:</span> <span class="token punctuation"${
          _scopeId
        }>{</span>
      title<span class="token operator"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&quot;身高&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span>
      type<span class="token operator"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&quot;double&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span>
      <span class="token keyword"${
          _scopeId
        }>default</span><span class="token operator"${
          _scopeId
        }>:</span> <span class="token number"${
          _scopeId
        }>173.6</span>
    <span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>,</span>
  <span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>,</span>
<span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>;</span>
<span class="token keyword"${
          _scopeId
        }>const</span> actions <span class="token operator"${
          _scopeId
        }>=</span> <span class="token punctuation"${
          _scopeId
        }>[</span>
  <span class="token punctuation"${
          _scopeId
        }>{</span>
    text<span class="token operator"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&quot;提交&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span>
    props<span class="token operator"${
          _scopeId
        }>:</span> <span class="token punctuation"${
          _scopeId
        }>{</span> type<span class="token operator"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&quot;primary&quot;</span> <span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>,</span>
    <span class="token function-variable function"${
          _scopeId
        }>action</span><span class="token operator"${
          _scopeId
        }>:</span> <span class="token punctuation"${
          _scopeId
        }>(</span><span class="token parameter"${
          _scopeId
        }>\$</span><span class="token punctuation"${
          _scopeId
        }>)</span> <span class="token operator"${
          _scopeId
        }>=&gt;</span> <span class="token punctuation"${
          _scopeId
        }>{</span>
      console<span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>log</span><span class="token punctuation"${
          _scopeId
        }>(</span>people<span class="token punctuation"${
          _scopeId
        }>.</span>value<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>;</span>
      message<span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>success</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token constant"${
          _scopeId
        }>JSON</span><span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>stringify</span><span class="token punctuation"${
          _scopeId
        }>(</span>people<span class="token punctuation"${
          _scopeId
        }>.</span>value<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>;</span>
    <span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>,</span>
  <span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>,</span>
  <span class="token punctuation"${
          _scopeId
        }>{</span>
    text<span class="token operator"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&quot;重置&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span>
    <span class="token function-variable function"${
          _scopeId
        }>action</span><span class="token operator"${
          _scopeId
        }>:</span> <span class="token punctuation"${
          _scopeId
        }>(</span><span class="token punctuation"${
          _scopeId
        }>)</span> <span class="token operator"${
          _scopeId
        }>=&gt;</span> <span class="token punctuation"${
          _scopeId
        }>{</span>
      people<span class="token punctuation"${
          _scopeId
        }>.</span>value <span class="token operator"${
          _scopeId
        }>=</span> <span class="token punctuation"${
          _scopeId
        }>{</span><span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>;</span>
    <span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>,</span>
  <span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>,</span>
<span class="token punctuation"${
          _scopeId
        }>]</span><span class="token punctuation"${
          _scopeId
        }>;</span>
</span></span><span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;/</span>script</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
</code></pre><div class="line-numbers"${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>1</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>2</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>3</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>4</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>5</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>6</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>7</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>8</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>9</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>10</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>11</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>12</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>13</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>14</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>15</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>16</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>17</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>18</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>19</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>20</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>21</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>22</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>23</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>24</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>25</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>26</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>27</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>28</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>29</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>30</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>31</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>32</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>33</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>34</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>35</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>36</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>37</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>38</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>39</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>40</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>41</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>42</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>43</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>44</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>45</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>46</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>47</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>48</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>49</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>50</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>51</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>52</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>53</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>54</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>55</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>56</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>57</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>58</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>59</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>60</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>61</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>62</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>63</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>64</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>65</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>66</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>67</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>68</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>69</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>70</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>71</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>72</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>73</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>74</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>75</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>76</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>77</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>78</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>79</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>80</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>81</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>82</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>83</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>84</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>85</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>86</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>87</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>88</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>89</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>90</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>91</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>92</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>93</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>94</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>95</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>96</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>97</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>98</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>99</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>100</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>101</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>102</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>103</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>104</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>105</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>106</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>107</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>108</span><br${
          _scopeId
        }></div></div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("div", { class: "language-vue ext-vue line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-vue" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                    (0,external_vue_.createTextVNode)("template")
                  ]),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                ]),
                (0,external_vue_.createTextVNode)("\r\n  "),
                (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                    (0,external_vue_.createTextVNode)("v-schema-form")
                  ]),
                  (0,external_vue_.createTextVNode)(),
                  (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                    (0,external_vue_.createVNode)("span", { class: "token namespace" }, "v-model:"),
                    (0,external_vue_.createTextVNode)("value")
                  ]),
                  (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                    (0,external_vue_.createTextVNode)("people"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                  ]),
                  (0,external_vue_.createTextVNode)(),
                  (0,external_vue_.createVNode)("span", { class: "token attr-name" }, ":schema"),
                  (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                    (0,external_vue_.createTextVNode)("fields"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                  ]),
                  (0,external_vue_.createTextVNode)(),
                  (0,external_vue_.createVNode)("span", { class: "token attr-name" }, ":actions"),
                  (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                    (0,external_vue_.createTextVNode)("actions"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                  ]),
                  (0,external_vue_.createTextVNode)(),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "/>")
                ]),
                (0,external_vue_.createTextVNode)("\r\n"),
                (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                    (0,external_vue_.createTextVNode)("template")
                  ]),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                ]),
                (0,external_vue_.createTextVNode)("\r\n"),
                (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                    (0,external_vue_.createTextVNode)("script")
                  ]),
                  (0,external_vue_.createTextVNode)(),
                  (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "lang"),
                  (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                    (0,external_vue_.createTextVNode)("ts"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                  ]),
                  (0,external_vue_.createTextVNode)(),
                  (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "setup"),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                ]),
                (0,external_vue_.createVNode)("span", { class: "token script" }, [
                  (0,external_vue_.createVNode)("span", { class: "token language-javascript" }, [
                    (0,external_vue_.createTextVNode)("\r\n"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "import"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)(" ref "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "from"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"vue\""),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ";"),
                    (0,external_vue_.createTextVNode)("\r\n"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "import"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)(" message "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "from"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"ant-design-vue\""),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ";"),
                    (0,external_vue_.createTextVNode)("\r\n"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                    (0,external_vue_.createTextVNode)(" people "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "ref"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ";"),
                    (0,external_vue_.createTextVNode)("\r\n"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                    (0,external_vue_.createTextVNode)(" fields"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "["),
                    (0,external_vue_.createTextVNode)("key"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(" string"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "]"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(" any "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\r\n  props"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\r\n    section"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token boolean" }, "true"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n    spaceBetweenSection"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token number" }, "16"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n    labelWidth"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token number" }, "120"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n  "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n  fields"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\r\n    name"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\r\n      title"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"姓名\""),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n      type"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"string\""),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n      placeholder"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"请输入文本\""),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n      "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "default"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "'丁少华'"),
                    (0,external_vue_.createTextVNode)("\r\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n    nationality"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\r\n      title"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"国籍\""),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n      type"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"select\""),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n      props"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\r\n        options"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "["),
                    (0,external_vue_.createTextVNode)("\r\n          "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)(" label"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"中国\""),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)(" value"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"china\""),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n          "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)(" label"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"美国\""),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)(" value"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"american\""),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n        "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "]"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n      "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n      "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "default"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "'american'"),
                    (0,external_vue_.createTextVNode)("\r\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n    remarks"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\r\n      title"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"备注\""),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n      type"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"text\""),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n      "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "default"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "'我很好，不用担心'"),
                    (0,external_vue_.createTextVNode)("\r\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n    hobby"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\r\n      title"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"爱好\""),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n      type"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"expand-select\""),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n      array"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token boolean" }, "true"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n      props"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\r\n        options"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "["),
                    (0,external_vue_.createTextVNode)("\r\n          "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\r\n            label"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"游戏\""),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n            value"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token number" }, "1"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n          "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n          "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\r\n            label"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"学习\""),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n            value"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token number" }, "2"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n          "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n        "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "]"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n      "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n      "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "default"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "'2'"),
                    (0,external_vue_.createTextVNode)("\r\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n    expandSelect"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\r\n      title"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"性别\""),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n      type"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"expand-select\""),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n      props"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\r\n        options"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "["),
                    (0,external_vue_.createTextVNode)("\r\n          "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)(" label"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"男\""),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)(" value"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"male\""),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n          "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)(" label"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"女\""),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)(" value"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"female\""),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n        "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "]"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n      "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n      "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "default"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "'male'"),
                    (0,external_vue_.createTextVNode)("\r\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "switch"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\r\n      title"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"开关\""),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n      type"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"boolean\""),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n      property"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"disabled\""),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n      "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "default"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token boolean" }, "true"),
                    (0,external_vue_.createTextVNode)("\r\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n    blogs"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\r\n      title"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"博客\""),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n      rules"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"url\""),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n      type"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"url\""),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n      "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "default"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "'http://dshvv.com'"),
                    (0,external_vue_.createTextVNode)("\r\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n    age"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\r\n      title"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"年龄\""),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n      type"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"integer\""),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n      min"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token number" }, "0"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n      max"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token number" }, "100"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n      "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "default"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token number" }, "20"),
                    (0,external_vue_.createTextVNode)("\r\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n    height"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\r\n      title"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"身高\""),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n      type"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"double\""),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n      "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "default"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token number" }, "173.6"),
                    (0,external_vue_.createTextVNode)("\r\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n  "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ";"),
                    (0,external_vue_.createTextVNode)("\r\n"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                    (0,external_vue_.createTextVNode)(" actions "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "["),
                    (0,external_vue_.createTextVNode)("\r\n  "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\r\n    text"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"提交\""),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n    props"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)(" type"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"primary\""),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token function-variable function" }, "action"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token parameter" }, "$"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "=>"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\r\n      console"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "log"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("people"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("value"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ";"),
                    (0,external_vue_.createTextVNode)("\r\n      message"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "success"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token constant" }, "JSON"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "stringify"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("people"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("value"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ";"),
                    (0,external_vue_.createTextVNode)("\r\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n  "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n  "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\r\n    text"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"重置\""),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token function-variable function" }, "action"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "=>"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\r\n      people"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("value "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ";"),
                    (0,external_vue_.createTextVNode)("\r\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n  "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "]"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ";"),
                    (0,external_vue_.createTextVNode)("\r\n")
                  ])
                ]),
                (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                    (0,external_vue_.createTextVNode)("script")
                  ]),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                ]),
                (0,external_vue_.createTextVNode)("\n")
              ])
            ]),
            (0,external_vue_.createVNode)("div", { class: "line-numbers" }, [
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "1"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "2"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "3"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "4"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "5"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "6"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "7"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "8"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "9"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "10"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "11"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "12"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "13"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "14"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "15"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "16"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "17"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "18"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "19"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "20"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "21"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "22"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "23"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "24"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "25"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "26"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "27"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "28"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "29"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "30"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "31"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "32"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "33"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "34"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "35"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "36"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "37"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "38"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "39"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "40"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "41"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "42"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "43"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "44"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "45"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "46"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "47"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "48"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "49"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "50"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "51"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "52"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "53"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "54"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "55"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "56"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "57"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "58"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "59"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "60"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "61"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "62"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "63"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "64"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "65"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "66"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "67"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "68"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "69"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "70"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "71"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "72"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "73"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "74"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "75"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "76"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "77"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "78"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "79"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "80"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "81"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "82"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "83"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "84"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "85"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "86"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "87"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "88"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "89"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "90"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "91"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "92"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "93"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "94"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "95"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "96"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "97"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "98"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "99"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "100"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "101"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "102"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "103"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "104"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "105"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "106"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "107"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "108"),
              (0,external_vue_.createVNode)("br")
            ])
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h2 id="日期与时间" tabindex="-1"><a class="header-anchor" href="#日期与时间" aria-hidden="true">#</a> 日期与时间</h2><p>包含了几乎所有用到的<code>时间选择器</code>的表单类型</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_effect_code, { cmp: "basic-use-three" }, {
    code: (0,external_vue_.withCtx)((slotProps, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-vue ext-vue line-numbers-mode"${
          _scopeId
        }><pre class="language-vue"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;</span>template</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
  <span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;</span>v-schema-form</span> <span class="token attr-name"${
          _scopeId
        }><span class="token namespace"${
          _scopeId
        }>v-model:</span>value</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>people<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span> <span class="token attr-name"${
          _scopeId
        }>:schema</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>fields<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span> <span class="token attr-name"${
          _scopeId
        }>:actions</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>actions<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span> <span class="token punctuation"${
          _scopeId
        }>/&gt;</span></span>
<span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;/</span>template</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
<span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;</span>script</span> <span class="token attr-name"${
          _scopeId
        }>lang</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>ts<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span> <span class="token attr-name"${
          _scopeId
        }>setup</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span><span class="token script"${
          _scopeId
        }><span class="token language-javascript"${
          _scopeId
        }>
<span class="token keyword"${
          _scopeId
        }>import</span> <span class="token punctuation"${
          _scopeId
        }>{</span> ref <span class="token punctuation"${
          _scopeId
        }>}</span> <span class="token keyword"${
          _scopeId
        }>from</span> <span class="token string"${
          _scopeId
        }>&quot;vue&quot;</span><span class="token punctuation"${
          _scopeId
        }>;</span>
<span class="token keyword"${
          _scopeId
        }>import</span> <span class="token punctuation"${
          _scopeId
        }>{</span> message <span class="token punctuation"${
          _scopeId
        }>}</span> <span class="token keyword"${
          _scopeId
        }>from</span> <span class="token string"${
          _scopeId
        }>&quot;ant-design-vue&quot;</span><span class="token punctuation"${
          _scopeId
        }>;</span>
<span class="token keyword"${
          _scopeId
        }>const</span> people <span class="token operator"${
          _scopeId
        }>=</span> <span class="token function"${
          _scopeId
        }>ref</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>;</span>
<span class="token keyword"${
          _scopeId
        }>const</span> fields<span class="token operator"${
          _scopeId
        }>:</span> <span class="token punctuation"${
          _scopeId
        }>{</span> <span class="token punctuation"${
          _scopeId
        }>[</span>key<span class="token operator"${
          _scopeId
        }>:</span> string<span class="token punctuation"${
          _scopeId
        }>]</span><span class="token operator"${
          _scopeId
        }>:</span> any <span class="token punctuation"${
          _scopeId
        }>}</span> <span class="token operator"${
          _scopeId
        }>=</span> <span class="token punctuation"${
          _scopeId
        }>{</span>
  props<span class="token operator"${
          _scopeId
        }>:</span> <span class="token punctuation"${
          _scopeId
        }>{</span>
    section<span class="token operator"${
          _scopeId
        }>:</span> <span class="token boolean"${
          _scopeId
        }>true</span><span class="token punctuation"${
          _scopeId
        }>,</span>
    spaceBetweenSection<span class="token operator"${
          _scopeId
        }>:</span> <span class="token number"${
          _scopeId
        }>16</span><span class="token punctuation"${
          _scopeId
        }>,</span>
    labelWidth<span class="token operator"${
          _scopeId
        }>:</span> <span class="token number"${
          _scopeId
        }>120</span><span class="token punctuation"${
          _scopeId
        }>,</span>
  <span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>,</span>
  fields<span class="token operator"${
          _scopeId
        }>:</span> <span class="token punctuation"${
          _scopeId
        }>{</span>
    year<span class="token operator"${
          _scopeId
        }>:</span> <span class="token punctuation"${
          _scopeId
        }>{</span>
      title<span class="token operator"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&quot;年&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span>
      type<span class="token operator"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&quot;year&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span>
      <span class="token keyword"${
          _scopeId
        }>default</span><span class="token operator"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&#39;2022&#39;</span>
    <span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>,</span>
    month<span class="token operator"${
          _scopeId
        }>:</span> <span class="token punctuation"${
          _scopeId
        }>{</span>
      title<span class="token operator"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&quot;月&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span>
      type<span class="token operator"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&quot;month&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span>
      <span class="token keyword"${
          _scopeId
        }>default</span><span class="token operator"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&#39;12&#39;</span>
    <span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>,</span>
    date<span class="token operator"${
          _scopeId
        }>:</span> <span class="token punctuation"${
          _scopeId
        }>{</span>
      title<span class="token operator"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&quot;日&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span>
      type<span class="token operator"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&quot;date&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span>
      <span class="token keyword"${
          _scopeId
        }>default</span><span class="token operator"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&#39;2022-2-22&#39;</span>
    <span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>,</span>
    <span class="token string"${
          _scopeId
        }>&quot;[startDate, endDate]&quot;</span><span class="token operator"${
          _scopeId
        }>:</span> <span class="token punctuation"${
          _scopeId
        }>{</span>
      title<span class="token operator"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&quot;日期范围&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span>
      type<span class="token operator"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&quot;daterange&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span>
      <span class="token comment"${
          _scopeId
        }>// default: &quot;[&#39;2022-1-11&#39;,&#39;2022-2-22&#39;]&quot;</span>
    <span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>,</span>
    time<span class="token operator"${
          _scopeId
        }>:</span> <span class="token punctuation"${
          _scopeId
        }>{</span>
      title<span class="token operator"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&quot;时间&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span>
      type<span class="token operator"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&quot;time&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span>
      <span class="token keyword"${
          _scopeId
        }>default</span><span class="token operator"${
          _scopeId
        }>:</span><span class="token string"${
          _scopeId
        }>&#39;13:01:00&#39;</span>
    <span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>,</span>
    timerange<span class="token operator"${
          _scopeId
        }>:</span> <span class="token punctuation"${
          _scopeId
        }>{</span>
      title<span class="token operator"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&quot;时间范围&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span>
      type<span class="token operator"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&quot;timerange&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span>
      <span class="token keyword"${
          _scopeId
        }>default</span><span class="token operator"${
          _scopeId
        }>:</span><span class="token punctuation"${
          _scopeId
        }>[</span><span class="token string"${
          _scopeId
        }>&#39;13:01:00&#39;</span><span class="token punctuation"${
          _scopeId
        }>,</span><span class="token string"${
          _scopeId
        }>&#39;14:00:00&#39;</span><span class="token punctuation"${
          _scopeId
        }>]</span>
    <span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>,</span>
    datetime<span class="token operator"${
          _scopeId
        }>:</span> <span class="token punctuation"${
          _scopeId
        }>{</span>
      title<span class="token operator"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&quot;日期时间&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span>
      type<span class="token operator"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&quot;datetime&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span>
      <span class="token keyword"${
          _scopeId
        }>default</span><span class="token operator"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&#39;2022-2-22 13:01:00&#39;</span>
    <span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>,</span>
  <span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>,</span>
<span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>;</span>
<span class="token keyword"${
          _scopeId
        }>const</span> actions <span class="token operator"${
          _scopeId
        }>=</span> <span class="token punctuation"${
          _scopeId
        }>[</span>
  <span class="token punctuation"${
          _scopeId
        }>{</span>
    text<span class="token operator"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&quot;提交&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span>
    props<span class="token operator"${
          _scopeId
        }>:</span> <span class="token punctuation"${
          _scopeId
        }>{</span> type<span class="token operator"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&quot;primary&quot;</span> <span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>,</span>
    <span class="token function-variable function"${
          _scopeId
        }>action</span><span class="token operator"${
          _scopeId
        }>:</span> <span class="token punctuation"${
          _scopeId
        }>(</span><span class="token parameter"${
          _scopeId
        }>\$</span><span class="token punctuation"${
          _scopeId
        }>)</span> <span class="token operator"${
          _scopeId
        }>=&gt;</span> <span class="token punctuation"${
          _scopeId
        }>{</span>
      console<span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>log</span><span class="token punctuation"${
          _scopeId
        }>(</span>people<span class="token punctuation"${
          _scopeId
        }>.</span>value<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>;</span>
      message<span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>success</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token constant"${
          _scopeId
        }>JSON</span><span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>stringify</span><span class="token punctuation"${
          _scopeId
        }>(</span>people<span class="token punctuation"${
          _scopeId
        }>.</span>value<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>;</span>
    <span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>,</span>
  <span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>,</span>
  <span class="token punctuation"${
          _scopeId
        }>{</span>
    text<span class="token operator"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&quot;重置&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span>
    <span class="token function-variable function"${
          _scopeId
        }>action</span><span class="token operator"${
          _scopeId
        }>:</span> <span class="token punctuation"${
          _scopeId
        }>(</span><span class="token punctuation"${
          _scopeId
        }>)</span> <span class="token operator"${
          _scopeId
        }>=&gt;</span> <span class="token punctuation"${
          _scopeId
        }>{</span>
      people<span class="token punctuation"${
          _scopeId
        }>.</span>value <span class="token operator"${
          _scopeId
        }>=</span> <span class="token punctuation"${
          _scopeId
        }>{</span><span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>;</span>
    <span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>,</span>
  <span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>,</span>
<span class="token punctuation"${
          _scopeId
        }>]</span><span class="token punctuation"${
          _scopeId
        }>;</span>
</span></span><span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;/</span>script</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
</code></pre><div class="line-numbers"${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>1</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>2</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>3</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>4</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>5</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>6</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>7</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>8</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>9</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>10</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>11</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>12</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>13</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>14</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>15</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>16</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>17</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>18</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>19</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>20</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>21</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>22</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>23</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>24</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>25</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>26</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>27</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>28</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>29</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>30</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>31</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>32</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>33</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>34</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>35</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>36</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>37</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>38</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>39</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>40</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>41</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>42</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>43</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>44</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>45</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>46</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>47</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>48</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>49</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>50</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>51</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>52</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>53</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>54</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>55</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>56</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>57</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>58</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>59</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>60</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>61</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>62</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>63</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>64</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>65</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>66</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>67</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>68</span><br${
          _scopeId
        }></div></div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("div", { class: "language-vue ext-vue line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-vue" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                    (0,external_vue_.createTextVNode)("template")
                  ]),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                ]),
                (0,external_vue_.createTextVNode)("\r\n  "),
                (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                    (0,external_vue_.createTextVNode)("v-schema-form")
                  ]),
                  (0,external_vue_.createTextVNode)(),
                  (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                    (0,external_vue_.createVNode)("span", { class: "token namespace" }, "v-model:"),
                    (0,external_vue_.createTextVNode)("value")
                  ]),
                  (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                    (0,external_vue_.createTextVNode)("people"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                  ]),
                  (0,external_vue_.createTextVNode)(),
                  (0,external_vue_.createVNode)("span", { class: "token attr-name" }, ":schema"),
                  (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                    (0,external_vue_.createTextVNode)("fields"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                  ]),
                  (0,external_vue_.createTextVNode)(),
                  (0,external_vue_.createVNode)("span", { class: "token attr-name" }, ":actions"),
                  (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                    (0,external_vue_.createTextVNode)("actions"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                  ]),
                  (0,external_vue_.createTextVNode)(),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "/>")
                ]),
                (0,external_vue_.createTextVNode)("\r\n"),
                (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                    (0,external_vue_.createTextVNode)("template")
                  ]),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                ]),
                (0,external_vue_.createTextVNode)("\r\n"),
                (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                    (0,external_vue_.createTextVNode)("script")
                  ]),
                  (0,external_vue_.createTextVNode)(),
                  (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "lang"),
                  (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                    (0,external_vue_.createTextVNode)("ts"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                  ]),
                  (0,external_vue_.createTextVNode)(),
                  (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "setup"),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                ]),
                (0,external_vue_.createVNode)("span", { class: "token script" }, [
                  (0,external_vue_.createVNode)("span", { class: "token language-javascript" }, [
                    (0,external_vue_.createTextVNode)("\r\n"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "import"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)(" ref "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "from"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"vue\""),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ";"),
                    (0,external_vue_.createTextVNode)("\r\n"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "import"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)(" message "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "from"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"ant-design-vue\""),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ";"),
                    (0,external_vue_.createTextVNode)("\r\n"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                    (0,external_vue_.createTextVNode)(" people "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "ref"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ";"),
                    (0,external_vue_.createTextVNode)("\r\n"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                    (0,external_vue_.createTextVNode)(" fields"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "["),
                    (0,external_vue_.createTextVNode)("key"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(" string"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "]"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(" any "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\r\n  props"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\r\n    section"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token boolean" }, "true"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n    spaceBetweenSection"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token number" }, "16"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n    labelWidth"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token number" }, "120"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n  "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n  fields"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\r\n    year"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\r\n      title"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"年\""),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n      type"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"year\""),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n      "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "default"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "'2022'"),
                    (0,external_vue_.createTextVNode)("\r\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n    month"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\r\n      title"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"月\""),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n      type"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"month\""),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n      "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "default"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "'12'"),
                    (0,external_vue_.createTextVNode)("\r\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n    date"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\r\n      title"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"日\""),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n      type"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"date\""),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n      "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "default"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "'2022-2-22'"),
                    (0,external_vue_.createTextVNode)("\r\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"[startDate, endDate]\""),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\r\n      title"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"日期范围\""),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n      type"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"daterange\""),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n      "),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "// default: \"['2022-1-11','2022-2-22']\""),
                    (0,external_vue_.createTextVNode)("\r\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n    time"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\r\n      title"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"时间\""),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n      type"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"time\""),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n      "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "default"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "'13:01:00'"),
                    (0,external_vue_.createTextVNode)("\r\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n    timerange"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\r\n      title"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"时间范围\""),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n      type"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"timerange\""),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n      "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "default"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "["),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "'13:01:00'"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "'14:00:00'"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "]"),
                    (0,external_vue_.createTextVNode)("\r\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n    datetime"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\r\n      title"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"日期时间\""),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n      type"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"datetime\""),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n      "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "default"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "'2022-2-22 13:01:00'"),
                    (0,external_vue_.createTextVNode)("\r\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n  "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ";"),
                    (0,external_vue_.createTextVNode)("\r\n"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                    (0,external_vue_.createTextVNode)(" actions "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "["),
                    (0,external_vue_.createTextVNode)("\r\n  "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\r\n    text"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"提交\""),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n    props"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)(" type"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"primary\""),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token function-variable function" }, "action"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token parameter" }, "$"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "=>"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\r\n      console"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "log"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("people"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("value"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ";"),
                    (0,external_vue_.createTextVNode)("\r\n      message"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "success"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token constant" }, "JSON"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "stringify"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("people"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("value"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ";"),
                    (0,external_vue_.createTextVNode)("\r\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n  "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n  "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\r\n    text"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"重置\""),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token function-variable function" }, "action"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "=>"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\r\n      people"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("value "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ";"),
                    (0,external_vue_.createTextVNode)("\r\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n  "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "]"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ";"),
                    (0,external_vue_.createTextVNode)("\r\n")
                  ])
                ]),
                (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                    (0,external_vue_.createTextVNode)("script")
                  ]),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                ]),
                (0,external_vue_.createTextVNode)("\n")
              ])
            ]),
            (0,external_vue_.createVNode)("div", { class: "line-numbers" }, [
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "1"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "2"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "3"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "4"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "5"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "6"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "7"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "8"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "9"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "10"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "11"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "12"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "13"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "14"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "15"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "16"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "17"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "18"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "19"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "20"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "21"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "22"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "23"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "24"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "25"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "26"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "27"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "28"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "29"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "30"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "31"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "32"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "33"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "34"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "35"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "36"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "37"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "38"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "39"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "40"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "41"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "42"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "43"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "44"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "45"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "46"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "47"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "48"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "49"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "50"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "51"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "52"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "53"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "54"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "55"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "56"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "57"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "58"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "59"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "60"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "61"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "62"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "63"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "64"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "65"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "66"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "67"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "68"),
              (0,external_vue_.createVNode)("br")
            ])
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h2 id="文件上传" tabindex="-1"><a class="header-anchor" href="#文件上传" aria-hidden="true">#</a> 文件上传</h2><p>文件上传、图片表单类型的例子</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_effect_code, { cmp: "basic-use-four" }, {
    code: (0,external_vue_.withCtx)((slotProps, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-vue ext-vue line-numbers-mode"${
          _scopeId
        }><pre class="language-vue"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;</span>template</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
  <span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;</span>v-schema-form</span> <span class="token attr-name"${
          _scopeId
        }><span class="token namespace"${
          _scopeId
        }>v-model:</span>value</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>people<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span> <span class="token attr-name"${
          _scopeId
        }>:schema</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>fields<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span> <span class="token attr-name"${
          _scopeId
        }>:actions</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>actions<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span> <span class="token punctuation"${
          _scopeId
        }>/&gt;</span></span>
<span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;/</span>template</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
<span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;</span>script</span> <span class="token attr-name"${
          _scopeId
        }>lang</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>ts<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span> <span class="token attr-name"${
          _scopeId
        }>setup</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span><span class="token script"${
          _scopeId
        }><span class="token language-javascript"${
          _scopeId
        }>
<span class="token keyword"${
          _scopeId
        }>import</span> <span class="token punctuation"${
          _scopeId
        }>{</span> ref <span class="token punctuation"${
          _scopeId
        }>}</span> <span class="token keyword"${
          _scopeId
        }>from</span> <span class="token string"${
          _scopeId
        }>&quot;vue&quot;</span><span class="token punctuation"${
          _scopeId
        }>;</span>
<span class="token keyword"${
          _scopeId
        }>import</span> <span class="token punctuation"${
          _scopeId
        }>{</span> message <span class="token punctuation"${
          _scopeId
        }>}</span> <span class="token keyword"${
          _scopeId
        }>from</span> <span class="token string"${
          _scopeId
        }>&quot;ant-design-vue&quot;</span><span class="token punctuation"${
          _scopeId
        }>;</span>
<span class="token keyword"${
          _scopeId
        }>const</span> people <span class="token operator"${
          _scopeId
        }>=</span> <span class="token function"${
          _scopeId
        }>ref</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>;</span>
<span class="token keyword"${
          _scopeId
        }>const</span> fields<span class="token operator"${
          _scopeId
        }>:</span> <span class="token punctuation"${
          _scopeId
        }>{</span> <span class="token punctuation"${
          _scopeId
        }>[</span>key<span class="token operator"${
          _scopeId
        }>:</span> string<span class="token punctuation"${
          _scopeId
        }>]</span><span class="token operator"${
          _scopeId
        }>:</span> any <span class="token punctuation"${
          _scopeId
        }>}</span> <span class="token operator"${
          _scopeId
        }>=</span> <span class="token punctuation"${
          _scopeId
        }>{</span>
  props<span class="token operator"${
          _scopeId
        }>:</span> <span class="token punctuation"${
          _scopeId
        }>{</span>
    section<span class="token operator"${
          _scopeId
        }>:</span> <span class="token boolean"${
          _scopeId
        }>true</span><span class="token punctuation"${
          _scopeId
        }>,</span>
    spaceBetweenSection<span class="token operator"${
          _scopeId
        }>:</span> <span class="token number"${
          _scopeId
        }>16</span><span class="token punctuation"${
          _scopeId
        }>,</span>
    labelWidth<span class="token operator"${
          _scopeId
        }>:</span> <span class="token number"${
          _scopeId
        }>120</span><span class="token punctuation"${
          _scopeId
        }>,</span>
  <span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>,</span>
  fields<span class="token operator"${
          _scopeId
        }>:</span> <span class="token punctuation"${
          _scopeId
        }>{</span>
    myFile1<span class="token operator"${
          _scopeId
        }>:</span> <span class="token punctuation"${
          _scopeId
        }>{</span>
      title<span class="token operator"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&quot;普通上传&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span>
      type<span class="token operator"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&quot;file&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span>
      props<span class="token operator"${
          _scopeId
        }>:</span> <span class="token punctuation"${
          _scopeId
        }>{</span>
        action<span class="token operator"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&quot;https://www.mocky.io/v2/5cc8019d300000980a055e76&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span>
      <span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>,</span>
    <span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>,</span>
    myFile2<span class="token operator"${
          _scopeId
        }>:</span> <span class="token punctuation"${
          _scopeId
        }>{</span>
      title<span class="token operator"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&quot;拖拽上传&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span>
      type<span class="token operator"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&quot;file&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span>
      props<span class="token operator"${
          _scopeId
        }>:</span> <span class="token punctuation"${
          _scopeId
        }>{</span>
        action<span class="token operator"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&quot;https://www.mocky.io/v2/5cc8019d300000980a055e76&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span>
        mode<span class="token operator"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&quot;dragger&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span>
      <span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>,</span>
    <span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>,</span>
    myFile3<span class="token operator"${
          _scopeId
        }>:</span> <span class="token punctuation"${
          _scopeId
        }>{</span>
      title<span class="token operator"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&quot;卡片上传&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span>
      type<span class="token operator"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&quot;file&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span>
      props<span class="token operator"${
          _scopeId
        }>:</span> <span class="token punctuation"${
          _scopeId
        }>{</span>
        action<span class="token operator"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&quot;https://www.mocky.io/v2/5cc8019d300000980a055e76&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span>
        mode<span class="token operator"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&quot;card&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span>
      <span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>,</span>
    <span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>,</span>
    myFile4<span class="token operator"${
          _scopeId
        }>:</span> <span class="token punctuation"${
          _scopeId
        }>{</span>
      title<span class="token operator"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&quot;上传图片&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span>
      type<span class="token operator"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&quot;picture&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span>
      props<span class="token operator"${
          _scopeId
        }>:</span> <span class="token punctuation"${
          _scopeId
        }>{</span>
        action<span class="token operator"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&quot;https://www.mocky.io/v2/5cc8019d300000980a055e76&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span>
      <span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>,</span>
    <span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>,</span>
  <span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>,</span>
<span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>;</span>
<span class="token keyword"${
          _scopeId
        }>const</span> actions <span class="token operator"${
          _scopeId
        }>=</span> <span class="token punctuation"${
          _scopeId
        }>[</span>
  <span class="token punctuation"${
          _scopeId
        }>{</span>
    text<span class="token operator"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&quot;提交&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span>
    props<span class="token operator"${
          _scopeId
        }>:</span> <span class="token punctuation"${
          _scopeId
        }>{</span> type<span class="token operator"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&quot;primary&quot;</span> <span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>,</span>
    <span class="token function-variable function"${
          _scopeId
        }>action</span><span class="token operator"${
          _scopeId
        }>:</span> <span class="token punctuation"${
          _scopeId
        }>(</span><span class="token parameter"${
          _scopeId
        }>\$</span><span class="token punctuation"${
          _scopeId
        }>)</span> <span class="token operator"${
          _scopeId
        }>=&gt;</span> <span class="token punctuation"${
          _scopeId
        }>{</span>
      console<span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>log</span><span class="token punctuation"${
          _scopeId
        }>(</span>people<span class="token punctuation"${
          _scopeId
        }>.</span>value<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>;</span>
      message<span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>success</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token constant"${
          _scopeId
        }>JSON</span><span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>stringify</span><span class="token punctuation"${
          _scopeId
        }>(</span>people<span class="token punctuation"${
          _scopeId
        }>.</span>value<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>;</span>
    <span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>,</span>
  <span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>,</span>
  <span class="token punctuation"${
          _scopeId
        }>{</span>
    text<span class="token operator"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&quot;重置&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span>
    <span class="token function-variable function"${
          _scopeId
        }>action</span><span class="token operator"${
          _scopeId
        }>:</span> <span class="token punctuation"${
          _scopeId
        }>(</span><span class="token punctuation"${
          _scopeId
        }>)</span> <span class="token operator"${
          _scopeId
        }>=&gt;</span> <span class="token punctuation"${
          _scopeId
        }>{</span>
      people<span class="token punctuation"${
          _scopeId
        }>.</span>value <span class="token operator"${
          _scopeId
        }>=</span> <span class="token punctuation"${
          _scopeId
        }>{</span><span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>;</span>
    <span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>,</span>
  <span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>,</span>
<span class="token punctuation"${
          _scopeId
        }>]</span><span class="token punctuation"${
          _scopeId
        }>;</span>
</span></span><span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;/</span>script</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
</code></pre><div class="line-numbers"${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>1</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>2</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>3</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>4</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>5</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>6</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>7</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>8</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>9</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>10</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>11</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>12</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>13</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>14</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>15</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>16</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>17</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>18</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>19</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>20</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>21</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>22</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>23</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>24</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>25</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>26</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>27</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>28</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>29</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>30</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>31</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>32</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>33</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>34</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>35</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>36</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>37</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>38</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>39</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>40</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>41</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>42</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>43</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>44</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>45</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>46</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>47</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>48</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>49</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>50</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>51</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>52</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>53</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>54</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>55</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>56</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>57</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>58</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>59</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>60</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>61</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>62</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>63</span><br${
          _scopeId
        }></div></div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("div", { class: "language-vue ext-vue line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-vue" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                    (0,external_vue_.createTextVNode)("template")
                  ]),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                ]),
                (0,external_vue_.createTextVNode)("\r\n  "),
                (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                    (0,external_vue_.createTextVNode)("v-schema-form")
                  ]),
                  (0,external_vue_.createTextVNode)(),
                  (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                    (0,external_vue_.createVNode)("span", { class: "token namespace" }, "v-model:"),
                    (0,external_vue_.createTextVNode)("value")
                  ]),
                  (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                    (0,external_vue_.createTextVNode)("people"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                  ]),
                  (0,external_vue_.createTextVNode)(),
                  (0,external_vue_.createVNode)("span", { class: "token attr-name" }, ":schema"),
                  (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                    (0,external_vue_.createTextVNode)("fields"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                  ]),
                  (0,external_vue_.createTextVNode)(),
                  (0,external_vue_.createVNode)("span", { class: "token attr-name" }, ":actions"),
                  (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                    (0,external_vue_.createTextVNode)("actions"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                  ]),
                  (0,external_vue_.createTextVNode)(),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "/>")
                ]),
                (0,external_vue_.createTextVNode)("\r\n"),
                (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                    (0,external_vue_.createTextVNode)("template")
                  ]),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                ]),
                (0,external_vue_.createTextVNode)("\r\n"),
                (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                    (0,external_vue_.createTextVNode)("script")
                  ]),
                  (0,external_vue_.createTextVNode)(),
                  (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "lang"),
                  (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                    (0,external_vue_.createTextVNode)("ts"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                  ]),
                  (0,external_vue_.createTextVNode)(),
                  (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "setup"),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                ]),
                (0,external_vue_.createVNode)("span", { class: "token script" }, [
                  (0,external_vue_.createVNode)("span", { class: "token language-javascript" }, [
                    (0,external_vue_.createTextVNode)("\r\n"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "import"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)(" ref "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "from"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"vue\""),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ";"),
                    (0,external_vue_.createTextVNode)("\r\n"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "import"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)(" message "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "from"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"ant-design-vue\""),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ";"),
                    (0,external_vue_.createTextVNode)("\r\n"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                    (0,external_vue_.createTextVNode)(" people "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "ref"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ";"),
                    (0,external_vue_.createTextVNode)("\r\n"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                    (0,external_vue_.createTextVNode)(" fields"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "["),
                    (0,external_vue_.createTextVNode)("key"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(" string"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "]"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(" any "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\r\n  props"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\r\n    section"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token boolean" }, "true"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n    spaceBetweenSection"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token number" }, "16"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n    labelWidth"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token number" }, "120"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n  "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n  fields"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\r\n    myFile1"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\r\n      title"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"普通上传\""),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n      type"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"file\""),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n      props"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\r\n        action"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"https://www.mocky.io/v2/5cc8019d300000980a055e76\""),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n      "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n    myFile2"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\r\n      title"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"拖拽上传\""),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n      type"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"file\""),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n      props"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\r\n        action"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"https://www.mocky.io/v2/5cc8019d300000980a055e76\""),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n        mode"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"dragger\""),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n      "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n    myFile3"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\r\n      title"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"卡片上传\""),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n      type"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"file\""),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n      props"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\r\n        action"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"https://www.mocky.io/v2/5cc8019d300000980a055e76\""),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n        mode"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"card\""),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n      "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n    myFile4"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\r\n      title"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"上传图片\""),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n      type"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"picture\""),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n      props"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\r\n        action"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"https://www.mocky.io/v2/5cc8019d300000980a055e76\""),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n      "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n  "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ";"),
                    (0,external_vue_.createTextVNode)("\r\n"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                    (0,external_vue_.createTextVNode)(" actions "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "["),
                    (0,external_vue_.createTextVNode)("\r\n  "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\r\n    text"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"提交\""),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n    props"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)(" type"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"primary\""),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token function-variable function" }, "action"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token parameter" }, "$"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "=>"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\r\n      console"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "log"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("people"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("value"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ";"),
                    (0,external_vue_.createTextVNode)("\r\n      message"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "success"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token constant" }, "JSON"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "stringify"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("people"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("value"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ";"),
                    (0,external_vue_.createTextVNode)("\r\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n  "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n  "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\r\n    text"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"重置\""),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token function-variable function" }, "action"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "=>"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\r\n      people"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("value "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ";"),
                    (0,external_vue_.createTextVNode)("\r\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n  "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "]"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ";"),
                    (0,external_vue_.createTextVNode)("\r\n")
                  ])
                ]),
                (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                    (0,external_vue_.createTextVNode)("script")
                  ]),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                ]),
                (0,external_vue_.createTextVNode)("\n")
              ])
            ]),
            (0,external_vue_.createVNode)("div", { class: "line-numbers" }, [
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "1"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "2"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "3"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "4"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "5"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "6"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "7"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "8"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "9"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "10"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "11"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "12"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "13"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "14"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "15"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "16"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "17"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "18"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "19"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "20"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "21"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "22"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "23"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "24"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "25"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "26"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "27"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "28"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "29"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "30"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "31"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "32"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "33"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "34"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "35"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "36"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "37"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "38"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "39"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "40"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "41"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "42"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "43"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "44"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "45"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "46"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "47"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "48"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "49"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "50"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "51"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "52"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "53"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "54"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "55"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "56"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "57"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "58"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "59"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "60"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "61"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "62"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "63"),
              (0,external_vue_.createVNode)("br")
            ])
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h2 id="其它类型表单" tabindex="-1"><a class="header-anchor" href="#其它类型表单" aria-hidden="true">#</a> 其它类型表单</h2><p>文件上传、图片表单类型的例子</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_effect_code, { cmp: "basic-use-five" }, {
    code: (0,external_vue_.withCtx)((slotProps, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-vue ext-vue line-numbers-mode"${
          _scopeId
        }><pre class="language-vue"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;</span>template</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
  <span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;</span>v-schema-form</span> <span class="token attr-name"${
          _scopeId
        }><span class="token namespace"${
          _scopeId
        }>v-model:</span>value</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>people<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span> <span class="token attr-name"${
          _scopeId
        }>:schema</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>fields<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span> <span class="token attr-name"${
          _scopeId
        }>:actions</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>actions<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span> <span class="token punctuation"${
          _scopeId
        }>/&gt;</span></span>
<span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;/</span>template</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
<span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;</span>script</span> <span class="token attr-name"${
          _scopeId
        }>lang</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>ts<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span> <span class="token attr-name"${
          _scopeId
        }>setup</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span><span class="token script"${
          _scopeId
        }><span class="token language-javascript"${
          _scopeId
        }>
<span class="token keyword"${
          _scopeId
        }>import</span> <span class="token punctuation"${
          _scopeId
        }>{</span> ref <span class="token punctuation"${
          _scopeId
        }>}</span> <span class="token keyword"${
          _scopeId
        }>from</span> <span class="token string"${
          _scopeId
        }>&quot;vue&quot;</span><span class="token punctuation"${
          _scopeId
        }>;</span>
<span class="token keyword"${
          _scopeId
        }>import</span> <span class="token punctuation"${
          _scopeId
        }>{</span> message <span class="token punctuation"${
          _scopeId
        }>}</span> <span class="token keyword"${
          _scopeId
        }>from</span> <span class="token string"${
          _scopeId
        }>&quot;ant-design-vue&quot;</span><span class="token punctuation"${
          _scopeId
        }>;</span>
<span class="token keyword"${
          _scopeId
        }>const</span> people <span class="token operator"${
          _scopeId
        }>=</span> <span class="token function"${
          _scopeId
        }>ref</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>;</span>
<span class="token keyword"${
          _scopeId
        }>const</span> fields<span class="token operator"${
          _scopeId
        }>:</span> <span class="token punctuation"${
          _scopeId
        }>{</span> <span class="token punctuation"${
          _scopeId
        }>[</span>key<span class="token operator"${
          _scopeId
        }>:</span> string<span class="token punctuation"${
          _scopeId
        }>]</span><span class="token operator"${
          _scopeId
        }>:</span> any <span class="token punctuation"${
          _scopeId
        }>}</span> <span class="token operator"${
          _scopeId
        }>=</span> <span class="token punctuation"${
          _scopeId
        }>{</span>
  props<span class="token operator"${
          _scopeId
        }>:</span> <span class="token punctuation"${
          _scopeId
        }>{</span>
    section<span class="token operator"${
          _scopeId
        }>:</span> <span class="token boolean"${
          _scopeId
        }>true</span><span class="token punctuation"${
          _scopeId
        }>,</span>
    spaceBetweenSection<span class="token operator"${
          _scopeId
        }>:</span> <span class="token number"${
          _scopeId
        }>16</span><span class="token punctuation"${
          _scopeId
        }>,</span>
    labelWidth<span class="token operator"${
          _scopeId
        }>:</span> <span class="token number"${
          _scopeId
        }>120</span><span class="token punctuation"${
          _scopeId
        }>,</span>
  <span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>,</span>
  fields<span class="token operator"${
          _scopeId
        }>:</span> <span class="token punctuation"${
          _scopeId
        }>{</span>
    myRange<span class="token operator"${
          _scopeId
        }>:</span> <span class="token punctuation"${
          _scopeId
        }>{</span>
      title<span class="token operator"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&quot;范围&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span>
      type<span class="token operator"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&quot;range&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span>
      <span class="token keyword"${
          _scopeId
        }>default</span><span class="token operator"${
          _scopeId
        }>:</span><span class="token punctuation"${
          _scopeId
        }>[</span><span class="token number"${
          _scopeId
        }>10</span><span class="token punctuation"${
          _scopeId
        }>,</span><span class="token number"${
          _scopeId
        }>50</span><span class="token punctuation"${
          _scopeId
        }>]</span>
    <span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>,</span>
    myRate<span class="token operator"${
          _scopeId
        }>:</span> <span class="token punctuation"${
          _scopeId
        }>{</span>
      title<span class="token operator"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&quot;评分&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span>
      type<span class="token operator"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&quot;rate&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span>
      <span class="token keyword"${
          _scopeId
        }>default</span><span class="token operator"${
          _scopeId
        }>:</span><span class="token number"${
          _scopeId
        }>2</span>
    <span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>,</span>
    myTransfer<span class="token operator"${
          _scopeId
        }>:</span> <span class="token punctuation"${
          _scopeId
        }>{</span>
      title<span class="token operator"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&quot;穿梭框&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span>
      type<span class="token operator"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&quot;transfer&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span>
      <span class="token keyword"${
          _scopeId
        }>enum</span><span class="token operator"${
          _scopeId
        }>:</span> <span class="token punctuation"${
          _scopeId
        }>[</span>
        <span class="token punctuation"${
          _scopeId
        }>{</span>
          label<span class="token operator"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&quot;选项1&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span>
          value<span class="token operator"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&quot;1&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span>
        <span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>,</span>
        <span class="token punctuation"${
          _scopeId
        }>{</span>
          label<span class="token operator"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&quot;选项2&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span>
          value<span class="token operator"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&quot;2&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span>
        <span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>,</span>
      <span class="token punctuation"${
          _scopeId
        }>]</span><span class="token punctuation"${
          _scopeId
        }>,</span>
      <span class="token keyword"${
          _scopeId
        }>default</span><span class="token operator"${
          _scopeId
        }>:</span><span class="token punctuation"${
          _scopeId
        }>[</span><span class="token string"${
          _scopeId
        }>&#39;2&#39;</span><span class="token punctuation"${
          _scopeId
        }>]</span>
    <span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>,</span>
  <span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>,</span>
<span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>;</span>
<span class="token keyword"${
          _scopeId
        }>const</span> actions <span class="token operator"${
          _scopeId
        }>=</span> <span class="token punctuation"${
          _scopeId
        }>[</span>
  <span class="token punctuation"${
          _scopeId
        }>{</span>
    text<span class="token operator"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&quot;提交&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span>
    props<span class="token operator"${
          _scopeId
        }>:</span> <span class="token punctuation"${
          _scopeId
        }>{</span> type<span class="token operator"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&quot;primary&quot;</span> <span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>,</span>
    <span class="token function-variable function"${
          _scopeId
        }>action</span><span class="token operator"${
          _scopeId
        }>:</span> <span class="token punctuation"${
          _scopeId
        }>(</span><span class="token parameter"${
          _scopeId
        }>\$</span><span class="token punctuation"${
          _scopeId
        }>)</span> <span class="token operator"${
          _scopeId
        }>=&gt;</span> <span class="token punctuation"${
          _scopeId
        }>{</span>
      console<span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>log</span><span class="token punctuation"${
          _scopeId
        }>(</span>people<span class="token punctuation"${
          _scopeId
        }>.</span>value<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>;</span>
      message<span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>success</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token constant"${
          _scopeId
        }>JSON</span><span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>stringify</span><span class="token punctuation"${
          _scopeId
        }>(</span>people<span class="token punctuation"${
          _scopeId
        }>.</span>value<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>;</span>
    <span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>,</span>
  <span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>,</span>
  <span class="token punctuation"${
          _scopeId
        }>{</span>
    text<span class="token operator"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&quot;重置&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span>
    <span class="token function-variable function"${
          _scopeId
        }>action</span><span class="token operator"${
          _scopeId
        }>:</span> <span class="token punctuation"${
          _scopeId
        }>(</span><span class="token punctuation"${
          _scopeId
        }>)</span> <span class="token operator"${
          _scopeId
        }>=&gt;</span> <span class="token punctuation"${
          _scopeId
        }>{</span>
      people<span class="token punctuation"${
          _scopeId
        }>.</span>value <span class="token operator"${
          _scopeId
        }>=</span> <span class="token punctuation"${
          _scopeId
        }>{</span><span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>;</span>
    <span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>,</span>
  <span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>,</span>
<span class="token punctuation"${
          _scopeId
        }>]</span><span class="token punctuation"${
          _scopeId
        }>;</span>
</span></span><span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;/</span>script</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
</code></pre><div class="line-numbers"${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>1</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>2</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>3</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>4</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>5</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>6</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>7</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>8</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>9</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>10</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>11</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>12</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>13</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>14</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>15</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>16</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>17</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>18</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>19</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>20</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>21</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>22</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>23</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>24</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>25</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>26</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>27</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>28</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>29</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>30</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>31</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>32</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>33</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>34</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>35</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>36</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>37</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>38</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>39</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>40</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>41</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>42</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>43</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>44</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>45</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>46</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>47</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>48</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>49</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>50</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>51</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>52</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>53</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>54</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>55</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>56</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>57</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>58</span><br${
          _scopeId
        }></div></div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("div", { class: "language-vue ext-vue line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-vue" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                    (0,external_vue_.createTextVNode)("template")
                  ]),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                ]),
                (0,external_vue_.createTextVNode)("\r\n  "),
                (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                    (0,external_vue_.createTextVNode)("v-schema-form")
                  ]),
                  (0,external_vue_.createTextVNode)(),
                  (0,external_vue_.createVNode)("span", { class: "token attr-name" }, [
                    (0,external_vue_.createVNode)("span", { class: "token namespace" }, "v-model:"),
                    (0,external_vue_.createTextVNode)("value")
                  ]),
                  (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                    (0,external_vue_.createTextVNode)("people"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                  ]),
                  (0,external_vue_.createTextVNode)(),
                  (0,external_vue_.createVNode)("span", { class: "token attr-name" }, ":schema"),
                  (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                    (0,external_vue_.createTextVNode)("fields"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                  ]),
                  (0,external_vue_.createTextVNode)(),
                  (0,external_vue_.createVNode)("span", { class: "token attr-name" }, ":actions"),
                  (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                    (0,external_vue_.createTextVNode)("actions"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                  ]),
                  (0,external_vue_.createTextVNode)(),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "/>")
                ]),
                (0,external_vue_.createTextVNode)("\r\n"),
                (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                    (0,external_vue_.createTextVNode)("template")
                  ]),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                ]),
                (0,external_vue_.createTextVNode)("\r\n"),
                (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                    (0,external_vue_.createTextVNode)("script")
                  ]),
                  (0,external_vue_.createTextVNode)(),
                  (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "lang"),
                  (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                    (0,external_vue_.createTextVNode)("ts"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                  ]),
                  (0,external_vue_.createTextVNode)(),
                  (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "setup"),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                ]),
                (0,external_vue_.createVNode)("span", { class: "token script" }, [
                  (0,external_vue_.createVNode)("span", { class: "token language-javascript" }, [
                    (0,external_vue_.createTextVNode)("\r\n"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "import"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)(" ref "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "from"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"vue\""),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ";"),
                    (0,external_vue_.createTextVNode)("\r\n"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "import"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)(" message "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "from"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"ant-design-vue\""),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ";"),
                    (0,external_vue_.createTextVNode)("\r\n"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                    (0,external_vue_.createTextVNode)(" people "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "ref"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ";"),
                    (0,external_vue_.createTextVNode)("\r\n"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                    (0,external_vue_.createTextVNode)(" fields"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "["),
                    (0,external_vue_.createTextVNode)("key"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(" string"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "]"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(" any "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\r\n  props"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\r\n    section"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token boolean" }, "true"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n    spaceBetweenSection"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token number" }, "16"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n    labelWidth"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token number" }, "120"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n  "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n  fields"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\r\n    myRange"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\r\n      title"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"范围\""),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n      type"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"range\""),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n      "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "default"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "["),
                    (0,external_vue_.createVNode)("span", { class: "token number" }, "10"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createVNode)("span", { class: "token number" }, "50"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "]"),
                    (0,external_vue_.createTextVNode)("\r\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n    myRate"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\r\n      title"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"评分\""),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n      type"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"rate\""),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n      "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "default"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createVNode)("span", { class: "token number" }, "2"),
                    (0,external_vue_.createTextVNode)("\r\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n    myTransfer"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\r\n      title"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"穿梭框\""),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n      type"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"transfer\""),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n      "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "enum"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "["),
                    (0,external_vue_.createTextVNode)("\r\n        "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\r\n          label"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"选项1\""),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n          value"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"1\""),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n        "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n        "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\r\n          label"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"选项2\""),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n          value"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"2\""),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n        "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n      "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "]"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n      "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "default"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "["),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "'2'"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "]"),
                    (0,external_vue_.createTextVNode)("\r\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n  "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ";"),
                    (0,external_vue_.createTextVNode)("\r\n"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                    (0,external_vue_.createTextVNode)(" actions "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "["),
                    (0,external_vue_.createTextVNode)("\r\n  "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\r\n    text"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"提交\""),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n    props"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)(" type"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"primary\""),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token function-variable function" }, "action"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token parameter" }, "$"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "=>"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\r\n      console"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "log"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("people"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("value"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ";"),
                    (0,external_vue_.createTextVNode)("\r\n      message"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "success"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token constant" }, "JSON"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "stringify"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("people"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("value"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ";"),
                    (0,external_vue_.createTextVNode)("\r\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n  "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n  "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\r\n    text"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"重置\""),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token function-variable function" }, "action"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "=>"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\r\n      people"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("value "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ";"),
                    (0,external_vue_.createTextVNode)("\r\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n  "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\r\n"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "]"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ";"),
                    (0,external_vue_.createTextVNode)("\r\n")
                  ])
                ]),
                (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                    (0,external_vue_.createTextVNode)("script")
                  ]),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                ]),
                (0,external_vue_.createTextVNode)("\n")
              ])
            ]),
            (0,external_vue_.createVNode)("div", { class: "line-numbers" }, [
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "1"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "2"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "3"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "4"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "5"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "6"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "7"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "8"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "9"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "10"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "11"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "12"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "13"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "14"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "15"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "16"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "17"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "18"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "19"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "20"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "21"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "22"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "23"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "24"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "25"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "26"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "27"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "28"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "29"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "30"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "31"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "32"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "33"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "34"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "35"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "36"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "37"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "38"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "39"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "40"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "41"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "42"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "43"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "44"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "45"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "46"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "47"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "48"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "49"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "50"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "51"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "52"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "53"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "54"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "55"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "56"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "57"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "58"),
              (0,external_vue_.createVNode)("br")
            ])
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<!--]-->`)
}
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/2.基本使用.html.vue?vue&type=template&id=b5a749d0

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(83744);
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/2.基本使用.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const _2_html = (__exports__);

/***/ })

};
;
//# sourceMappingURL=371.app.js.map