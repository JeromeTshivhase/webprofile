import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { useSSRContext } from 'vue';
import { _ as _export_sfc } from '../server.mjs';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'nodemailer';
import '@dword-design/functions';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main$2 = {
  mounted() {
    const navbar = (void 0).getElementById("navbar");
    (void 0).addEventListener("scroll", function() {
      const scrollY = (void 0).scrollY || (void 0).pageYOffset;
      if (scrollY > 0) {
        navbar.classList.add("blurred");
      } else {
        navbar.classList.remove("blurred");
      }
    });
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><nav id="navbar" class="fixed top-0 flex w-full z-50 items-center justify-between sm:h-16 md:justify-center my-0"><div class="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0"><div class="flex items-center justify-between w-full md:w-auto"><a href="\\" aria-label="Home"><h1 class="text-gray-900 font-bold text-2xl px-10">Ndiene<span class="text-gray-950">T</span></h1></a><div class="mr-5 flex items-center md:hidden"><button type="button" id="main-menu" aria-label="Main menu" aria-haspopup="true" class="inline-flex items-center justify-center p-2 rounded-md text-gray-950 hover:text-teal-500 hover:bg-teal-100 focus:outline-none focus:bg-teal-100 focus:text-teal-500 transition duration-150 ease-in-out"><svg stroke="currentColor" fill="none" viewBox="0 0 24 24" class="h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg></button></div></div></div><div class="hidden md:flex md:space-x-10 text-2xl"><a href="#about-section" class="font-light text-gray-950 hover:text-white transition duration-150 ease-in-out">About</a><a href="#skills-section" class="font-light text-gray-950 hover:text-white transition duration-150 ease-in-out">Skills</a><a href="#experience-section" class="font-light text-gray-950 hover:text-white transition duration-150 ease-in-out">Experience</a><a href="#projects-section" class="font-light text-gray-950 hover:text-white transition duration-150 ease-in-out">Projects</a></div></nav></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/web-header.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1>Footer here</h1></div>`);
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
//# sourceMappingURL=default-CXGc8rlh.mjs.map
