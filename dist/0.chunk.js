webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(19)

var Component = __webpack_require__(9)(
  /* script */
  __webpack_require__(18),
  /* template */
  __webpack_require__(25),
  /* scopeId */
  "data-v-c85e5d04",
  /* cssModules */
  null
)
Component.options.__file = "D:\\vue-project\\zjkweb\\src\\views\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c85e5d04", Component.options)
  } else {
    hotAPI.reload("data-v-c85e5d04", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            theme1: 'light',
            logourl: __webpack_require__(24),
            value2: 0,
            banners: [{ url: __webpack_require__(20), id: 1 }, { url: __webpack_require__(21), id: 2 }, { url: __webpack_require__(22), id: 3 }, { url: __webpack_require__(23), id: 4 }],
            setting: {
                autoplay: true,
                autoplaySpeed: 4000,
                dots: 'inside',
                radiusDot: true,
                trigger: 'click',
                arrow: 'hover',
                easing: 'ease'
            }
        };
    }
});

/***/ }),
/* 19 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a076df67bcbdb0041f6b10edb08a0938.png";

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a076df67bcbdb0041f6b10edb08a0938.png";

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a076df67bcbdb0041f6b10edb08a0938.png";

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a076df67bcbdb0041f6b10edb08a0938.png";

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "71e13a7c7f21c4f86c4af3ae6e674e0e.png";

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "layout"
  }, [_c('Layout', [_c('Header', [_c('Row', {
    attrs: {
      "type": "flex",
      "height": "100"
    }
  }, [_c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('img', {
    attrs: {
      "src": _vm.logourl,
      "alt": "",
      "height": "50"
    }
  })]), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "16"
    }
  }, [_c('Menu', {
    attrs: {
      "mode": "horizontal",
      "theme": _vm.theme1,
      "active-name": "1"
    }
  }, [_c('MenuItem', {
    attrs: {
      "name": "1"
    }
  }, [_c('Icon', {
    attrs: {
      "type": "ios-paper"
    }
  }), _vm._v("\n                            首页\n                        ")], 1), _vm._v(" "), _c('MenuItem', {
    attrs: {
      "name": "2"
    }
  }, [_c('Icon', {
    attrs: {
      "type": "ios-people"
    }
  }), _vm._v("\n                            产品与案例\n                        ")], 1), _vm._v(" "), _c('Submenu', {
    attrs: {
      "name": "3"
    }
  }, [_c('template', {
    slot: "title"
  }, [_c('Icon', {
    attrs: {
      "type": "stats-bars"
    }
  }), _vm._v("\n                                关于我们\n                            ")], 1), _vm._v(" "), _c('MenuGroup', {
    attrs: {
      "title": "使用"
    }
  }, [_c('MenuItem', {
    attrs: {
      "name": "3-1"
    }
  }, [_vm._v("新增和启动")]), _vm._v(" "), _c('MenuItem', {
    attrs: {
      "name": "3-2"
    }
  }, [_vm._v("活跃分析")]), _vm._v(" "), _c('MenuItem', {
    attrs: {
      "name": "3-3"
    }
  }, [_vm._v("时段分析")])], 1), _vm._v(" "), _c('MenuGroup', {
    attrs: {
      "title": "留存"
    }
  }, [_c('MenuItem', {
    attrs: {
      "name": "3-4"
    }
  }, [_vm._v("用户留存")]), _vm._v(" "), _c('MenuItem', {
    attrs: {
      "name": "3-5"
    }
  }, [_vm._v("流失用户")])], 1)], 2), _vm._v(" "), _c('MenuItem', {
    attrs: {
      "name": "4"
    }
  }, [_c('Icon', {
    attrs: {
      "type": "settings"
    }
  }), _vm._v("\n                            新闻中心\n                        ")], 1)], 1)], 1)], 1)], 1), _vm._v(" "), _c('Content', [_c('Row', {
    attrs: {
      "type": "flex"
    }
  }, [_c('Col', {
    attrs: {
      "span": "24"
    }
  }, [_c('Carousel', {
    attrs: {
      "autoplay": _vm.setting.autoplay,
      "autoplay-speed": _vm.setting.autoplaySpeed,
      "dots": _vm.setting.dots,
      "radius-dot": _vm.setting.radiusDot,
      "trigger": _vm.setting.trigger,
      "arrow": _vm.setting.arrow,
      "easing": _vm.setting.easing
    },
    model: {
      value: (_vm.value2),
      callback: function($$v) {
        _vm.value2 = $$v
      },
      expression: "value2"
    }
  }, _vm._l((_vm.banners), function(x) {
    return _c('CarouselItem', {
      key: x.id
    }, [_c('div', {
      staticClass: "demo-carousel"
    }, [_c('img', {
      attrs: {
        "src": x.url,
        "alt": "",
        "width": "100%",
        "height": "500"
      }
    })])])
  }))], 1)], 1), _vm._v(" "), _c('Row', {
    attrs: {
      "type": "flex",
      "height": "600"
    }
  }, [_c('Col', {
    attrs: {
      "span": "24"
    }
  }, [_c('div', {
    staticClass: "box-border"
  }, [_c('h2', [_vm._v("我们可以提供xxxx")]), _vm._v(" "), _c('p', [_vm._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat vitae illum soluta aperiam inventore, veniam ullam maxime, laboriosam sint voluptatem et cum obcaecati consequuntur quibusdam culpa quia autem tenetur tempore.")])])]), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "24"
    }
  }, [_c('div', {
    staticClass: "box-border"
  }, [_c('h2', [_vm._v("我们可以提供xxxx")]), _vm._v(" "), _c('p', [_vm._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat vitae illum soluta aperiam inventore, veniam ullam maxime, laboriosam sint voluptatem et cum obcaecati consequuntur quibusdam culpa quia autem tenetur tempore.")])])]), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "24"
    }
  }, [_c('div', {
    staticClass: "box-border"
  }, [_c('h2', [_vm._v("我们可以提供xxxx")]), _vm._v(" "), _c('p', [_vm._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat vitae illum soluta aperiam inventore, veniam ullam maxime, laboriosam sint voluptatem et cum obcaecati consequuntur quibusdam culpa quia autem tenetur tempore.")])])])], 1), _vm._v(" "), _c('Row', {
    attrs: {
      "type": "flex",
      "justify": "center"
    }
  }, [_c('Col', {
    staticClass: "box-border",
    attrs: {
      "span": "6"
    }
  }, [_c('h4', [_vm._v("title1")]), _vm._v(" "), _c('p', [_vm._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste veniam, harum nisi aut voluptatibus ducimus? Minima perferendis reprehenderit cupiditate rerum a, doloribus numquam expedita voluptates non illum. Eum, harum aut.")])]), _vm._v(" "), _c('Col', {
    staticClass: "box-border",
    attrs: {
      "span": "6"
    }
  }, [_c('h4', [_vm._v("title1")]), _vm._v(" "), _c('p', [_vm._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste veniam, harum nisi aut voluptatibus ducimus? Minima perferendis reprehenderit cupiditate rerum a, doloribus numquam expedita voluptates non illum. Eum, harum aut.")])]), _vm._v(" "), _c('Col', {
    staticClass: "box-border",
    attrs: {
      "span": "6"
    }
  }, [_c('h4', [_vm._v("title1")]), _vm._v(" "), _c('p', [_vm._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste veniam, harum nisi aut voluptatibus ducimus? Minima perferendis reprehenderit cupiditate rerum a, doloribus numquam expedita voluptates non illum. Eum, harum aut.")])])], 1)], 1), _vm._v(" "), _c('Footer', [_vm._v("\n            footer\n        ")]), _vm._v(" "), _c('BackTop', {
    attrs: {
      "height": 100,
      "bottom": 50
    }
  }, [_c('div', {
    staticClass: "top"
  }, [_vm._v("返回顶端")])])], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-c85e5d04", module.exports)
  }
}

/***/ })
]);
//# sourceMappingURL=0.chunk.js.map