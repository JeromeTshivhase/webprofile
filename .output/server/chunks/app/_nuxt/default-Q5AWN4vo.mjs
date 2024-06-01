import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderStyle, ssrRenderAttr } from 'vue/server-renderer';
import { useSSRContext, mergeProps } from 'vue';
import { _ as _export_sfc } from '../server.mjs';
import 'vue-bundle-renderer/runtime';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main$2 = {
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
    closeMenu() {
      this.isOpen = false;
    },
    handleOutsideClick(event) {
      if (this.isOpen && !this.$el.contains(event.target)) {
        this.closeMenu();
      }
    }
  },
  mounted() {
    (void 0).addEventListener("click", this.handleOutsideClick);
  },
  beforeDestroy() {
    (void 0).removeEventListener("click", this.handleOutsideClick);
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><nav class="w-full fixed top-0 z-20 bg-white dark:bg-gray-800 shadow"><div class="mx-auto px-4 sm:px-6 lg:px-8"><div class="flex justify-between"><div class="flex lg:px-16"><div class="flex-shrink-0 my-6 font-bold"><a href="/" class="text-white text-[20px]"><h1>Ndiene<span class="bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent">Tshivhase</span></h1></a></div><div class="hidden sm:ml-6 sm:flex sm:space-x-8"><a href="/" class="text-gray-900 dark:text-white inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium hover:border-blue-500"> Home </a><a href="#about-section" class="text-gray-900 dark:text-white inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium hover:border-blue-500"> About </a><a href="#skills-section" class="text-gray-900 dark:text-white inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium hover:border-blue-500"> Skills </a><a href="#experience-section" class="text-gray-900 dark:text-white inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium hover:border-blue-500"> Experience </a><a href="#projects-section" class="text-gray-900 dark:text-white inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium hover:border-blue-500"> Projects </a><a href="#contact-section" class="text-gray-900 dark:text-white inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium hover:border-blue-500"> Contact </a></div></div><div class="hidden sm:ml-6 sm:flex sm:items-center px-16"><button href="../assets/resume/ndienetshivhase.pdf" download class="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-1 focus:ring-gray-600 py-3 px-4 dark:focus:ring-offset-gray-800"> Download Resume </button></div><div class="-mr-2 flex items-center sm:hidden"><button class="bg-gray-200 dark:bg-gray-700 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"><span class="sr-only">Open main menu</span>`);
  if (!$data.isOpen) {
    _push(`<svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>`);
  } else {
    _push(`<svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>`);
  }
  _push(`</button></div></div></div><div style="${ssrRenderStyle($data.isOpen ? null : { display: "none" })}" class="sm:hidden"><div class="pt-2 pb-3 space-y-1"><a href="/" class="text-gray-900 dark:text-white block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-blue-500"> Home </a><a href="#about-section" class="text-gray-900 dark:text-white block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-blue-500"> About </a><a href="#skills-section" class="text-gray-900 dark:text-white block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-blue-500"> Skills </a><a href="#experience-section" class="text-gray-900 dark:text-white block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-blue-500"> Experience </a><a href="#projects-section" class="text-gray-900 dark:text-white block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-blue-500"> Projects </a><a href="#contact-section" class="text-gray-900 dark:text-white block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-blue-500"> Contact </a></div></div></nav></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/web-header.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _imports_0 = "" + buildAssetsURL("logo.C40Epyxm.png");
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "bg-gray-800 dark:bg-gray-800 py-8" }, _attrs))}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="flex flex-col md:flex-row items-center justify-between"><div class="mb-4 md:mb-0"><a href="/" class="flex items-center"><img class="h-12 w-12"${ssrRenderAttr("src", _imports_0)} alt="Logo"><h1 class="text-2xl font-bold">Ndiene<span class="bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent">Tshivhase</span></h1></a></div><div class="flex flex-col sm:flex-row sm:space-x-4 px-8 space-y-4 sm:space-y-0"><a href="#about-section" class="text-gray-400 hover:text-gray-300">About</a><a href="#skills-section" class="text-gray-400 hover:text-gray-300">Skills</a><a href="#experience-section" class="text-gray-400 hover:text-gray-300">Experience</a><a href="#education-section" class="text-gray-400 hover:text-gray-300">Education</a><a href="#projects-section" class="text-gray-400 hover:text-gray-300">Projects</a><a href="#contact-section" class="text-gray-400 hover:text-gray-300">Contact</a></div></div><div class="mt-8 text-center text-gray-400"><p>\xA9 2024 Ndiene Tshivhase. All rights reserved.</p></div></div></footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/web-footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_web_header = __nuxt_component_0;
  const _component_web_footer = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_web_header, null, null, _parent));
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(ssrRenderComponent(_component_web_footer, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-Q5AWN4vo.mjs.map
