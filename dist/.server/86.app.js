"use strict";
exports.id = 86;
exports.ids = [86];
exports.modules = {

/***/ 85294:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-1bed24f8",
  "path": "/1.%E5%AE%89%E8%A3%85%E4%B8%8E%E4%BD%BF%E7%94%A8.html",
  "title": "安装与使用",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "npm",
      "slug": "npm",
      "children": []
    },
    {
      "level": 2,
      "title": "cdn",
      "slug": "cdn",
      "children": []
    }
  ],
  "filePathRelative": "1.安装与使用.md",
  "git": {
    "updatedTime": 1635948630000,
    "contributors": [
      {
        "name": "丁少华",
        "email": "960423114@qq.com",
        "commits": 1
      },
      {
        "name": "丁少华",
        "email": "dingshaohua@aegis-data.cn",
        "commits": 1
      }
    ]
  }
}


/***/ }),

/***/ 63942:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _1_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/1.安装与使用.html.vue?vue&type=template&id=0e522ce1

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="安装与使用" tabindex="-1"><a class="header-anchor" href="#安装与使用" aria-hidden="true">#</a> 安装与使用</h1><h2 id="npm" tabindex="-1"><a class="header-anchor" href="#npm" aria-hidden="true">#</a> npm</h2><p>首先依赖less（建议脚手架初始化项目的时候就选择less支持）</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code> <span class="token function">yarn</span> <span class="token function">add</span> -D less-loader@5.0.0 <span class="token function">less</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>除此之外还需要安装如下依赖</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> v-schema-form moment ant-design-vue@next antd-mobile-vue-next 
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>配置less的javascriptEnabled支持</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    css<span class="token operator">:</span> <span class="token punctuation">{</span>
        loaderOptions<span class="token operator">:</span> <span class="token punctuation">{</span>
            less<span class="token operator">:</span> <span class="token punctuation">{</span>
                javascriptEnabled<span class="token operator">:</span> <span class="token boolean">true</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>注册组件</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span>
<span class="token keyword">import</span> router <span class="token keyword">from</span> <span class="token string">&#39;./router&#39;</span>
<span class="token keyword">import</span> store <span class="token keyword">from</span> <span class="token string">&#39;./store&#39;</span>
<span class="token keyword">import</span> SchemaForm<span class="token punctuation">,</span> <span class="token punctuation">{</span>registerAntd<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;v-schema-form&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Antd <span class="token keyword">from</span> <span class="token string">&#39;ant-design-vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&#39;ant-design-vue/dist/antd.css&#39;</span><span class="token punctuation">;</span>

<span class="token function">registerAntd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>store<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>router<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Antd<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>SchemaForm<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="cdn" tabindex="-1"><a class="header-anchor" href="#cdn" aria-hidden="true">#</a> cdn</h2><p>除此之外也支持cdn方式使用</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://public-file.aegis-info.com/schema-form/&lt;version&gt;/SchemaForm.css<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://public-file.aegis-info.com/schema-form/&lt;version&gt;/SchemaForm.umd.min.js.gz<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><!--]-->`)
}
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(83744);
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/1.安装与使用.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const _1_html = (__exports__);

/***/ })

};
;
//# sourceMappingURL=86.app.js.map