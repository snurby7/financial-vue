"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const vue_1 = tslib_1.__importDefault(require("vue"));
const App_vue_1 = tslib_1.__importDefault(require("./App.vue"));
require("./registerServiceWorker");
const router_1 = require("./router");
vue_1.default.config.productionTip = false;
new vue_1.default({
    router: router_1.router,
    render: h => h(App_vue_1.default)
}).$mount("#app");
//# sourceMappingURL=main.js.map